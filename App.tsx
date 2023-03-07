/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const NativeStack = createNativeStackNavigator();

function HomeScreenA() {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home A</Text>
      <Button title="Go to Home B" onPress={() => navigate('HomeB')} />
    </View>
  );
}

function HomeScreenB() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home B</Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeA" component={HomeScreenA} />
      <Stack.Screen name="HomeB" component={HomeScreenB} />
    </Stack.Navigator>
  );
}

function SettingsScreenA() {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings A</Text>
      <Button title="Go to Settings B" onPress={() => navigate('SettingsB')} />
    </View>
  );
}

function SettingsScreenB() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings B</Text>
    </View>
  );
}

function SettingsStack() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="SettingsA" component={SettingsScreenA} />
      <NativeStack.Screen name="SettingsB" component={SettingsScreenB} />
    </NativeStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
