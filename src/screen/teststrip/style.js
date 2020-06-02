import {StyleSheet} from 'react-native'
import Color from '../../utils/color';
import StyleConfig from '../../assets/StyleConfig';


const styles = StyleSheet.create({
  safearea:{
      flex:1,
      backgroundColor:Color.white
  },
  nextcontainer:{
    marginHorizontal:StyleConfig.smartWidthScale(15),
    marginVertical:StyleConfig.smartScale(20),
    paddingHorizontal:StyleConfig.smartWidthScale(13),
    paddingVertical:StyleConfig.smartScale(3),
    borderRadius:StyleConfig.countPixelRatio(20),
    backgroundColor:Color.grey,
    alignSelf:'flex-end'
  },
  stripdetailist:{
    marginTop:StyleConfig.smartScale(10),
  },
  next:{
    fontFamily:StyleConfig.fontMedium,
    fontSize:StyleConfig.countPixelRatio(18),
    color:Color.white
  },
  teststrip:{
    fontFamily:StyleConfig.fontBold,
    fontWeight:'bold',
    fontSize:StyleConfig.countPixelRatio(32),
    marginHorizontal:StyleConfig.smartWidthScale(15),
    color:Color.blue
  },
  striplist:{
    paddingVertical:StyleConfig.smartScale(20)
  }

});

export default styles