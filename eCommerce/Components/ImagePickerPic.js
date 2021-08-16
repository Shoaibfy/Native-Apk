import React, {Component} from 'react';
import {Button, Text, View, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export default class ImagePickerPic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: null,
    };
  }

  choosePhoto = () => {
    const options = {};
    launchImageLibrary(options, response => {
      console.log('response', response.assets[0].uri);
      if (response.uri) {
        this.setState({
          photo: response.assets[0].uri,
        });
      }
    });
  };

  render() {
    const {photo} = this.state;
    console.log('photo', this.state.photo);
    return (
      <View style={{}}>
        <Text> textInComponent </Text>
        <Button title={'choose Photo'} onPress={this.choosePhoto} />
        {photo && (
          <Image
            source={{uri: photo}}
            style={{
              width: 300,
              height: 300,
              borderWidth: 1,
              borderColor: 'black',
            }}
          />
        )}
      </View>
    );
  }
}
