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

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'ImagePickerPic'} component={ImagePickerPic} />
      <Tab.Screen name={'Copilot'} component={MyStack} />
      <Tab.Screen name={'music'} component={MusicPlayer} />
      <Tab.Screen name={'map'} component={Map} />
    </Tab.Navigator>
  );
};

export default Tabs;
