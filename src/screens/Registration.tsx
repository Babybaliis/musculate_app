// Registration.tsx
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../api/api';
import {setToken} from '../store/hooks/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenNames from "../constants/navigations";
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import {RootState} from "../store/store";
import {getThemeColors} from "../constants/colors";
import {JwtAuthenticationResponse} from "../../musculate-app";

type RootStackParamList = {
    [ScreenNames.LOGIN]: {};
};

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    ScreenNames.LOGIN
>;
const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const isDarkTheme = useSelector((state: RootState) => state.theme.value);
    const colors = getThemeColors(isDarkTheme);
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const handleRegistration = async () => {
        try {
            const data: JwtAuthenticationResponse = await signUp(username, password, email);
            await AsyncStorage.setItem('accessToken', data.accessToken);
            await AsyncStorage.setItem('refreshToken', data.refreshToken);
            dispatch(setToken({refreshToken: data.refreshToken, accessToken: data.accessToken}));
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <View style={styles.buttonContainer}>
                <Button title="Register" onPress={handleRegistration}/>
                <TouchableOpacity onPress={() => navigation.navigate('Логин')}
                                  style={{backgroundColor: colors.app_color_primary}}>
                    <Text style={{
                        color: colors.textBtn,
                    }}>Есть аккаунт?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        borderRadius: 20,
    },
    buttonContainer: {
        width: '30%',
        alignSelf: 'center',
    },
});

export default Registration;
