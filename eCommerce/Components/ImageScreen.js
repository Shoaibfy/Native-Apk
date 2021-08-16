import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  SafeAreaView,
  Alert,
  Image,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ImageScreen = () => {
  const [imageUri, setImageUri] = useState('');

  const OpenCamera = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      console.log('respone', response);
      if (response.didCancel) {
        console.log('response cancel', response.didCancel);
      } else if (response.error) {
        console.log('resonse Error', response.error);
      } else if (response.customButton) {
        console.log('response custon', response.customButton);
      } else {
        const source = {uri: 'data:image/jpg;base64,' + response.base64};
        setImageUri(source);
      }
    });
  };

  const OpenGallery = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('respone', response);
      if (response.didCancel) {
        console.log('response cancel', response.didCancel);
      } else if (response.errorCode) {
        console.log('resonse Error', response.errorCode);
      } else if (response.customButton) {
        console.log('response custom', response.customButton);
      } else {
        const source = {uri: 'data:image/jpeg;base64,' + response.base64};
        setImageUri(source);
      }
    });
  };

  return (
    <SafeAreaView>
      <View>
        <View>
          <Button
            title="open Camera"
            onPress={() => {
              OpenCamera();
            }}
          />
          <Image
            source={imageUri}
            style={{
              height: '30%',
              width: '20%',
              marginTop: 30,
              borderRadius: 10,
              borderColor: 'black',
              borderWidth: 1,
              justifyContent: 'center',
              alignContent: 'center',
              marginLeft: 150,
            }}
          />
        </View>
        <View>
          <Button title="open Gallery" onPress={() => OpenGallery()} />
          <Image
            source={imageUri}
            style={{
              height: '30%',
              width: '20%',
              marginTop: 30,
              borderRadius: 10,
              borderColor: 'black',
              borderWidth: 1,
              justifyContent: 'center',
              alignContent: 'center',
              marginLeft: 150,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ImageScreen;
