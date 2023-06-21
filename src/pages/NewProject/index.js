import react from "react";
import {View, StyleSheet, Text} from "react-native";
import MeuInput from "../../components/MeuInput";
import SuperButton from "../../components/MeuButton";
import { Container } from "../../styles";

export default function NewProject ({navigation}){

    const Project = () => {
        navigation.navigate('Project');
    }

    return (
        <Container>

            <MeuInput
            id= "Nome"
            label="Nome"
            placeHolder=""
            comMascara={false}
            ></MeuInput>

            <MeuInput
            label="Tipo"
            placeHolder=""
            comMascara={false}
            ></MeuInput>

            <MeuInput
            label="Local"
            placeHolder=""
            comMascara={false}
            ></MeuInput>

            <MeuInput
            label="Data"
            placeHolder=""
            comMascara={false}
            ></MeuInput>

            <MeuInput
            label="Hora"
            placeHolder=""
            comMascara={false}
            ></MeuInput>

            <SuperButton
            value="Criar"
            acao={Project}
            ></SuperButton>

        </Container>
    );
            
}
