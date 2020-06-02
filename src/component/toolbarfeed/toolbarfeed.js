import React, { Component } from 'react';
import { View,Text,SafeAreaView,Image, TouchableOpacity} from 'react-native';
import styles from './index'
import Color from '../../utils/color';
import Method from '../../utils/methods';
import String from '../../utils/string'

 class ToolbarFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage:''
    };
  }

  async componentDidMount(){
   try{
    let profileDetaill=await Method.getPref(String.LoginDetail)
    this.setState({profileImage:profileDetaill.ProfileImage})
   }
   catch(error){

   }
    
  }

  render() {
    const{onProfileListener}=this.props
    return (
      <SafeAreaView style={{backgroundColor:Color.dark_white}}>
       <View style={styles.toolbarcontainer}>
       <Text style={styles.today}>TODAY</Text>
        <View style={styles.titlecontainer}>
          <Text style={styles.myfeed}>My Feed</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={onProfileListener}>
          <Image style={styles.profileimage} source={{uri:this.state.profileImage}}/>
          </TouchableOpacity>
        </View>
       </View>
        <View style={styles.linecontainer}/>
      </SafeAreaView> 
    );
  }
}


export default ToolbarFeed
