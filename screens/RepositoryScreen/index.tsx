import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { RepositoryItem } from '../../components';
import { Text, View, Input } from '../../components/Themed/index';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { RootState } from '../../store';
import { fetchGithubData } from '../../store/githubData';
import { RootTabScreenProps } from '../../types';

import styles from './styles';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch();
  const theme = useColorScheme();
  const { danger, vanHackBlue, inactive } = Colors[theme];
  const { repositories, loading, error } = useSelector(
    (state: RootState) => state.githubData
  );

  const [user, setUser] = useState('');

  const renderItem = ({ item }: any) => <RepositoryItem repository={item} />;

  const fetchRepos = () => {
    dispatch(fetchGithubData(user.trim()));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          placeholder="Search"
          onChangeText={(text) => setUser(text)}
        />
      </View>

      <TouchableOpacity
        disabled={user ? false : true}
        style={[
          styles.button,
          styles.inputContainer,
          {
            backgroundColor: user ? vanHackBlue : inactive,
            opacity: user ? 1 : 0.5,
          },
        ]}
        onPress={fetchRepos}
      >
        <Text style={{ color: Colors[theme].background }}>
          {user ? `Search for ${user}` : 'Please Enter a User'}
        </Text>
      </TouchableOpacity>

      <View style={styles.flatListView}>
        {loading ? (
          <ActivityIndicator size="large" style={styles.loader} />
        ) : error ? (
          <Text style={[styles.headerText, { color: danger }]}>{error}</Text>
        ) : (
          <FlatList
            data={repositories}
            renderItem={renderItem}
            keyExtractor={(item) => item?.name}
            onRefresh={fetchRepos}
            refreshing={loading}
            ListHeaderComponent={
              <View style={styles.headerView}>
                <Text style={styles.headerText}>
                  Get Github Repositories for {user ? user : 'A User'}
                </Text>
              </View>
            }
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}
          />
        )}
      </View>
    </View>
  );
}
