//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fontRef, widthRef} from '../../Constant/screenSize';
import {theme} from '../../Core/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// create a component
const Header = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: '50%',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          name={props.leftIcon}
          size={35 * fontRef}
          color={'black'}
          onPress={props.onPressLeft}
        />

        <Text style={styles.headerText}>{props.title}</Text>
      </View>
      <MaterialCommunityIcons
        name={props.rightIcon}
        size={35 * fontRef}
        color={'black'}
        onPress={props.onPressRight}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 60 * fontRef,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // margin: 10 * fontRef,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 22 * fontRef,
    color: 'black',
    marginHorizontal: 40 * widthRef,
    fontWeight: '700',
    alignSelf: 'center',
    marginRight: 40 * fontRef,
    fontFamily: theme.fontFamily,
  },
});

//make this component available to the app
export default Header;
