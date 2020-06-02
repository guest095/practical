import {StyleSheet} from 'react-native';
import Color from '../../utils/color';
import StyleConfig from '../../assets/StyleConfig';

const styles = StyleSheet.create({
  safearea: {
    backgroundColor: Color.orange,
  },
  toolbarcontainer: {
    alignItems: 'center',
    backgroundColor: Color.orange,
    flexDirection: 'row',
    paddingVertical: StyleConfig.smartScale(15),
  },
  profile: {
    textAlign: 'center',
    flex: 1,
    fontSize: StyleConfig.countPixelRatio(22),
    color: Color.white,
    fontFamily: StyleConfig.fontMedium,
  },
  logout: {
    width: StyleConfig.countPixelRatio(45),
    height: StyleConfig.countPixelRatio(45),
    resizeMode: 'contain',
  },
  logoutcontainer: {
    position: 'absolute',
    right: 0,
    marginEnd: StyleConfig.smartWidthScale(20),
  },
});
export default styles;
