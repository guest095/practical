import {StyleSheet} from 'react-native'
import StyleConfig from '../../assets/StyleConfig';

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    splash:{
        
        fontFamily:StyleConfig.fontRegular,
        fontSize:StyleConfig.countPixelRatio(50)
    }
});

export default styles