import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './style';
import {Routes} from '../../router/routes';
import Method from '../../utils/methods';
import String from '../../utils/string';
import Color from '../../utils/color';
class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    
    setTimeout(() => {
      this.gotoNext();
    }, 1500);
  }
  
  gotoNext = () => {
    Method.getPref(String.IsLogin)
      .then((result) => {
        if (result) {
          Method.clearStackAndOpenScreen(
            this.props.navigation,
            Routes.Dashboard,
          );
        } else {
          this.props.navigation.replace(Routes.Login);
        }
      })
      .catch((error) => {
        this.props.navigation.replace(Routes.Login);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Color.white} barStyle='dark-content'/>
        <Text style={styles.splash}>{String.GasUp}</Text>
      </View>
    );
  }
}
export default SplashScreen;
