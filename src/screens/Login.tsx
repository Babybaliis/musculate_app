import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {signIn} from '../api/api';
import {getThemeColors} from "../constants/colors";
import ScreenNames from "../constants/navigations";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {JwtAuthenticationResponse} from "../../musculate-app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setToken} from "../store/hooks/authSlice";


type RootStackParamList = {
    [ScreenNames.REGISTRATION]: {};
    Home: {}; // Добавьте эту строку
};

type RegistrationScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    ScreenNames.REGISTRATION
>;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isDarkTheme = useSelector((state: RootState) => state.theme.value);
    const dispatch = useDispatch();
    const colors = getThemeColors(isDarkTheme);
    const navigation = useNavigation<RegistrationScreenNavigationProp>();

    useEffect(() => {
        const checkAuthStatus = async () => {
            const accessToken = await AsyncStorage.getItem('accessToken');
            const refreshToken = await AsyncStorage.getItem('refreshToken');
            if (accessToken && refreshToken) {
                dispatch(setToken({accessToken, refreshToken}));
            }
        }

        checkAuthStatus();
    }, []);


    const handleLogin = async () => {
        try {
            const data: JwtAuthenticationResponse = await signIn(username, password);
            if (data.accessToken) {
                await AsyncStorage.setItem('accessToken', data.accessToken);
                await AsyncStorage.setItem('refreshToken', data.refreshToken);
                dispatch(setToken({refreshToken: data.refreshToken, accessToken: data.accessToken}));
            } else {
                console.log('error');
            }

        } catch (error) {
            console.error('error');
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
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <View style={styles.buttonContainer}>
                <Button title="Login" onPress={handleLogin}/>
                <TouchableOpacity onPress={() => navigation.navigate('Регистрация')}
                                  style={{backgroundColor: colors.app_color_primary}}>
                    <Text style={{
                        color: colors.textBtn,
                    }}>Нет аккауна?</Text>
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

export default Login;
