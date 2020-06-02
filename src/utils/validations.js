
import NetInfo from "@react-native-community/netinfo";


const Validations = {
  checkNetConnection: async () => {
    let state = await NetInfo.fetch();
    if (state.isConnected) {
      return state.isConnected
    } else {
      return false
    }
  },

  isEmailInvalid: text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return true;
    }
    return false;
  },
  
  
};

export default Validations;
