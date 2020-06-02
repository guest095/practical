import {StyleSheet} from 'react-native'
import StyleConfig from '../../assets/StyleConfig';
import Color from '../../utils/color';

const styles = StyleSheet.create({
    maincontainer:{
        
            marginHorizontal: StyleConfig.smartWidthScale(20),
            marginVertical: StyleConfig.smartScale(8),
            borderRadius: StyleConfig.countPixelRatio(10),
          
    },
    indicator:{position:'absolute',alignSelf:'center'},
    playicon:{
        height:StyleConfig.countPixelRatio(15),
        width:StyleConfig.countPixelRatio(15),
        resizeMode:'contain'
    },  
    play:{
     alignSelf:'center',
      position: 'absolute',
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'rgba(0,0,0,0.7)',
      width: StyleConfig.countPixelRatio(60),
      height: StyleConfig.countPixelRatio(60),
      borderRadius: StyleConfig.countPixelRatio(30),
    },
    video:{
        // backgroundColor:Color.black,
        borderRadius: StyleConfig.countPixelRatio(10),
        height: StyleConfig.smartScale(170),
      },
    new:{
        fontSize:StyleConfig.countPixelRatio(16),
        fontFamily:StyleConfig.fontRegular,
        color:Color.danube
    },
    date:{
        fontSize:StyleConfig.countPixelRatio(16),
        fontFamily:StyleConfig.fontRegular,
        color:Color.grey,
    },
    space:{
        flex:1
    },
    title:{
        fontSize:StyleConfig.countPixelRatio(26),
        fontFamily:StyleConfig.fontBold,
        color:Color.black
    },
    description:{
      
        fontSize:StyleConfig.countPixelRatio(16),
        fontFamily:StyleConfig.fontSemibold,
        color:Color.grey
    },
    bottomcontainer:{
        backgroundColor: Color.light_white,
        borderRadius: StyleConfig.countPixelRatio(10),
        paddingVertical: StyleConfig.smartScale(15),
        marginTop: StyleConfig.smartScale(-10),
        paddingHorizontal: StyleConfig.smartWidthScale(20),
      },
      timecontainer:{
          flexDirection:'row'
      }
});

export default styles