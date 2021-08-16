import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';
import Screen3 from './Components/Screen3';
import NestedScreen from './Components/NestedScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="NestedScreen" component={NestedScreen} />
    </Stack.Navigator>
  );
};

export {FirstScreenNavigator};

const SecondScreenNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Screen1">
      <Drawer.Screen name="Screen2" component={Screen2} />
      <Drawer.Screen name="Screen1" component={Screen1} />
    </Drawer.Navigator>
  );
};

export {SecondScreenNavigator};

const ThirdScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="NestedScreen" component={NestedScreen} />
    </Stack.Navigator>
  );
};

export {ThirdScreenNavigator};
