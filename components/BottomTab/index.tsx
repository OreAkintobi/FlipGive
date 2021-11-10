import React from 'react';
import { View, Text } from '../Themed';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

import styles from './styles';

interface BottomTabProps {
  isPublic?: boolean;
  text?: string;
}

const BottomTab = ({ isPublic = true, text }: BottomTabProps) => {
  const theme = useColorScheme();
  const { flipGiveBlue, success } = Colors[theme];

  const containerStyle =
    isPublic && text
      ? [styles.container, { backgroundColor: flipGiveBlue }]
      : [styles.container, { backgroundColor: success }];

  return (
    <View style={containerStyle}>
      {text ? (
        <Text style={styles.jobText}>{text}</Text>
      ) : (
        <Text style={styles.jobText}>{isPublic ? 'PUBLIC' : 'PRIVATE'}</Text>
      )}
    </View>
  );
};

export default BottomTab;
