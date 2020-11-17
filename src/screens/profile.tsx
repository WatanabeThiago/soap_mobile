import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../services/api'

export default function perfil() {
    const user_id = localStorage.getItem('user_id')

    const [user, setUser] = useState('')

    const { navigate } = useNavigation()

    async function handleLogin() {
        console.log('handle')
        



        useEffect(() => {
            api.get('profile', {
                headers: { Authorization: user_id}
            }).then(response => {
                setUser(response.data)
                console.log(user)
            })
        }), [user_id]
    }

    return (
        <View style={styles.container}>

            <Text>teste</Text>
            <Text>Mateus H.</Text>
            <Text>mateustrindade@gmail.com</Text>

            <TouchableOpacity>
                <Text>Criar um produto</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Ver os produtos</Text>
            </TouchableOpacity>




            <TouchableOpacity onPress={handleLogin}>
                <Text>Entrar</Text>
            </TouchableOpacity >
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
