import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StatusBar} from 'react-native';
import styles from './style';
import ToolbarEditProfile from '../../component/toolbareditprofile/toolbareditprofile';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import String from '../../utils/string';
import Color from '../../utils/color';
import {EditProfileType} from '../../utils/enum';
import Toast from 'react-native-simple-toast'
import Method from '../../utils/methods';
import { Routes } from '../../router/routes';

class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editProfileList: [],
      userName:'',
      mobileNumber:'',
      email:''
    };
  }
  handleEditClick=()=>{
    if(!this.state.isFromGithub){
      this.checkValidation()
    }
    else{
      Toast.show(String.You_Can_Not)
    }
  }

  checkValidation=()=>{
    if (this.state.userName.trim().length <= 0) {
      Toast.show(String.Empty_UserName);
    } else if (!isNaN(this.state.userName)) {
      Toast.show(String.Valid_UserName);
    } else if (this.state.mobileNumber.trim().length <= 0) {
      Toast.show(String.Empty_MobileNumber);
    } else if (
      this.state.mobileNumber.trim().length <10
    ) {
      Toast.show(String.Valid_MobileNumber);
    } else {
      this.saveCredential()
    }
  }

  saveCredential=()=>{
   let loginDetail={
    Email: this.state.email,
    UserName: this.state.userName,
    ProfileImage:
      'https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    MobileNumber:this.state.mobileNumber,
    Name:'admin',
    IsFromGitHub: false,
   }
   Method.savePref(String.LoginDetail,loginDetail)
   Toast.show('Edit saved')
  }
  getProfileDetail=async()=>{
    try{
      let response=await Method.getPref(String.LoginDetail)
      console.log(response)
      String.Edit_Profile_List.forEach((item) => {
        switch (item.Type) {
          case EditProfileType.UserName:
            item.Value = response.UserName;
           this.setState({
             userName:response.UserName
           })
            break;
          case EditProfileType.MobileNumber:
            item.Value = response.MobileNumber;
            this.setState({
              mobileNumber:response.MobileNumber
            })
            break;
          case EditProfileType.Email:
            item.Value = response.Email;
            this.setState({
              email:response.Email
            })
            break;
        }
      });
      this.setState({
        editProfileList: String.Edit_Profile_List,
        profileImage:response.ProfileImage,
        Name:response.Name,
        isFromGithub:response.IsFromGitHub
      });

     }
     catch(error){
  
     }
  }

  componentDidMount() {
    this.getProfileDetail();
    
  
  }
  onChangeHandleText=(text,type)=>{
    switch(type){
      case EditProfileType.UserName:
        this.setState({
          userName:text
        })
        break
        case EditProfileType.MobileNumber:
          this.setState({
            mobileNumber:text
          })
        break
        case EditProfileType.Email:
          this.setState({
            email:text
          })
        break
    }
  }

  onRightClick=()=>{
    Method.startWithFresh(this.props.navigation,Routes.Login,this.state.isFromGithub)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Color.orange}/>
        <ToolbarEditProfile rightClickListener={this.onRightClick}/>
        <KeyboardAwareScrollView
          overScrollMode="never"
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}>
          <View style={styles.profilecontainer}>
            <Image
              style={styles.profileimage}
              source={{
                uri:this.state.profileImage,
              }}
            />
            <Text style={styles.profilename}>{this.state.Name}</Text>
            <View style={styles.maininputcontainer}>
              {this.state.editProfileList.map((item, index) => {
                return (
                  <View style={styles.inputview}>
                    <View style={styles.inputcontainer}>
                      <TextInput
                        defaultValue={item.Value}
                        ref={(input) => {
                          this[`textInput${index}`] = input;
                        }}
                        
                        onChangeText={(text)=>{
                          this.onChangeHandleText(text,index)
                        }}
                        autoCapitalize={'none'}
                        onSubmitEditing={() => {
                          !item.IsLast
                            ? this[`textInput${index + 1}`].focus()
                            : null;
                        }}
                        style={styles.textinput}
                        keyboardType={item.KeyboardType}
                        returnKeyType={item.ReturnKeyType}
                      />
                      <Text style={styles.title}>{item.Title}</Text>
                    </View>
                    <View style={styles.linecontainer} />
                  </View>
                );
              })}
            </View>
          </View>
          <TouchableOpacity style={styles.editbutton} activeOpacity={0.9} onPress={this.handleEditClick}>
            <Text style={styles.edit}>{String.Edit}</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
        
      </View>
    );
  }
}
export default EditProfileScreen;
