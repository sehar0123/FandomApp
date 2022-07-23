import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';
import {theme} from '../Core/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontRef, heightRef, widthRef} from '../Constant/screenSize';

const AnimatedHeader = props => {
  const safeArea = useSafeArea();

  const {title, scrollA} = props;
  const isFloating = !!scrollA;
  const [isTransparent, setTransparent] = useState(isFloating);

  useEffect(() => {
    if (!scrollA) {
      return;
    }
    const listenerId = scrollA.addListener(a => {
      const topNaviOffset = 400 - 50 - safeArea.top;
      isTransparent !== a.value < topNaviOffset &&
        setTransparent(!isTransparent);
    });
    return () => scrollA.removeListener(listenerId);
  });

  return (
    <>
      {/* <StatusBar
        barStyle={isTransparent ? 'light-content' : 'dark-content'}
        backgroundColor="white"
        translucent
      /> */}

      {isTransparent ? (
        <View style={styles.container(safeArea, isFloating, isTransparent)}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40 * fontRef}
            color={isTransparent ? '#FFF' : theme.white}
            onPress={props.LeftIcon}
          />

          <MaterialCommunityIcons
            name="bookmark-outline"
            size={40 * fontRef}
            color={isTransparent ? '#FFF' : theme.white}
          />
        </View>
      ) : (
        <View style={styles.container(safeArea, isFloating, isTransparent)}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40 * fontRef}
            onPress={props.LeftIcon}
            color={isTransparent ? '#FFF' : theme.white}
          />
          <Text style={styles.title(isTransparent)}>{title}</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '20%',
              justifyContent: 'space-around',
            }}>
            <MaterialCommunityIcons
              name="share-variant-outline"
              size={35 * fontRef}
              color={isTransparent ? '#FFF' : theme.white}
            />
            <MaterialCommunityIcons
              name="bookmark-outline"
              size={35 * fontRef}
              color={isTransparent ? '#FFF' : theme.white}
            />
          </View>
        </View>
      )}
    </>
  );
};

const styles = {
  container: (safeArea, isFloating, isTransparent) => ({
    paddingTop: safeArea.top,
    flexDirection: 'row',

    marginBottom: isFloating ? -50 * heightRef - safeArea.top : 0,
    height: 50 * heightRef + safeArea.top,
    justifyContent: 'space-between',
    shadowOffset: {y: 0},
    alignItems: 'center',
    backgroundColor: isTransparent ? '#0001' : theme.black,
    shadowOpacity: isTransparent ? 0 : 0.5,
    elevation: isTransparent ? 0.01 : 5,
    zIndex: 100,
  }),
  title: isTransparent => ({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24 * fontRef,
    color: isTransparent ? '#FFF' : theme.white,
  }),
};

export default AnimatedHeader;
