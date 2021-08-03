import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import Map from './Components/Map';
import MusicPlayer from './Components/MusicPlayer';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <MusicPlayer />
    </View>
  );
};

export default App;
