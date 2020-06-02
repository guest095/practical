import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routes'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screen/splash/splash';
import MyFeedScreen from '../screen/myfeed/myfeed';
import EditProfileScreen from '../screen/editprofile/editprofile'
import TestStripScreen from '../screen/teststrip/teststrip';
import CustomTabBar from './customtabbar';
import LoginScreen from '../screen/login/login';


const Tab = createBottomTabNavigator();

function TabHome() {
  return (
    <Tab.Navigator tabBar={(props)=><CustomTabBar {...props}/>} backBehavior='none' 
    lazy={true}
    screenOptions={{unmountOnBlur:true}}>
      <Tab.Screen name={Routes.MyFeed} component={MyFeedScreen} />
      <Tab.Screen name={Routes.TestStrip}component={TestStripScreen} />
     
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();
function AppNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name={Routes.Splash} component={SplashScreen}/>
          <Stack.Screen name={Routes.Login} component={LoginScreen}/>
          <Stack.Screen name={Routes.Dashboard} component={TabHome}/>
          <Stack.Screen name={Routes.EditProfile} component={EditProfileScreen}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator