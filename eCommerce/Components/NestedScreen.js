import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
const NestedScreen = ({route, ...props}) => {
  return (
    <View>
      <Text> {route.params.msg} </Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Screen1')}>
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
};

export default NestedScreen;
