import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../BottomBar';
import Bookmark from '../../Screens/Main/Bookmark';
import Notifications from '../../Screens/Main/Notifications';
import Categories from '../../Screens/Main/Categories/Index';
import Search from '../../Screens/Main/Search/Index';
import Home from '../../Screens/Main/Home/Index';
import onBoarding from '../../Screens/onBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CategoriesList from '../../Screens/Main/CategoriesList';
import Description from '../../Screens/Main/Description';
import CategoriesDescription from '../../Screens/Main/CategoriesDescription';
import CategoriesTab from '../../Screens/Main/CategoriesTab';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

const MainStack = ({navigation}) => {
  const [isFirstLanuch, setIsFirstLanuch] = React.useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLanuch(true);
      } else {
        setIsFirstLanuch(false);
      }
    });
  }, []);
  if (isFirstLanuch === null) {
    return null;
  } else if (isFirstLanuch === true) {
    return (
      <NavigationContainer independent={true}>
        <StatusBar backgroundColor="#FFF" style="dark-content" />
        <Stack.Navigator
          // initialRouteName="BottomTab"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="onBoarding"
            component={onBoarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{title: ''}}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Bookmark"
            component={Bookmark}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CategoriesList"
            component={CategoriesList}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Description"
            component={Description}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CategoriesDescription"
            component={CategoriesDescription}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CategoriesTab"
            component={CategoriesTab}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer independent={true}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <Stack.Navigator
          initialRouteName="BottomTab"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{title: ''}}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Bookmark"
            component={Bookmark}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CategoriesList"
            component={CategoriesList}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Description"
            component={Description}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CategoriesDescription"
            component={CategoriesDescription}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CategoriesTab"
            component={CategoriesTab}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default MainStack;
