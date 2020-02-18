import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Button, StyleSheet, Text, View } from 'react-native';


import Feed from './components/Feed.tsx';
import Listing from './Listing.tsx';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text><h1>Welcome Screen</h1></Text>
      <Button
        title="Go to Post Listing page"
        onPress={() => navigation.push('ListingPage')}
      />
    </View>
  );
}

function ListingScreen({ navigation }) {
  return (
    <View>
      <Listing />
    </View>
  );
}

function DetailScreen({ route, navigation }) {
  const { itemId } = route.params;

  return (
    <View>
      <Text>{JSON.stringify(itemId)}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomeScreen} options={{ title: 'Welcome to my app!' }} />
        <Stack.Screen name="ListingPage" component={ListingScreen} options={{ title: 'WP Posts Listing' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'WP Posts Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;