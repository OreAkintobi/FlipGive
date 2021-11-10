import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import moment from 'moment';

export const useThemeColor = (
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) => {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
};

export const getTimeFromNow = (date: string | Date) => {
  return moment(date).fromNow();
};
