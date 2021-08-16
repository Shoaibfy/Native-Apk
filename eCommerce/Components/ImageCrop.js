import React, {useState} from 'react';
import {Text, View, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const ImageCrop = () => {
  const [imageUri, setImageUri] = useState('../Images/userIcon.jpeg');
  const OpenGallery = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then(image => {
      setImageUri(image.path);
    });
  };
  const OpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImageUri(image.path);
    });
  };

  return (
    <View>
      <View>
        <Button title="open Camera" onPress={OpenCamera} />
        <Image
          source={imageUri}
          Component
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
        <Button title="open Gallery" onPress={OpenGallery} />
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
        <Text>Images</Text>
        <Image
          source={require('../Images/userIcon.jpeg')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
          }}
        />
      </View>
    </View>
  );
};

export default ImageCrop;
