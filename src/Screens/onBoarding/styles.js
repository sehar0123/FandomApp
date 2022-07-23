import {StyleSheet} from 'react-native';
import {fontRef, heightRef} from '../../Constant/screenSize';

import {theme} from '../../Core/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D95F47',
  },
  innercontainer: {flex: 1, justifyContent: 'space-around'},
  Image: {
    // height: getHeight(100),
    // width: getWidth(100),
  },
  Textintro: {
    fontSize: 24 * fontRef,
    color: theme.primary,
    fontFamily: theme.fontFamily,
    fontWeight: '700',
    // top: getHeight(2),
    // marginHorizontal: getWidth(10),
  },

  nextButton: {
    width: 60,
    borderColor: 'white',

    borderWidth: 3,
    height: 60,
    alignSelf: 'flex-end',
    right: 20,
    position: 'absolute',
    top: 300 * heightRef,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  btn: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: theme.white,
    // height: getHeight(6),
    // width: getWidth(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: theme.orange,
    // marginBottom: getHeight(5),
  },

  btnText: {
    color: theme.orange,
    fontSize: 16,
    fontFamily: theme.fontFamilySemiBold,
  },
  avator: {
    // height: getHeight(50),
    // width: getWidth(55),
    alignSelf: 'center',
    // bottom: getHeight(10),
  },
  avator2: {
    // height: getHeight(50),
    // width: getWidth(55),
    alignSelf: 'center',
    // bottom: getHeight(15),
  },
});
export default styles;
