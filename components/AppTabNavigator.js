import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen'
import SettingScreen from '../screens/SettingScreen'
import TimerScreen from '../screens/TimerScreen';


export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/House.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Home Screen",
    }
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/cog.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Settings",
    }
  },
  TimerScreen: {
    screen: TimerScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/clock.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Break Timer",
    }
  }
});
