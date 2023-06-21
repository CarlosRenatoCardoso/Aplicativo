import react from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Project () {

    return (
    <View style={style.container}>

        <View style={style.projeto}>

            <View>
                <Text style={style.titulo}>Nome</Text>
            </View>

            <View>
                <Text>Tipo:</Text>
                <Text>Local:</Text>
                <Text>Data:</Text>
                <Text>Hora:</Text>
            </View>

        </View>

        <View style={style.projeto}>

            <View>
                <Text style={style.titulo}>Nome</Text>
            </View>

            <View>
                <Text>Tipo:</Text>
                <Text>Local:</Text>
                <Text>Data:</Text>
                <Text>Hora:</Text>
            </View>

        </View>

        <View style={style.projeto}>

            <View>
                <Text style={style.titulo}>Nome</Text>
            </View>

            <View>
                <Text>Tipo:</Text>
                <Text>Local:</Text>
                <Text>Data:</Text>
                <Text>Hora:</Text>
            </View>

        </View>

    </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor: "#fff"
    },

    projeto:{
        backgroundColor: "#fff",
        width: 300,
        marginTop:30,
        borderRadius: 10,
        borderWidth:1,
        padding:10
    },

    titulo:{
        fontSize: 18,
        marginBottom:10
    }
})