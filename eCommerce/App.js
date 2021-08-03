import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';

const App = () => {
  return (
    <View style={{width: '100%', height: '80%'}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          image={require('./Images/star.png')}
          title="testing Map"
          description="a beautiful senary ">
          <Callout tooltip>
            <View>
              <Text>Resturant description</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
