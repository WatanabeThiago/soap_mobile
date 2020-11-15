import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../services/api'

export default function login() {
    const [user_email, setUser_email] = useState('')
    const [user_password, setuser_password] = useState('')

    const { navigate } = useNavigation()

    async function handleLogin() {
        console.log('handle')
        const data = {
            user_email: user_email, user_password: user_password
        }

        api.post('login', data)
            .then(() => {
                console.log('[Axios.post] Tentando logar...')
     
                Alert.alert('Sucesso', 'Login realizado com sucesso', [{ text: 'Voltar', onPress: () => navigate('Home') }])
            })
            .catch(({ response }) => {
                const { message, erros } = response

                if (!message) {
                    console.log(response)
                    return Alert.alert('Erro', 'Falha ao logar.')
                }

                console.error(message)
                Alert.alert('Erro', message)
            })
    }

    return (
        <View style={styles.container}>

            <Text>ENTRAR</Text>

            <TextInput
                placeholder="E-mail"
                placeholderTextColor="#45462A"

                returnKeyType="next"
                autoFocus={true} blurOnSubmit={false}

                value={user_email}
                onChangeText={setUser_email}
            />
            <TextInput
                secureTextEntry={true}
                autoCompleteType="password"
                placeholder="*******"
                placeholderTextColor="#45462A"


                returnKeyType="next"

                value={user_password}
                onChangeText={setuser_password}
            />

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
