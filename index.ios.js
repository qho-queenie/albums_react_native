// 1 import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import Albumlist from './src/components/Albumlist';

// 2 create a component.
//A component is some Javascript function that returns JSX
//JSX = a dialact of Javascript that tells React Native what content to generate on the phone

const App = () => (
  <View style={{ flex: 1}}>
    <Header poop={'Albums '} />
    <Albumlist />
  </View>
);


// 3 render the component's properties to the device

AppRegistry.registerComponent('albums', () => App);
