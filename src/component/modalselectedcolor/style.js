import {StyleSheet} from 'react-native'
import StyleConfig from '../../assets/StyleConfig';
import Color from '../../utils/color';


const styles = StyleSheet.create({
    modalcontainer: {
        height: null,
        borderTopLeftRadius: StyleConfig.countPixelRatio(10),
        borderTopRightRadius: StyleConfig.countPixelRatio(10),
      },
      list: {
        marginTop: StyleConfig.smartScale(10),
        marginBottom: StyleConfig.isAndroid
          ? StyleConfig.smartScale(20)
          : StyleConfig.smartScale(30),
      },
      shapecontainer: {
        borderRadius:StyleConfig.countPixelRatio(10),
        width: StyleConfig.smartWidthScale(50),
        height: StyleConfig.smartScale(5),
        alignSelf: 'center',
        marginTop: StyleConfig.smartScale(8),
        // resizeMode:'contain',
        // alignSelf:'center'
      }, 
      mainrowcontainer:{
        marginHorizontal:StyleConfig.smartWidthScale(15),
        marginVertical:StyleConfig.smartScale(10)
      },
      title:{
        fontSize:StyleConfig.countPixelRatio(20),
        color:Color.grey,
        flex:1,
        fontFamily:StyleConfig.fontMedium
      },
      titlecontainer:{
        flexDirection:'row'
      },
      value:{
        fontSize:StyleConfig.countPixelRatio(18),
        color:Color.black,
        fontFamily:StyleConfig.regular
      },
      colorstrip:{
        height:StyleConfig.smartScale(10),
        width:StyleConfig.smartWidthScale(300),
        marginTop:StyleConfig.smartScale(10)
      }
});

export default styles