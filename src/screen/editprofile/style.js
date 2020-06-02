import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import StyleConfig from '../../assets/StyleConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maininputcontainer: {
    paddingTop: StyleConfig.smartScale(20),
    paddingBottom: StyleConfig.smartScale(60)
  },
  profilename:{
    fontSize:StyleConfig.countPixelRatio(28),
    marginTop:StyleConfig.smartScale(15),
    fontFamily:StyleConfig.fontRegular,
    alignSelf:'center'
  },
  container: {flex: 1, backgroundColor: Color.orange},
  profilecontainer: {
    marginTop: StyleConfig.smartScale(80),
    backgroundColor: Color.white,
    marginHorizontal: StyleConfig.smartWidthScale(20),
    borderRadius: StyleConfig.countPixelRatio(15),
  },
  profileimage: {
    marginTop: StyleConfig.smartScale(-60),
    width: StyleConfig.countPixelRatio(140),
    height: StyleConfig.countPixelRatio(140),
    alignSelf: 'center',
    borderRadius: StyleConfig.countPixelRatio(70),
  },
  inputview: {
    paddingBottom: StyleConfig.smartScale(5),
    marginHorizontal: StyleConfig.smartWidthScale(20),
  },
  inputcontainer: {
    marginVertical: StyleConfig.smartScale(18),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textinput: {
    padding: 0,
    color: Color.black,
    fontFamily: StyleConfig.fontRegular,
    fontSize: StyleConfig.countPixelRatio(18),
    paddingHorizontal: StyleConfig.smartWidthScale(5),
    flex: 1,
  },
  linecontainer: {
    height: StyleConfig.smartScale(0.8),
    backgroundColor: Color.black,
    opacity: 0.0789,
  },
  title: {
    fontSize: StyleConfig.countPixelRatio(16),
    color: Color.grey,
    fontFamily: StyleConfig.fontRegular,
  },
  editbutton:{
      marginTop:StyleConfig.smartScale(-25),
      alignSelf:'center',
      backgroundColor:Color.black,
      borderRadius:StyleConfig.countPixelRatio(30),
      paddingHorizontal:StyleConfig.smartWidthScale(50),
      paddingVertical:StyleConfig.smartScale(15)
  },
  edit:{
      fontFamily:StyleConfig.fontLight,
      color:Color.white,
      fontSize:StyleConfig.countPixelRatio(20)
  }
});

export default styles;
