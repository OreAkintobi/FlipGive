import React from 'react';
import { Platform, ColorSchemeName } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { RootStackParamList } from '../types';
import { RepositoryScreen } from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Repository" component={RepositoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
