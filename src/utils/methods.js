import AsyncStorage from '@react-native-community/async-storage';
import String from './string';

import { CommonActions } from '@react-navigation/native';


const Method = {
  savePref: (key, value) => {
    AsyncStorage.setItem(key, JSON.stringify(value), (err) => {});
  },
  saveStringPref: (key, value) => {
    AsyncStorage.setItem(key, value, (err) => {});
  },

  // isIphoneNotch: () => {
  //   if (DeviceInfo.hasNotch() && StyleConfig.isIphone) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // },

  getPref: (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(JSON.parse(result));
        } else {
          reject(false);
        }
      });
    });
  },
  getStringPref: (key) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(false);
        }
      });
    });
  },
  getClosestValue:(findNumber,index)=>{
    let closestValue=String.StripColorList[index].ColorList.reduce(
      (a, b) => {
        return Math.abs(b.ColorValue - findNumber) <
          Math.abs(a.ColorValue - findNumber)
          ? b
          : a;
      },
    )
    return closestValue
  },
 arrayRemove:(arr, value) =>{ return arr.filter(function(ele){ return ele != value; })},
  
clearStackAndOpenScreen:(navigation,routeName)=>{
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        { name: routeName }
      ],
    })
  );
},

  startWithFresh:async(navigation,routeName,isFromGithub)=>{
    if(isFromGithub){
      AsyncStorage.clear()
    }
    else{
      let loginDetail=await Method.getPref(String.LoginDetail)
      AsyncStorage.clear()
      Method.savePref(String.LoginDetail,loginDetail)
    }
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: routeName }
        ],
      })
    );
   
    }
  }
  

export default Method;
