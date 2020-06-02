import { 
    User_Login
} from "./constant";
import Method from "../utils/methods";
import Toast from 'react-native-simple-toast'
import { Routes } from "../router/routes";
import String from '../utils/string'

// export function loginResponse(){
//     return {
//         type: User_Login,
//         loginInfo
//     }
// }




export const onLogin = (loginInfo,navigation) => {
  return async dispatch => {
      try {
      const storeCredential=await Method.getPref(String.LoginData)
        const storeEmail=storeCredential.Email
        const storePassword=storeCredential.Password
        const userEmail=loginInfo.Email
        const userPassword=loginInfo.Password
       if(userEmail!==storeEmail){
            Toast.show(String.Verify_Email)
       }
       else if(userPassword!==storePassword){
            Toast.show(String.Verify_Password)
       }
       else{
        //    Toast.show(String.Login_Sucees)
           Method.savePref(String.IsLogin,true)
            Method.clearStackAndOpenScreen(navigation,Routes.Dashboard)
       }
      } catch(error) {
          console.log(error)
      }
  }
};

export const onGitHub = (loginInfo,navigation) => {
    return async dispatch => {
        try {
        
            //  Toast.show(String.Login_Sucees)
             Method.savePref(String.IsLogin,true)
             Method.savePref(String.LoginDetail,loginInfo)
    
              Method.clearStackAndOpenScreen(navigation,Routes.Dashboard)
         
        } catch(error) {
            console.log(error)
        }
    }
  };


