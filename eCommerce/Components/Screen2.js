import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

class Screen2 extends Component {
  render() {
    return (
      <View>
        <Text> Screen 2 </Text>
        <TouchableOpacity
          onPress={this.props.navigation.navigate('NestedScreen', {
            msg: 'message from Screen1',
          })}>
          <Text
            style={{
              backgroundColor: 'yellow',
              color: 'black',
              width: '50%',
              justifyContent: 'center',
            }}>
            Click Me!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Screen2;
