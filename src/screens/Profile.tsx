import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeToken} from '../store/hooks/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        await AsyncStorage.removeItem('accessToken');
        await AsyncStorage.removeItem('refreshToken');
        dispatch(removeToken());
    };

    return (
        <View style={styles.container}>
            <Text>Профиль</Text>
            <Button title="Выйти из аккаунта" onPress={handleLogout}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Profile;
