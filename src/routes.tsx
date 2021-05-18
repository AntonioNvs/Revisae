import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './pages/Dashboard';
import Add from './pages/Add';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Dashboard" component={Dashboard} />
    <Screen name="Add" component={Add} />
  </Navigator>
);

export default Routes;
