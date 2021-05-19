import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import uuid from 'react-native-uuid';

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

import {IRevisionSchema} from '../database/schemas/Revisions';

const Add: React.FC = () => {
  const [theme, setTheme] = useState('');

  const navigation = useNavigation();

  function back(): void {
    navigation.goBack();
  }

  async function save(): Promise<void> {
    const crud = new CRUD();

    const insertion: IRevisionSchema = {
      name: 'Revision',
      args: {
        id: uuid.v4() as string,
        theme,
        date_created: new Date(),
      },
    };

    await crud.create(insertion);

    back();
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
