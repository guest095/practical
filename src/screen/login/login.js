import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import String from '../../utils/string';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppImages from '../../assets/images';
import {LoginType} from '../../utils/enum';
import Toast from 'react-native-simple-toast';
import Color from '../../utils/color';
import Validations from '../../utils/validations';
import {Routes} from '../../router/routes';
import {connect} from 'react-redux';
import buffer from 'buffer';
import {onLogin, onGitHub} from '../../redux/actions';
import ApiRef from '../../utils/apiref';
import ModalNetwork from '../../component/modalnetwork/modalnetwork';
import StyleConfig from '../../assets/StyleConfig';
import Method from '../../utils/methods';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordShow: true,
      userName: '',
      passWord: '',
      onLoader: false,
      networkModal: false,
    };
    
  }
  handleOnChangeText = (text, type) => {
    switch (type) {
      case LoginType.UserName:
        this.setState({
          userName: text,
        });
        break;
      case LoginType.Password:
        this.setState({
          passWord: text,
        });
        break;
    }
  };
  onLoader = () => {
    this.setState({
      onLoader: true,
    });
  };
  offLoader = () => {
    this.setState({
      onLoader: false,
    });
  };
  onLoginclick = (isGitLogin) => {
    if (this.state.userName.trim().length <= 0) {
      Toast.show(String.Empty_UserName);
    } else if (Validations.isEmailInvalid(this.state.userName)) {
      Toast.show(String.Empty_UserName);
    } else if (this.state.passWord.trim().length <= 0) {
      Toast.show(String.Empty_Password);
    } else if (
      this.state.passWord.trim().length < 6 ||
      this.state.passWord.trim().length > 20
    ) {
      Toast.show(String.Password_Requirement);
    } else {
      isGitLogin ? this.onLoginWithGithub() : this.verifyLogin();
    }
  };

  componentDidMount() {
    this.saveCredential();
   
  }
  
  saveCredential = () => {
    const loginDetail = {
      Email: 'admin@gmail.com',
      UserName: 'admin123',
      ProfileImage:
        'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      MobileNumber: '0000000000',
      Name: 'admin',
      IsFromGitHub: false,
    };
    let loginCredential = {
      Email: 'admin@gmail.com',
      Password: 'Simform.123',
    };
    Method.savePref(String.LoginData, loginCredential);
    Method.getPref(String.LoginDetail)
      .then((result) => {
        if (!result) {
          Method.savePref(String.LoginDetail, loginDetail);
        }
      })
      .catch((error) => {
        Method.savePref(String.LoginDetail, loginDetail);
      });
  };

  onNetworkModal = (API_REF, textInfo) => {
    this.setState({
      networkModal: true,
      callRetryApi: API_REF,
      modalInfo: textInfo,
    });
  };

  offNetworkModal = async (API_REF) => {
    var networkResult = await Validations.checkNetConnection();
    if (networkResult) {
      this.setState({
        networkModal: false,
      });
      switch (API_REF) {
        case ApiRef.GithubLogin:
          this.onLoginWithGithub();
          break;
      }
    } else {
      this.onNetworkModal(ApiRef.GithubLogin, String.Please_Check_Network);
    }
  };

  onLoginWithGithub = async () => {
    var b = new buffer.Buffer(`${this.state.userName}:${this.state.passWord}`);
    var encodeAuth = b.toString('base64');
    var headers = new Headers();
    headers.append('Authorization', 'Basic ' + encodeAuth);
    this.onLoader();
    var networkResult = await Validations.checkNetConnection();
    if (networkResult) {
      fetch('https://api.github.com/user', {
        headers: headers,
      })
        .then((response) => {
          this.offLoader();
          if (response.status === 200) {
            return response.json();
          } else {
            Toast.show(String.Response_Error);
          }
        })
        .then((results) => {
          this.handleResult(results);
        })
        .catch((error) => {
          this.onNetworkModal(ApiRef.GithubLogin, error.message);
        });
    } else {
      this.offLoader();
      this.onNetworkModal(ApiRef.GithubLogin, String.Please_Check_Network);
    }
  };
  verifyLogin = () => {
    const loginDetail = {
      Email: this.state.userName,
      Password: this.state.passWord,
    };
    this.props.onLoginClick(loginDetail, this.props.navigation);
  };

  handleResult = (results) => {
    console.log(results, 'results');
    const email = results.email;
    const userName = results.login;
    const Name = results.name;
    const profileImage = results.avatar_url;
    const isFromGitHub = true;
    let loginDetail = {
      Email: email,
      UserName: userName,
      ProfileImage: profileImage,
      IsFromGitHub: isFromGitHub,
      Name: Name,
    };
    this.props.onGitHubClick(loginDetail, this.props.navigation);
  };
  render() {
    return (
      <SafeAreaView style={styles.safearea}>
        <StatusBar backgroundColor={Color.white} barStyle="dark-content" />

        <KeyboardAwareScrollView
          bounces={false}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          overScrollMode="never">
          <Image style={styles.logo} source={AppImages.ic_app_icon} />
          <Text style={styles.login}>{String.Login}</Text>
          <View style={styles.loginContainer}>
            {String.Login_List.map((item, index) => {
              return (
                <View style={styles.inputmaincontainer}>
                  <Text style={styles.title}>{item.Title}</Text>
                  <View style={styles.inputcontainer}>
                    <TextInput
                      style={styles.input}
                      ref={(input) => {
                        this[`textInput${index}`] = input;
                      }}
                      onChangeText={(text) => {
                        this.handleOnChangeText(text, index);
                      }}
                      autoCapitalize={'none'}
                      keyboardType={item.KeyboardType}
                      returnKeyType={item.ReturnKeyType}
                      onSubmitEditing={() => {
                        !item.IsLast
                          ? this[`textInput${index + 1}`].focus()
                          : null;
                      }}
                      secureTextEntry={
                        item.Type === LoginType.Password
                          ? this.state.isPasswordShow
                          : null
                      }
                    />
                    {item.Type === LoginType.Password ? (
                      <TouchableOpacity
                        style={styles.eyecontainer}
                        onPress={() => {
                          this.setState({
                            isPasswordShow: !this.state.isPasswordShow,
                          });
                        }}>
                        {this.state.isPasswordShow ? (
                          <Image
                            style={styles.eye}
                            source={AppImages.ic_hide}
                          />
                        ) : (
                          <Image
                            style={styles.eye}
                            source={AppImages.ic_show}
                          />
                        )}
                      </TouchableOpacity>
                    ) : null}
                  </View>
                  <View style={styles.linecontainer} />
                </View>
              );
            })}
          </View>
          <View style={styles.btncontainer}>
            <TouchableOpacity
              onPress={() => {
                this.onLoginclick(true);
              }}
              style={styles.gitbtncontainer}
              activeOpacity={0.8}>
              <Image style={styles.gitlogo} source={AppImages.ic_github} />
              <Text style={styles.signingithub}>{String.Sign_In_Git}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.onLoginclick();
              }}
              style={styles.loginbtncontainer}
              activeOpacity={0.8}>
              <Text style={styles.signingithub}>{String.Login}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>

        <Image style={styles.citylogo} source={AppImages.ic_city} />
        <ModalNetwork
          isModalOpen={this.state.networkModal}
          closeNetworkModal={this.offNetworkModal}
          callApi={this.state.callRetryApi}
          netInfo={this.state.modalInfo}
        />
        {this.state.onLoader ? (
          <View style={styles.loadercontainer}>
            <ActivityIndicator color={Color.orange} size="large" />
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLoginClick: (loginInfo, navigation) => {
    dispatch(onLogin(loginInfo, navigation));
  },

  onGitHubClick: (loginInfo, navigation) => {
    dispatch(onGitHub(loginInfo, navigation));
  },
});
export default connect(null, mapDispatchToProps)(LoginScreen);
