import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './components/Feed.tsx';


function Listing() {
  return (
    <View style={styles.container}>
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Listing;
