import {createStackNavigator} from '@react-navigation/stack';
import ImageCropPicker from 'react-native-image-crop-picker';
import ImageCrop from './ImageCrop';
import MusicPlayer from './MusicPlayer';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ImageCropPicker" component={ImageCropPicker} />
      <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
      <Stack.Screen name="ImageCrop" component={ImageCrop} />
    </Stack.Navigator>
  );
}

export default MyStack;
