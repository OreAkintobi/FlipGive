import React from 'react';
import { View, Text } from '../Themed';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

import styles from './styles';

interface JobListItemProps {
  title: string;
  isExpired?: boolean;
}

const BottomTab = ({ title, isExpired = false }: JobListItemProps) => {
  const theme = useColorScheme();
  const { bottomTab, danger } = Colors[theme];

  const containerStyle = isExpired
    ? [styles.container, { backgroundColor: danger }]
    : [styles.container, { backgroundColor: bottomTab }];

  return (
    <View style={containerStyle}>
      <Text style={styles.jobText}>{title}</Text>
    </View>
  );
};

export default BottomTab;
