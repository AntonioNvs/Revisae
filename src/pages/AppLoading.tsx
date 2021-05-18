import React from 'react';
import {View} from 'react-native';

import colors from '../styles/colors.json';

const AppLoading: React.FC = () => (
  <View
    style={{
      backgroundColor: colors.background,
      flex: 1,
    }}
  />
);

export default AppLoading;
