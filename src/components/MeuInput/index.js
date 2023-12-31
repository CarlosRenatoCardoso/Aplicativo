import React from "react";
import {SafeAreaView, TextInput, StyleSheet, Text} from "react-native";

const MeuInput = (props) => {
    return (
        <SafeAreaView>
            <Text>{props.label}</Text>
            <TextInput
            style={style.input}
            placeholder={props.placeHolder}
            secureTextEntry={props.comMascara}
            ></TextInput>
        </SafeAreaView>
    );
}

const style = StyleSheet.create ({
    input:{
        borderWidth: 1,
        marginBottom: 15,
        marginTop: 3,
        padding: 10,
        width: 320,
        fontSize: 18,
        color: "#1a1a1a",
        borderRadius: 10,
    }
});

export default MeuInput;