import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 12,
          color: 'skyblue',
        },
        activeTintColor: 'skyblue',
      }}>
      <Tab.Screen name={'Screen1'} component={FirstScreenNavigator} />
      <Tab.Screen name={'Copilot'} component={SecondScreenNavigator} />
      <Tab.Screen name={'music'} component={MusicPlayer} />
      <Tab.Screen name={'map'} component={Map} />
    </Tab.Navigator>
  );
};

export default Tabs;
