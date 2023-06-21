import React from "react";
import {Text, StyleSheet, View} from "react-native";
import SuperButton from "../../components/MeuButton";
import { Container, MeuText } from "../../styles";

export default function Home ({navigation}) {

  const NewProject = () => {
    navigation.navigate('NewProject');
  };

  const Project = () => {
    navigation.navigate('Project');
  }

    return (
        <Container>

          <SuperButton
          value="Projetos"
          acao={Project}
          ></SuperButton>

          <SuperButton
          value="Novo Projeto"
          acao={NewProject}
          ></SuperButton>

        </Container>
    );
}