/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { memo, useCallback, useMemo } from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  ListRenderItem,
  StyleSheet,
  TextInput,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { nanoid } from 'nanoid/non-secure';
import Animated, { SlideInLeft, SlideOutRight } from 'react-native-reanimated';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { faker } from '@faker-js/faker';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const NativeStack = createNativeStackNavigator();

const items = Array.from({ length: 2000 }, () => ({
  id: nanoid(),
  title: faker.name.firstName(),
}));

function HomeScreenA() {
  const { navigate } = useNavigation();
  const [searchTerm, setSearchTerm] = React.useState('');
  const data = useMemo(() => {
    return items.filter(item => item.title.includes(searchTerm));
  }, [searchTerm]);

  const renderItem = useCallback<
    ListRenderItem<{
      title: string;
    }>
  >(({ item }) => {
    return <ListItem title={item.title} />;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: 'flex-end', padding: 20 }}>
        <Button title="Go to Home B" onPress={() => navigate('HomeB')} />
        <TextInput
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="search..."
        />
      </View>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={data}
        renderItem={renderItem}
        keyExtractor={extractKey}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
}

function extractKey(item: { id: string; title: string }) {
  return item.id;
}

function Separator() {
  return <View style={{ height: 16 }} />;
}

const ListItem = memo((props: { title: string }) => {
  return (
    <Animated.View
      entering={SlideInLeft.randomDelay(1000)}
      exiting={SlideOutRight}
      style={styles.listItemCard}>
      <Text style={styles.listItemTitle}>{props.title}</Text>
    </Animated.View>
  );
});

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

const styles = StyleSheet.create({
  separator: {
    height: 16,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  listItemCard: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  listItemTitle: {
    fontSize: 20,
  },
});

export default App;
