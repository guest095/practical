import {StyleSheet} from 'react-native'
import Color from '../../utils/color';
import StyleConfig from '../../assets/StyleConfig';


const styles = StyleSheet.create({
  safearea:{
      backgroundColor:Color.dark_whie,
      flex:1
  },
  maincontainer:{
      flex:1,
      
  },
  listcontainer:{
      paddingVertical:StyleConfig.smartScale(10)
  }
});

export default styles