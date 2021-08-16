import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

class Screen1 extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text> Screen 1 </Text>
        <TouchableOpacity
          onPress={() =>
            navigate('NestedScreen', {
              msg: 'message from Screen1',
            })
          }>
          <Text
            style={{
              backgroundColor: 'yellow',
              color: 'black',
              width: '30%',
              paddingHorizontal: 30,
              fontWeight: '300',
              paddingHorizontal: 20,
              marginLeft: 100,
              alignContent: 'center',
            }}>
            Click Me!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Screen1;
