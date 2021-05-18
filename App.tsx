import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'react-native';

import colors from './src/styles/colors.json';

import Routes from './src/routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={colors.background} />

    <Routes />
  </NavigationContainer>
);

export default App;
