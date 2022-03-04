import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Color, Screen} from '../Helper';
import {HomeScreen, DetailScreen} from '../Screens';

const Stack = createNativeStackNavigator();

// Created navigation file to manage all the screens
const Route = () => {
  const renderMainStack = () => {
    const initialRouteName = Screen.HomeScreen;
    return (
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={Screen.HomeScreen} component={HomeScreen} />
        <Stack.Screen name={Screen.DetailScreen} component={DetailScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor={Color.white} />
      <NavigationContainer>{renderMainStack()}</NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Route;
