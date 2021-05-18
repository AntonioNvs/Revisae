/* eslint-disable camelcase */

import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  ContainerAllScreen,
  TopContainer,
  ButtonContainer,
  TextButtonTop,
  CardsContainer,
  CardView,
  TitleCard,
  CardRowView,
  TextBottomCard,
  DateCardView,
  ButtonAll,
  Add,
  ScrollContainerCards,
} from '../styles/dashboardStyles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../styles/colors.json';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  function handleScreenAdd(): void {
    navigation.navigate('Add');
  }

  return (
    <>
      <ContainerAllScreen>
        <TopContainer>
          <ButtonContainer>
            <MaterialIcons name="done-all" size={20} color={colors.white} />
            <TextButtonTop font="Heebo-Regular">Pendentes</TextButtonTop>
          </ButtonContainer>
          <ButtonContainer>
            <MaterialIcons name="ballot" size={20} color={colors.white} />
            <TextButtonTop font="Heebo-Regular">Todos</TextButtonTop>
          </ButtonContainer>
        </TopContainer>

        <ScrollContainerCards>
          <CardsContainer>
            <CardView>
              <CardRowView>
                <MaterialIcons
                  name="error-outline"
                  size={24}
                  color={colors.redAlert}
                />
                <TitleCard font="Heebo-Bold">
                  Biologia - Decréscimo ecológico
                </TitleCard>

                <ButtonAll>
                  <MaterialIcons
                    name="done"
                    size={24}
                    color={colors.greenVerifyCard}
                  />
                </ButtonAll>
              </CardRowView>

              <CardRowView>
                <DateCardView>
                  <MaterialIcons
                    name="event"
                    size={24}
                    color={colors.white}
                    style={{marginRight: 6}}
                  />
                  <TextBottomCard font="Heebo-Regular" color={colors.dateCard}>
                    17/05/21
                  </TextBottomCard>
                </DateCardView>
                <TextBottomCard font="Heebo-Regular" color={colors.dateCard}>
                  Técnica 1 - 7 -{' '}
                  <TextBottomCard font="Heebo-Regular" color={colors.redAlert}>
                    30
                  </TextBottomCard>
                </TextBottomCard>
                <ButtonAll>
                  <MaterialIcons
                    name="delete"
                    size={24}
                    color={colors.white}
                    style={{marginRight: 6}}
                  />
                </ButtonAll>
              </CardRowView>
            </CardView>
          </CardsContainer>
        </ScrollContainerCards>

        <Add onPress={handleScreenAdd}>
          <MaterialIcons name="add" size={32} color={colors.background} />
        </Add>
      </ContainerAllScreen>
    </>
  );
};

export default Dashboard;
