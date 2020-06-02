import React, { Component } from 'react';
import {Image,StyleSheet,TouchableOpacity} from 'react-native';
import StyleConfig from '../assets/StyleConfig';

 class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const{onTabListener,item,index}=this.props
    return (
     <TouchableOpacity onPress={()=>{onTabListener(index)}} activeOpacity={0.8}>
        <Image source={item.Icon} style={styles.tab}/>
     </TouchableOpacity>
    );
  }
  
}
const styles = StyleSheet.create({
    tab:{
        width:StyleConfig.width/2,
        height:StyleConfig.countPixelRatio(40),
        resizeMode:'contain'
    }
})


export default Tabs
