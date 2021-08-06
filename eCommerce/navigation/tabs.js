import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Map from '../Components/Map';
import MusicPlayer from '../Components/MusicPlayer';
import React from 'react';
import {View, Image} from 'react-native';
import CopilotScreen from '../Components/CopilotScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'music'} component={MusicPlayer} />
      <Tab.Screen name={'map'} component={Map} />
      <Tab.Screen name={'Copilot'} component={CopilotScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
