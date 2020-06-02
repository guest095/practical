import {StyleSheet} from 'react-native'
import StyleConfig from '../../assets/StyleConfig'
import Color from '../../utils/color';

const styles = StyleSheet.create({
    toolbarcontainer:{
        paddingVertical:StyleConfig.smartScale(15)
    },
    today:{
        marginHorizontal:StyleConfig.smartWidthScale(20),
        color:Color.grey,
        fontSize:StyleConfig.countPixelRatio(18),
        fontFamily:StyleConfig.fontSemibold,
    },
    myfeed:{
        flex:1,
        fontFamily:StyleConfig.fontBold,
        fontSize:StyleConfig.countPixelRatio(40),
    },
    titlecontainer:{
        marginHorizontal:StyleConfig.smartWidthScale(20),
        alignItems:'center',
        flexDirection:'row'
    },
    profileimage:{
        width:StyleConfig.countPixelRatio(50),
        height:StyleConfig.countPixelRatio(50),
        borderRadius:StyleConfig.countPixelRatio(25),
    },
    linecontainer:{
        opacity:0.4,
        height:StyleConfig.smartScale(1),
        backgroundColor:Color.grey
    }
});

export default styles