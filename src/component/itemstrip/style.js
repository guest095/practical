import {StyleSheet} from 'react-native';
import StyleConfig from '../../assets/StyleConfig';
import Color from '../../utils/color';

const styles = StyleSheet.create({
  stripitemcontainer:{flexDirection: 'row'},
  verticalline: {
    height: StyleConfig.smartScale(110),
    width: StyleConfig.smartScale(0.8),
    backgroundColor: Color.light_grey,
  },
  selectcolorcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: StyleConfig.smartWidthScale(15),
  },
  toplinecontainer: {
    position: 'absolute',
    top: 0,
    width: StyleConfig.smartScale(23.6),
    height: StyleConfig.smartScale(1),
    backgroundColor: Color.light_grey,
  },
  bottomlinecontainer:{
    position: 'absolute',
    bottom: 0,
    width: StyleConfig.smartScale(23.6),
    height: StyleConfig.smartScale(1),
    backgroundColor: Color.light_grey,
  },
  squarecolor: {
    width: StyleConfig.smartScale(22),
    height: StyleConfig.smartScale(22),
    backgroundColor: Color.black,
  },
  stripdetailcontiner:{
    marginStart:StyleConfig.smartWidthScale(10),
    marginEnd:StyleConfig.smartWidthScale(15),
    flex:1,
    justifyContent:'center'
  },
  colorlistcontainer:{
    flexDirection:'row'
  },
  colorview:{
    borderRadius:StyleConfig.countPixelRatio(5),
    height: StyleConfig.smartScale(22),
    flex:1/5,
    backgroundColor:'yellow'
  },
  colormainview:{
    borderRadius:StyleConfig.countPixelRatio(10),
    marginHorizontal:StyleConfig.smartWidthScale(3),

    flex:1/5,
    
  },
  stripnamecontainer:{
    alignItems:'center',
    flexDirection:'row',
    position:'absolute',
    top:0,
    marginHorizontal:StyleConfig.smartWidthScale(5),
  },
  colorinput:{
    padding:0,
    textAlign:'center',
    width:StyleConfig.smartWidthScale(60),
    height:StyleConfig.smartScale(30),
    borderRadius:StyleConfig.countPixelRatio(5),
    borderWidth:StyleConfig.countPixelRatio(1),
    borderColor:Color.light_grey
  
  },
  colordetailview:{
    flex:1/5
  },
  stripnamemain:{
    flex:1,

  },
  colorvalue:{
    color:Color.light_grey,
    flex:1/5,
    fontSize:StyleConfig.countPixelRatio(18),
    fontFamily:StyleConfig.fontRegular,
    textAlign:'center',
    marginTop:StyleConfig.smartScale(5)
  },
  colorvaluecontainer:
    {position:'absolute',flexDirection:'row',marginBottom:StyleConfig.smartScale(20),bottom:0},
    striptitle:{
      fontFamily:StyleConfig.fontSemibold,
      fontSize:StyleConfig.countPixelRatio(20),
      color:Color.grey
    },
    stripdescription:{
      fontFamily:StyleConfig.fontSemibold,
      fontSize:StyleConfig.countPixelRatio(18),
      color:Color.light_grey
    }
  
});

export default styles;
