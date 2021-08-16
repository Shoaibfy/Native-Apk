import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

class Screen3 extends Component {
  render() {
    return (
      <View>
        <Text> Screen 3 </Text>
        <TouchableOpacity
          onPress={this.props.navigation.navigate('NestedScreen', {
            msg: 'message from Screen1',
          })}>
          <Text style={{backgroundColor: 'yellow', color: 'white'}}>
            Click Me!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Screen3;
