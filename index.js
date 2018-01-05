import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';

const App = () => (
  <View style={{ flex: 1 }}>
      <Header headerText={'Twitter'} />
  </View>
);

AppRegistry.registerComponent('twitter', () => App);