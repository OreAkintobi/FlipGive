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
        onPress={() => dispatch(fetchGithubData(user))}
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
            keyExtractor={(item) => item.id.toString()}
            onRefresh={() => dispatch(fetchGithubData(user))}
            refreshing={loading}
            ListHeaderComponent={
              <View style={styles.headerView}>
                <Text style={styles.headerText}>
                  Get Github Repositories for {user ? user : 'A User'}
                </Text>
              </View>
            }
            ListEmptyComponent={
              <View style={styles.headerView}>
                <Text style={styles.headerText}>
                  User {user ? user : 'A User'} either does not exist or has no
                  repositories
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
