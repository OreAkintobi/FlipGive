const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const lightGray = '#a8b0b0';
const darkGray = '#3a3b43';

export const common = {
  danger: 'red',
  success: '#40975d',
  flipGiveBlue: '#47afb9',
  inactive: lightGray,
};

export default {
  light: {
    text: '#000',
    textSecondary: darkGray,
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    bottomTab: lightGray,
    ...common,
  },
  dark: {
    text: '#fff',
    textSecondary: lightGray,
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    bottomTab: darkGray,
    ...common,
  },
};
