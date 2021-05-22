/* eslint-disable camelcase */

import React, {useState, useEffect} from 'react';
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
import RevisionSchema from '../database/schemas/Revisions';
import CRUD from '../database/CRUD';
import {Alert} from 'react-native';
import NotificationSchema from '../database/schemas/Notifications';
import {addDays, subDays, isSameDay} from 'date-fns';

interface ICardData {
  title: string;
  date: Date;
  type: number;
  id_notification: string;
  id_revision: string;
}

const Dashboard: React.FC = () => {
  const [dataCards, setDataCards] = useState<ICardData[]>([]);
  const [loadData, setLoadData] = useState(false);
  const [listBy, setListBy] = useState<'pending' | 'all'>('pending');

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const crud = new CRUD();

      const revisions = await crud.list(RevisionSchema.schema.name);
      const notifications = await crud.list(NotificationSchema.schema.name);

      console.log(notifications.length);

      const data: ICardData[] = [];
      const today = subDays(new Date(), 1);

      revisions.forEach(revision => {
        const days = [1, 7, 30];

        for (let day of days) {
          const notification = notifications.find(
            not => not.id_revision === revision.id && not.type === day,
          );

          if (listBy === 'pending') {
            if (isSameDay(addDays(today, day), revision.date_created)) {
              if (notification) {
                data.push({
                  title: revision.theme,
                  date: revision.date_created,
                  type: day,
                  id_notification: notification.id,
                  id_revision: revision.id,
                });
              }
            }
          } else {
            if (notification) {
              data.push({
                title: revision.theme,
                date: addDays(revision.date_created, day),
                type: day,
                id_notification: notification.id,
                id_revision: revision.id,
              });
            }
          }
        }
      });

      setDataCards(data);
    })();

    navigation.addListener('focus', () => setLoadData(!loadData));
    navigation.addListener('blur', () => {
      setLoadData(!loadData);
    });
  }, [loadData, navigation, listBy]);

  function handleScreenAdd(): void {
    navigation.navigate('Add');
  }

  function deleteCard(id: string): void {
    Alert.alert('Deseja mesmo excluir?', '', [
      {
        text: 'Sim',
        onPress: async () => {
          const crud = new CRUD();

          await crud.delete({
            id,
            name: RevisionSchema.schema.name,
          });

          setLoadData(!loadData);
        },
      },
      {
        text: 'Não',
        onPress: () => {},
      },
    ]);
  }

  async function doneNotification(id: string) {
    Alert.alert('Deseja mesmo marcar como concluído?', '', [
      {
        text: 'Sim',
        onPress: async () => {
          const crud = new CRUD();

          await crud.delete({
            id,
            name: NotificationSchema.schema.name,
          });

          setLoadData(!loadData);
        },
      },
      {
        text: 'Não',
        onPress: () => {},
      },
    ]);
  }

  return (
    <>
      <ContainerAllScreen>
        <TopContainer>
          <ButtonContainer onPress={() => setListBy('pending')}>
            <MaterialIcons name="done-all" size={20} color={colors.white} />
            <TextButtonTop font="Heebo-Regular">Pendentes</TextButtonTop>
          </ButtonContainer>
          <ButtonContainer onPress={() => setListBy('all')}>
            <MaterialIcons name="ballot" size={20} color={colors.white} />
            <TextButtonTop font="Heebo-Regular">Todos</TextButtonTop>
          </ButtonContainer>
        </TopContainer>

        <ScrollContainerCards>
          <CardsContainer>
            {dataCards &&
              dataCards.map((dataCard, index) => {
                const textOfDay = (
                  <TextBottomCard font="Heebo-Regular" color={colors.dateCard}>
                    Técnica{' '}
                    <TextBottomCard
                      font="Heebo-Regular"
                      color={
                        dataCard.type === 1 ? colors.redAlert : colors.dateCard
                      }>
                      1
                    </TextBottomCard>
                    -
                    <TextBottomCard
                      font="Heebo-Regular"
                      color={
                        dataCard.type === 7 ? colors.redAlert : colors.dateCard
                      }>
                      7
                    </TextBottomCard>
                    -
                    <TextBottomCard
                      font="Heebo-Regular"
                      color={
                        dataCard.type === 30 ? colors.redAlert : colors.dateCard
                      }>
                      30
                    </TextBottomCard>
                  </TextBottomCard>
                );

                return (
                  <CardView key={index}>
                    <CardRowView>
                      <MaterialIcons
                        name="error-outline"
                        size={24}
                        color={colors.redAlert}
                      />
                      <TitleCard font="Heebo-Bold">{dataCard.title}</TitleCard>

                      <ButtonAll
                        onPress={() =>
                          doneNotification(dataCard.id_notification)
                        }>
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
                        <TextBottomCard
                          font="Heebo-Regular"
                          color={colors.dateCard}>
                          {`${dataCard.date.getDate()}/${
                            dataCard.date.getMonth() + 1
                          }/${dataCard.date.getFullYear()}`}
                        </TextBottomCard>
                      </DateCardView>

                      {textOfDay}
                      <ButtonAll
                        onPress={() => deleteCard(dataCard.id_revision)}>
                        <MaterialIcons
                          name="delete"
                          size={24}
                          color={colors.white}
                          style={{marginRight: 6}}
                        />
                      </ButtonAll>
                    </CardRowView>
                  </CardView>
                );
              })}
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
