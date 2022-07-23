import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

import MainStack from './src/Navigations/MainStack';

import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <MainStack />;
};

export default App;
