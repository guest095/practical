import {StyleSheet} from 'react-native'
import StyleConfig from '../../assets/StyleConfig';
import Color from '../../utils/color';


const styles = StyleSheet.create({
    vContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.white,
      },
      iNoNetwork: {
        height: StyleConfig.smartWidthScale(250),
        width: StyleConfig.smartWidthScale(250),
        resizeMode: 'contain',
      },
      tNoNetwork: {
        color:Color.orange,
        fontFamily:StyleConfig.fontBold,
        fontSize: StyleConfig.countPixelRatio(22),
        alignItems: 'center',
        marginStart: StyleConfig.smartWidthScale(20),
        marginEnd: StyleConfig.smartWidthScale(20),
      },
      tPleaseConnect: {
        color:Color.grey,
        alignSelf:'center',
        fontFamily:StyleConfig.fontMedium,
        fontSize: StyleConfig.countPixelRatio(18),
        alignItems: 'center',
        marginStart: StyleConfig.countPixelRatio(20),
        marginEnd: StyleConfig.smartWidthScale(20),
      },
      toRetry: {
        backgroundColor: Color.orange,
        flexDirection: 'row',
       justifyContent:'center',
       alignItems:'center',
       height:StyleConfig.smartScale(40),
       width:StyleConfig.smartWidthScale(150),
        marginTop: StyleConfig.smartScale(40),
        marginBottom: StyleConfig.smartScale(40),
        borderRadius: StyleConfig.countPixelRatio(20),
      },
      tRetry: {
        fontSize: StyleConfig.countPixelRatio(18),
        fontFamily:StyleConfig.fontRegular,
        color:Color.white}

    
   
});

export default styles