import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: '#fff';
  align-items: center;
  justify-content: center;
`;

const MeuText = styled.Text`
   font-size: ${props => props.fonte || 18};
   color: ${props => props.cor || '#19DF07'}
`;

export {
    Container,
    MeuText
}