import {createDrawerNavigator} from 'react-native-drawer';
import {createAppContainer} from 'react-navigation';
import {FirstScreenNavigator, SecondScreenNavigator} from './CustomNavigation';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: FirstScreenNavigator,
  },
  About: {
    screen: SecondScreenNavigator,
  },
});

export default createAppContainer(RootDrawerNavigator);
