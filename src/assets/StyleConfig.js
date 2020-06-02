import {Dimensions, Platform,} from 'react-native';
const {width, height} = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const widthPer = width / 100;
const heightPer = height / 100;
const deviceType = width < 480 ? 'phone' : 'tablet';
const iPhoneX = Platform.OS === 'ios' && (height === 812 || height === 896);
const ratioCount = Math.sqrt(height * height + width * width) / 1000;



const APP_FONTS = {
  FALLING_LIGHT:  'FallingSkyLight',
  FALLING_REGULAR: 'FallingSky',
  FALLING_MEDIUM:  'FallingSkyMed',
  FALLING_BOLD:  'FallingSkyBd',
  FALLING_SEMIBOLD: 'FallingSkySeBd'
};
export default {
  countPixelRatio: size => size * ratioCount,
  responsiveHeight: size => size * heightPer,
  responsiveWidth: size => size * widthPer,
  smartScale: value => {
    const tempHeight =
      Platform.OS === 'ios' ? (iPhoneX ? height - 78 : height) : height - 24;
    if (deviceType == 'phone') {
      return (value * tempHeight) / 667;
    }
    return (value * tempHeight) / 667;
  },
  smartWidthScale: value => {
    const tempWidth = width;
    if (deviceType == 'phone') {
      return (value * tempWidth) / 375;
    }
    return (value * tempWidth) / 375;
  },

  getFont: type => {
    switch (type) {
      case 'light':
        return APP_FONTS.FALLING_LIGHT;
      case 'regular':
        return APP_FONTS.FALLING_REGULAR;
      case 'medium':
        return APP_FONTS.FALLING_MEDIUM;
      case 'bold':
        return APP_FONTS.FALLING_BOLD;
  
      case 'semibold':
        return APP_FONTS.FALLING_SEMIBOLD;
      default:
        return APP_FONTS.FALLING_REGULAR;
    }
  },
  fontLight: APP_FONTS.FALLING_LIGHT,
  fontRegular: APP_FONTS.FALLING_REGULAR,
  fontMedium: APP_FONTS.FALLING_MEDIUM,
  fontBold: APP_FONTS.FALLING_BOLD,
  fontSemibold:APP_FONTS.FALLING_REGULAR,
  width,
  height,
  
  isIphone,
  isAndroid,
  
};
