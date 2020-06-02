import {StyleSheet} from 'react-native'
import Color from '../../utils/color'
import StyleConfig from '../../assets/StyleConfig'

const styles = StyleSheet.create({
  safearea:{
      flex: 1,
      backgroundColor:Color.white
  },
  citylogo:{
      bottom:0,
      position:'absolute',
      width:StyleConfig.width,
      height:StyleConfig.smartScale(90),
      resizeMode:'stretch'
        
  },
  logo:{
      width:StyleConfig.countPixelRatio(150),
      height:StyleConfig.countPixelRatio(150),
      resizeMode:'contain',
      marginTop:StyleConfig.smartScale(50),
      marginHorizontal:StyleConfig.smartWidthScale(5)
      
  },
  title:{
    fontSize:StyleConfig.countPixelRatio(18),
    color:Color.light_grey,
    fontFamily:StyleConfig.fontRegular,
  },
  login:{
      fontSize:StyleConfig.countPixelRatio(34),
      color:Color.black,
      fontFamily:StyleConfig.fontBold,
      marginTop:StyleConfig.smartScale(15),
      marginHorizontal:StyleConfig.smartWidthScale(25)
  },
  loginContainer:{
    marginTop:StyleConfig.smartScale(15)
  },
  inputmaincontainer:{
      marginVertical:StyleConfig.smartScale(15),
    marginHorizontal:StyleConfig.smartWidthScale(25)
  },
  inputcontainer:{
      flexDirection:'row',
      marginVertical:StyleConfig.smartScale(5)
  },
  input:{
      padding:0,
      flex:1,
      fontFamily:StyleConfig.fontRegular,
      color:Color.black,
      fontSize:StyleConfig.countPixelRatio(20)
  },
  signingithub:{
      marginStart:StyleConfig.smartWidthScale(10),
    fontSize:StyleConfig.countPixelRatio(18),
    color:Color.white,
    fontFamily:StyleConfig.fontLight,
  },
  linecontainer:{
      height:StyleConfig.smartScale(1),
      backgroundColor:Color.black,
      opacity:0.0789
  },
  eye:{
      width:StyleConfig.countPixelRatio(20),
      height:StyleConfig.countPixelRatio(20),
      resizeMode:'contain'
  },
  eyecontainer:{
      width:StyleConfig.countPixelRatio(30),
      height:StyleConfig.countPixelRatio(30),
      justifyContent:'center',
      alignItems:'center'
  },
  btncontainer:{
      alignItems:'center',
      marginVertical:StyleConfig.smartScale(15),
      flexDirection:'row'
  },
  gitbtncontainer:{
      paddingVertical:StyleConfig.smartScale(10),
      paddingHorizontal:StyleConfig.smartWidthScale(10),
      backgroundColor:Color.black,
    flexDirection:'row'
  },
  gitlogo:{
      width:StyleConfig.countPixelRatio(20),
      height:StyleConfig.countPixelRatio(20),
      resizeMode:'contain'
  },
  loginbtncontainer:{
      paddingHorizontal:StyleConfig.smartWidthScale(35),
      paddingVertical:StyleConfig.smartScale(8),
      borderTopLeftRadius:StyleConfig.countPixelRatio(20),
      borderBottomLeftRadius:StyleConfig.countPixelRatio(20),
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      right: 0,
      backgroundColor:Color.orange
  },
  loadercontainer:
    {
        width: StyleConfig.width,
        height: StyleConfig.height,
        position: 'absolute',
        backgroundColor:'rgba(0,0,0,0.3)',
        justifyContent: 'center',
      }
  
})

export default styles