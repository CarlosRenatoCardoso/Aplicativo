import React from "react";
import {Text, StyleSheet, View} from "react-native";
import MeuInput from "../../components/MeuInput";
import SuperButton from "../../components/MeuButton";
import { Container, MeuText } from "../../styles";

function Login ({navigation}){

    const logar = () => {
        navigation.navigate('Home');
    }

   return (
    <Container>
        <Text style={style.titulo}>Login</Text>

        <MeuInput 
        label="E-mail"
        placeHolder="exemplo@exemplo.com"
        comMascara={false}
        ></MeuInput>

        <MeuInput
        label="Senha"
        placeHolder="12345"
        comMascara={true}
        ></MeuInput>

        <SuperButton
        value="Entrar"
        acao={logar}
        ></SuperButton>

        <View style={style.boxRecuperarSenha}>
            <Text style={style.recuperarSenha}>Recuperar senha</Text>
        </View>

    </Container>
   );
}

const style = StyleSheet.create({

    titulo:{
        color:'#19DF07',
        fontSize: 60,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 15,
    },

    boxRecuperarSenha:{
        width:300,
    },

    recuperarSenha: {
        color:'#19DF07'
    }
});

export default Login;