import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size='large' color='#DE3905' />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
