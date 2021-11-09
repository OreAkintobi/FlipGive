import React, { memo } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Repository } from '../../types';
import { View, Text, SecondaryText } from '../Themed/index';
import BottomTab from '../BottomTab';
// import {
//   getCountry,
//   getJobPostingTimeFromNow,
//   getRelocationStatus,
// } from '../../utils';

import styles from './styles';

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
            <SecondaryText numberOfLines={1} style={styles.jobText}>
              {repository?.description}
            </SecondaryText>
          </View>
        </View>
      </View>

      {/* <View style={styles.bottomSection}>
        <View style={styles.bottomTabsContainer}>
          <BottomTab title="Full Time" />
          {getCountry(repository?.flagCode) && (
            <BottomTab title={getCountry(repository?.flagCode) || ''} />
          )}
          <BottomTab title={getRelocationStatus(repository?.relocate)} />
        </View>

        <View style={styles.timeText}>
          {!repository?.canApply && <BottomTab isExpired title="Expired" />}

          <SecondaryText
            numberOfLines={1}
            style={[styles.jobText, { textAlignVertical: 'center' }]}
          >
            {getJobPostingTimeFromNow(repository?.createdAt)}
          </SecondaryText>
        </View>
      </View> */}
    </View>
  );
};

export default memo(RepositoryItem);
