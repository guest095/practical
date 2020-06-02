import React, { Component } from 'react';
import { View, Text,StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';
import StyleConfig from '../assets/StyleConfig';
import Color  from '../utils/color';
import String from '../utils/string'
import Tab from './tab';
import { SafeAreaView } from 'react-native';
import { BottomTab } from '../utils/enum';
import { Routes } from './routes';


  class CustomTabBar extends Component {
    constructor(props) {
      super(props);
     
    }

    onTabClick=(index)=>{
        switch(index){
          case BottomTab.MyFeed:
            this.props.navigation.navigate(Routes.MyFeed)
            break;
            case BottomTab.TestStrip:
              this.props.navigation.navigate(Routes.TestStrip)
              break
        }
    }
    
    renderCategoryTab(){
      return(String.BottomTabList.map((item,index)=>{
        return(<Tab item={item} index={index} onTabListener={this.onTabClick}/>)
      }))
    }

    render() {
      return (
   <SafeAreaView style={styles.safearea}>
     <View style={styles.tabline}/>
        <View style={styles.bottomrowcontainer}>
       {this.renderCategoryTab()}
       </View>
        </SafeAreaView>
      );
    }
  }

  export default CustomTabBar
  const styles = StyleSheet.create({
    safearea:{
      backgroundColor:Color.white
    },
    bottomrowcontainer:{
      flexDirection:'row',
      alignItems:'center',
      height:StyleConfig.smartScale(60),
      backgroundColor:Color.white
    },
    lineseprator:{
      // height:StyleConfig.smartScale(50),
      width:StyleConfig.smartWidthScale(1),
      backgroundColor:Color.black,
      opacity:0.0789
    },
    tabline:{
      height:StyleConfig.smartScale(0.8),
      backgroundColor:Color.black,
      opacity:0.0789
    },
    flcontainer:{justifyContent:'space-around',width:StyleConfig.width}
    
   
  })
