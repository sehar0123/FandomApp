import React, {Component, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import Feather from 'react-native-vector-icons/Feather';

import {theme} from '../../Core/Theme';

import LinearGradient from 'react-native-linear-gradient';

// create a component
const onBoarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const next = () => {
    if (!!swiperRef) {
      swiperRef.current.scrollBy(1);
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      showsPagination={currentIndex == 2 ? false : true}
      onIndexChanged={index => {
        setCurrentIndex(index);
      }}
      dotColor={theme.white}
      activeDotStyle={{width: '5%'}}
      activeDotColor={theme.orange}
      loop={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.Textintro}> Swipe 1</Text>

        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => next()}>
          <LinearGradient
            style={styles.nextButton}
            colors={['#00d3d3', '#5e9b9b']}>
            <Feather
              name="arrow-right"
              size={25}
              color={theme.white}
              onPress={() => next()}
            />
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.Textintro}>Swipe 2</Text>

        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => next()}>
          <LinearGradient
            style={styles.nextButton}
            colors={['#00d3d3', '#5e9b9b']}>
            <Feather
              name="arrow-right"
              size={25}
              color={theme.white}
              onPress={() => next()}
            />
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.Textintro}>Swipe 3</Text>

        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => navigation.navigate('BottomTab')}>
          <LinearGradient
            style={styles.nextButton}
            colors={['#00d3d3', '#5e9b9b']}>
            <Feather
              name="arrow-right"
              size={25}
              color={theme.white}
              onPress={() => navigation.navigate('BottomTab')}
            />
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </Swiper>
  );
};

//make this component available to the app
export default onBoarding;
