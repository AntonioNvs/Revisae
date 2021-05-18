/* eslint-disable camelcase */
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  ArrowBack,
  ContainerBackground,
  ContainerView,
  Title,
  ContentInput,
  ButtonSend,
} from '../styles/addStyles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../styles/colors.json';
import CRUD from '../database/CRUD';

const Add: React.FC = () => {
  const [theme, setTheme] = useState('');

  const navigation = useNavigation();

  function back(): void {
    navigation.goBack();
  }

  function save(): void {
    const crud = new CRUD();
  }

  return (
    <ContainerBackground>
      <ArrowBack onPress={back}>
        <MaterialIcons name="arrow-back" size={24} color={colors.white} />
      </ArrowBack>

      <ContainerView>
        <Title font="Heebo-Bold">Criação de conteúdo</Title>
        <ContentInput
          onChangeText={(value: string) => setTheme(value)}
          placeholder="Conteúdo"
          font="Heebo-Regular"
        />

        <ButtonSend onPress={save}>
          <MaterialIcons name="send" size={30} color={colors.background} />
        </ButtonSend>
      </ContainerView>
    </ContainerBackground>
  );
};

export default Add;
