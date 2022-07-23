import {Appearance} from 'react-native';
const colorScheme = Appearance.getColorScheme();
export const theme = {
  fontFamily: 'Marsden-Tx-Regular',
  fontFamilyBold: 'Marsden-Tx-Bold',
  fontFamilylight: 'Marsden-Tx-LightIt',
  Arial: 'arlrdbd',
  fontFamilySemiBold: 'Marsden-Tx-CnBold',
  inactive: colorScheme === 'dark' ? '#570A57' : '#5D6D7E',
  primary: colorScheme === 'dark' ? '#5B4B8A' : '#00D6D6',
  secondary: colorScheme === 'dark' ? '#2E0249' : '#E8F9FD',
  white: colorScheme === 'dark' ? '#ffff' : '#000000',
  black: colorScheme === 'dark' ? '#000000' : '#fff',
};
