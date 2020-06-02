import React, { Component } from 'react';
import AppNavigator from './src/router/index'
import { Provider } from 'react-redux';
import store from './src/redux/store'






class App extends Component{

 
 render(){
   return(
  <Provider store={store}>
   <AppNavigator/>
   </Provider>
   )
 }
}
   

export default App;
