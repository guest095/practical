import AppImages from '../assets/images';
import Color from './color';
import { EditProfileType,LoginType} from './enum';

const String = {
  BottomTabList: [
    {Name: 'My Feed', Icon: AppImages.ic_feed},
    {Name: 'Test Strip', Icon: AppImages.ic_strip},
  ],
  PlaceHolder_Color: '0',
  Next: 'Next',
  GasUp:'GasUp',
  You_Can_Not:'You can not edit profile from github profile',
  New: 'New',
  Error:'Error',
  Retry:'Retry',
  Login:'Login',
  Response_Error:'Something went wrong please check your credential',
  Profile: 'Profile',
  LoginDetail:'LoginDetail',
  TestStrip: 'Test Strip',
  Edit:'Edit',
  Sign_In_Git:'Sign in with Github',
  Empty_UserName:'Please enter username',
  Valid_UserName:'Please enter valid username',
  Valid_MobileNumber:'Please enter valid mobile number',
  Empty_MobileNumber:'Please enter mobile number',
  Empty_Password:'Please enter password',
  Password_Requirement:'Password must be between 6 to 20 character',
  Verify_Email:'Your email did not match with credential',
  Verify_Password:'Your password did not match with credential',
  In_Development:'In Development',
  Login_Sucees:'Login Successfull',
  LoginData:'LoginData',
  Please_Check_Network:'Network request failed',
  IsLogin:'IsLogin',

  Edit_Profile_List: [
    {
      Title: 'Username',
      KeyboardType:'default',
      ReturnKeyType:'next',
      IsLast:false,
      Type:EditProfileType.UserName
    },
    {
      Title: 'Mobile Number',
      KeyboardType:'phone-pad',
      ReturnKeyType:'done',
      IsLast:false,
      Type:EditProfileType.MobileNumber
    },
    {
      Title: 'Email (optional)',
      KeyboardType:'email-address',
      ReturnKeyType:'done',
      IsLast:true,
      Type:EditProfileType.Email
    },
  ],

  Login_List:[
    {
      Title: 'Username',
      KeyboardType:'email-address',
      ReturnKeyType:'next',
      IsLast:false,
      Type:LoginType.UserName
    },
    {
      Title: 'Password',
      KeyboardType:'default',
      ReturnKeyType:'done',
      IsLast:true,
      Type:LoginType.Password
    },
    
  ],

  //Test strip screen data
  StripColorList: [
    {
      Id: 1,
      Title: 'Total Hardness',
      Description: 'ppm',
      SelectedColor: {
        Id: 11,
        ColorCode: Color.endeavour,
        ColorValue: 51,
      },
      ColorList: [
        {
          Id: 11,
          ColorCode: Color.endeavour,
          ColorValue: 0,
        },
        {
          Id: 12,
          ColorCode: Color.waikawa_grey,
          ColorValue: 110,
        },
        {
          Id: 13,
          ColorCode: Color.butterfly_bush,
          ColorValue: 250,
        },
        {
          Id: 14,
          ColorCode: Color.affair,
          ColorValue: 500,
        },
        {
          Id: 15,
          ColorCode: Color.vin_rouge,
          ColorValue: 1000,
        },
      ],
    },
    {
      Id: 2,
      Title: 'Total Chlorine',
      Description: 'ppm',
      SelectedColor: {
        Id: 21,
        ColorCode: Color.paris_daisy,
        ColorValue: 0,
      },
      ColorList: [
        {
          Id: 21,
          ColorCode: Color.paris_daisy,
          ColorValue: 0,
        },
        {
          Id: 22,
          ColorCode: Color.witch_haze,
          ColorValue: 1,
        },
        {
          Id: 23,
          ColorCode: Color.honeysuckle,
          ColorValue: 3,
        },
        {
          Id: 24,
          ColorCode: Color.chinook,
          ColorValue: 5,
        },
        {
          Id: 25,
          ColorCode: Color.silver_tree,
          ColorValue: 10,
        },
      ],
    },
    {
      Id: 3,
      Title: 'Free Chlorine',
      Description: 'ppm',
      SelectedColor: {
        Id: 31,
        ColorCode: Color.canary,
        ColorValue: 0,
      },
      ColorList: [
        {
          Id: 31,
          ColorCode: Color.canary,
          ColorValue: 0,
        },
        {
          Id: 32,
          ColorCode: Color.pearl_lusta,
          ColorValue: 1,
        },
        {
          Id: 33,
          ColorCode: Color.east_side,
          ColorValue: 3,
        },
        {
          Id: 34,
          ColorCode: Color.ce_soir,
          ColorValue: 5,
        },
        {
          Id: 35,
          ColorCode: Color.vivid_violet,
          ColorValue: 10,
        },
      ],
    },
    {
      Id: 4,
      Title: 'pH',
      Description: 'ppm',
      SelectedColor: {
        Id: 41,
        ColorCode: Color.california,
        ColorValue: 6.2,
      },
      ColorList: [
        {
          Id: 41,
          ColorCode: Color.california,
          ColorValue: 6.2,
        },
        {
          Id: 42,
          ColorCode: Color.burnt_orange,
          ColorValue: 6.8,
        },
        {
          Id: 43,
          ColorCode: Color.harley_davidson_orange,
          ColorValue: 7.2,
        },
        {
          Id: 44,
          ColorCode: Color.cinnabar,
          ColorValue: 7.8,
        },
        {
          Id: 45,
          ColorCode: Color.crimson,
          ColorValue: 8.4,
        },
      ],
    },
    {
      Id: 5,
      Title: 'Total Alkalinity',
      Description: 'ppm',
      SelectedColor: {
        Id: 51,
        ColorCode: Color.buttercup,
        ColorValue: 0,
      },
      ColorList: [
        {
          Id: 51,
          ColorCode: Color.buttercup,
          ColorValue: 0,
        },
        {
          Id: 52,
          ColorCode: Color.highball,
          ColorValue: 40,
        },
        {
          Id: 53,
          ColorCode: Color.cutty_sark,
          ColorValue: 120,
        },
        {
          Id: 54,
          ColorCode: Color.blue_stone,
          ColorValue: 180,
        },
        {
          Id: 55,
          ColorCode: Color.allports,
          ColorValue: 240,
        },
      ],
    },
    {
      Id: 6,
      Title: 'Cyanuric Acid',
      Description: 'ppm',
      SelectedColor: {
        Id: 61,
        ColorCode: Color.dixie,
        ColorValue: 0,
      },
      ColorList: [
        {
          Id: 61,
          ColorCode: Color.dixie,
          ColorValue: 0,
        },
        {
          Id: 62,
          ColorCode: Color.chocolate,
          ColorValue: 50,
        },
        {
          Id: 63,
          ColorCode: Color.sunset,
          ColorValue: 100,
        },
        {
          Id: 64,
          ColorCode: Color.jazzberry_jam,
          ColorValue: 150,
        },
        {
          Id: 65,
          ColorCode: Color.dark_purple,
          ColorValue: 300,
        },
      ],
    },
  ],
};

export default String;
