import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './style';
import String from '../../utils/string';
import AppImages from '../../assets/images';

class ToolbarEditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    const{rightClickListener}=this.props
    return (
      <SafeAreaView style={styles.safearea}>
        <View style={styles.toolbarcontainer}>
          <Text style={styles.profile}>{String.Profile}</Text>
          <TouchableOpacity style={styles.logoutcontainer} activeOpacity={0.8} onPress={rightClickListener}>
            <Image source={AppImages.ic_logout} style={styles.logout} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default ToolbarEditProfile;
