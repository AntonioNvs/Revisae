import styled from 'styled-components/native';
import colors from './colors.json';

interface IFontText {
  font: string;
}

export const ArrowBack = styled.TouchableOpacity`
  position: absolute;

  top: 20px;
  left: 20px;
`;

export const ContainerBackground = styled.View`
  flex: 1;
  background-color: ${colors.background};

  align-items: center;
  justify-content: center;
`;

export const ContainerView = styled.View`
  width: 75%;
`;

export const Title = styled.Text<IFontText>`
  font-size: 24px;
  font-family: ${(props: IFontText) => props.font};

  color: ${colors.white};

  margin-bottom: 24px;
`;

export const ContentInput = styled.TextInput<IFontText>`
  width: 100%;
  height: 64px;

  padding: 12px;
  margin-bottom: 16px;

  background-color: ${colors.backgroundInput};
  border-radius: 8px;

  color: ${colors.white};
  font-size: 12px;
  font-family: ${(props: IFontText) => props.font};
`;

export const ButtonSend = styled.TouchableOpacity`
  width: 96px;
  height: 64px;

  margin-top: 24px;

  align-self: flex-end;

  background-color: ${colors.white};
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;
