import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function Home() {
    const  { navigate } = useNavigation()
    return (
        <View style={styles.container}>

            <Text>/SOAPP/</Text>

            <TouchableOpacity style={styles.buttonEnter} onPress={( ) => navigate('login')}>
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.text}>Cadastrar-se</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bolinhas: {

        width: 394,
        height: 267,

    },
    buttonEnter: {

        width: 273,
        height: 46,
        padding: 12,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: "#8C98FF",
        borderRadius: 26,
        margin: 10 
    },
    buttonRegister: {

        width: 273,
        height: 46,
        padding: 12,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: "#000",
        borderRadius: 26,
    },
    text: {
        color: "#FFF"
    }
});
