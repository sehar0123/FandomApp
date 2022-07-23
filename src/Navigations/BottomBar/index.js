import React, {useState, useEffect} from 'react';
import Icon4 from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {theme} from '../../Core/Theme';
import Home from '../../Screens/Main/Home/Index';
import Search from '../../Screens/Main/Search/Index';
import Categories from '../../Screens/Main/Categories/Index';
import Bookmark from '../../Screens/Main/Bookmark';
import Notifications from '../../Screens/Main/Notifications';
import {fontRef, heightRef} from '../../Constant/screenSize';
import onBoarding from '../../Screens/onBoarding';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);
  return loading ? (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65 * heightRef,
          backgroundColor: 'white',
          paddingHorizontal: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            <Octicons
              name="home"
              size={focused ? 35 * fontRef : 30 * fontRef}
              color={focused ? theme.primary : theme.inactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            <Feather
              name="search"
              size={focused ? 35 * fontRef : 30 * fontRef}
              color={focused ? theme.primary : theme.inactive}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              name="appstore-o"
              size={focused ? 35 * fontRef : 30 * fontRef}
              color={focused ? theme.primary : theme.inactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          // headerShown: false,
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            <Feather
              name="bookmark"
              size={focused ? 35 * fontRef : 30 * fontRef}
              color={focused ? theme.primary : theme.inactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="notifications-none"
              size={focused ? 40 * fontRef : 35 * fontRef}
              color={focused ? theme.primary : theme.inactive}
            />
          ),
        }}
      />
    </Tab.Navigator>
  ) : (
    <LottieView
      source={require('../../Assets/Animation/progressbar.json')}
      autoPlay
    />
  );
}
