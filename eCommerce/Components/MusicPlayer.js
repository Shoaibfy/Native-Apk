import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from 'react-native';
import Iconicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import songs from '../models/data';
import {NavigationEvents} from 'react-navigation';

const MusicPlayer = ({navigation: {navigate}}) => {
  const {width, height} = Dimensions.get('window');
  const [songIndex, setSongIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const songSlider = useRef(null);
  const renderSongs = ({index, item}) => {
    return (
      <Animated.View
        style={{width: width, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: 350, height: 300, margin: 5}}>
          <Image
            source={item.image}
            style={{
              width: '80%',
              margin: 10,
              padding: 20,
              resizeMode: 'cover',
              borderRadius: 20,
            }}
          />
        </View>
      </Animated.View>
    );
  };

  useEffect(() => {
    scrollX.addListener(({value}) => {
      console.log(value);
      const index = Math.round(value / width);
      setSongIndex(index);
      console.log(songs, 'songs');
    });
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  const skipForward = () => {
    songSlider.current.scrollToOffset({
      offset: songIndex + 1 * width,
    });
  };
  const skipBackward = () => {
    songSlider.current.scrollToOffset({
      offset: songIndex - 1 * width,
    });
  };

  return (
    <SafeAreaView
      style={{backgroundColor: '#222831', width: '100%', height: '100%'}}>
      <View
        style={{
          flex: 1,
        }}>
        <View style={{width: 350, height: 300, margin: 5}}>
          <Animated.FlatList
            ref={songSlider}
            data={songs}
            renderItem={renderSongs}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x: scrollX},
                  },
                },
              ],
              {useNativeDriver: true},
            )}
          />
        </View>
        <View style={{marginBottom: 26}}>
          <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
            Song : {songs[songIndex].title}
          </Text>
          <Text style={{fontSize: 18, color: '#EEEEEE', textAlign: 'center'}}>
            songBy - {songs[songIndex].artist}
          </Text>
        </View>
        <View>
          <Slider
            style={{}}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#FFF"
            onSlidingComplete={() => {}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 350,
            }}>
            <Text style={{color: 'white', paddingLeft: 20}}>0.00</Text>
            <Text style={{color: 'white', paddingRight: 20}}>5.00</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <TouchableOpacity onPress={skipBackward}>
            <Iconicons
              name="play-skip-back-outline"
              size={30}
              color="#777777"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Iconicons name="ios-pause-circle" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipForward}>
            <Iconicons
              name="play-skip-forward-outline"
              size={30}
              color="#777777"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderTopColor: '#393E46',
          borderTopWidth: 1,
          width: width,
          alignItems: 'center',
          paddingVertical: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <TouchableOpacity onPress={() => {}}>
            <Iconicons name="heart-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Iconicons name="repeat" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Iconicons name="share-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Screen1')}>
            <Iconicons name="ellipsis-horizontal" size={30} color="#777777" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;
