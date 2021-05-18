import styled from 'styled-components/native';
import colors from './colors.json';

interface IFontText {
  font: string;
}

interface IColorText {
  color: string;
}

export const ContainerAllScreen = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const ButtonAll = styled.TouchableOpacity``;

// Parte de topo
export const TopContainer = styled.View`
  width: 100%;
  height: 12%;

  border-bottom-width: 1px;
  border-bottom-color: ${colors.white};

  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 120px;
  height: 36px;

  margin-bottom: 32px;

  border-radius: 16px;
  border-width: 1px;
  border-color: ${colors.white};

  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const TextButtonTop = styled.Text<IFontText>`
  font-size: 14px;
  font-family: ${(props: IFontText) => props.font};
  color: ${colors.white};
`;

// Cards
export const ScrollContainerCards = styled.ScrollView`
  flex: 1;
`;

export const CardsContainer = styled.View`
  flex: 1;
  align-items: center;

  margin-top: 40px;
`;

export const CardView = styled.View<IColorText>`
  width: 90%;
  height: 108px;

  padding: 16px;
  margin-bottom: 16px;
  justify-content: space-between;

  border-width: 2px;
  border-color: ${(props: IColorText) => props.color || colors.whiteCard};
  border-radius: 16px;
`;

export const CardRowView = styled.View`
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
`;

export const TitleCard = styled.Text<IFontText>`
  font-size: 14px;
  font-family: ${(props: IFontText) => props.font};

  color: ${colors.white};
  max-width: 80%;
`;

export const DateCardView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextBottomCard = styled.Text<IFontText, IColorText>`
  font-family: ${(props: IFontText) => props.font};
  font-size: 12px;

  color: ${(props: IColorText) => props.color};
`;

export const Add = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;

  width: 64px;
  height: 64px;

  border-radius: 32px;

  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
`;
