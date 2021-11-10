import React, { memo } from 'react';
import { Image } from 'react-native';
import { Repository } from '../../types';
import { View, Text, SecondaryText } from '../Themed/index';
import BottomTab from '../BottomTab';

import styles from './styles';
import { getTimeFromNow } from '../../utils';

interface JobListItemProps {
  repository: Repository;
}

const RepositoryItem = ({ repository }: JobListItemProps) => {
  return (
    <View style={styles.touchableContainer}>
      <View style={styles.jobItemContainer} key={repository?.id}>
        <View style={styles.jobImage}>
          <Image
            source={{ uri: repository?.owner?.avatar_url }}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </View>

        <View style={styles.jobContentView}>
          <View style={styles.dataContainer}>
            <Text numberOfLines={1} style={styles.jobTitleText}>
              {repository?.name}
            </Text>
          </View>
          <View style={styles.dataContainer}>
            <SecondaryText numberOfLines={3} style={styles.jobText}>
              {repository?.description}
            </SecondaryText>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.bottomTabsContainer}>
          <BottomTab isPublic={repository?.visibility === 'public'} />
          <BottomTab text={`Forks: ${repository?.forks_count}`} />
          <BottomTab text={`Size: ${repository?.size}`} />
        </View>

        <View style={styles.timeText}>
          <SecondaryText
            numberOfLines={1}
            style={[styles.jobText, { textAlignVertical: 'center' }]}
          >
            {getTimeFromNow(repository?.created_at)}
          </SecondaryText>
        </View>
      </View>
    </View>
  );
};

export default memo(RepositoryItem);
