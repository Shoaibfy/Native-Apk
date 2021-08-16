import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Map from '../Components/Map';
import MusicPlayer from '../Components/MusicPlayer';
import React from 'react';
import {View, Image} from 'react-native';
import HomeScreen from '../Components/CopilotScreen';
import ImageScreen from '../Components/ImageScreen';
import ImageCrop from '../Components/ImageCrop';
import ImagePickerPic from '../Components/ImagePickerPic';
import MyStack from '../Components/HomeStack';
import {
  FirstScreenNavigator,
  SecondScreenNavigator,
  ThirdScreenNavigator,
} from '../CustomNavigation';
import CopilotScreen from '../Components/CopilotScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="blue"
      barStyle={{backgroundColor: 'skyblue'}}>
      <Tab.Screen
        name="Feed"
        component={SecondScreenNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={FirstScreenNavigator}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => <Icon name="bell" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MusicPlayer}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={CopilotScreen}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
