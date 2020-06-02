import {User_Login} from './constant';
import String from '../utils/string';

export const loginInfo = (state = String.StripColorList, action) => {
  switch (action.type) {
    case User_Login:
     return state

    default:
      return state;
  }
};

