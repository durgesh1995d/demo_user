import {View, Text, StyleSheet, StatusBar, Animated} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashSreen = () => {
  const navigation = useNavigation();

  useEffect(async () => {
    const savedData = await AsyncStorage.getItem('auth');
    let data = '';
    if (savedData) {
      data = JSON.parse(savedData);
    }
    if (data?.email) {
      nextScreenTimer('Product', 2000, '');
    } else {
      nextScreenTimer('Auth', 2000, '');
    }
    console.log('auth saved', data);
  }, []);
  const nextScreenTimer = (screenName, time, NSN) => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: screenName,
            params: {
              nextScreen: NSN,
            },
          },
        ],
      });
    }, time);
  };
  const scrollOffsetY = new Animated.Value(0);

  const animateShowContentView = () => {
    Animated.parallel([
      Animated.spring(scrollOffsetY, {
        toValue: 0,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };
  animateShowContentView();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} />
      <Animated.View>
        <Text style={styles.text}>SplashSreen</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default SplashSreen;
