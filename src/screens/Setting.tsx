import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Switch} from 'react-native-switch'
import Registration from "./Registration";
import {getThemeColors} from "../constants/colors";
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '../store/hooks/themeSlice';
import {RootState} from '../store/store';
import ScreenNames from '../constants/navigations';

type RootStackParamList = {
    [ScreenNames.PROFILE]: { userId: number };
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    ScreenNames.PROFILE
>;
const Setting = () => {
    const isDarkTheme = useSelector((state: RootState) => state.theme.value);
    const colors = getThemeColors(isDarkTheme);
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    const dispatch = useDispatch();

    const isAuth = true;
    return (
        <View style={{...styles.container, backgroundColor: colors.homeBG}}>
            {isAuth ? <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.PROFILE, {userId: 1})}
                                        style={{...styles.button, backgroundColor: colors.app_color_primary}}>
                    <Text style={{
                        ...styles.buttonText,
                        color: colors.textBtn,
                    }}>Профиль</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={Registration}
                                  style={{
                                      ...styles.button,
                                      backgroundColor: colors.app_color_primary,
                                  }}>
                    <Text style={{
                        ...styles.buttonText,
                        color: colors.textBtn,
                    }}>Регистрация</Text>
                </TouchableOpacity>
            }

            <View style={{...styles.button, backgroundColor: colors.app_color_primary}}>
                <Text style={{color: colors.textBtn}}>Темная тема</Text>
                <Switch
                    onValueChange={(value) => dispatch(toggleTheme())}
                    value={isDarkTheme}
                />
            </View>

            <TouchableOpacity onPress={() => {
            }} style={{...styles.button, backgroundColor: colors.app_color_primary}}>
                <Text style={{
                    ...styles.buttonText,
                    color: colors.textBtn,
                }}>Тех. поддержка</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => {
            }} style={{...styles.button, backgroundColor: colors.app_color_primary}}>
                <Text style={{
                    ...styles.buttonText,
                    color: colors.textBtn,
                }}>Конфидициальность</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
            }} style={{...styles.button, backgroundColor: colors.app_color_primary}}>
                <Text style={{
                    ...styles.buttonText,
                    color: colors.textBtn,
                }}>О нас</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10, // отступы по бокам
    },
    button: {
        width: '100%', // кнопка на всю ширину
        padding: 20, // отступы внутри кнопки
        marginVertical: 5, // отступы между кнопками
        alignItems: 'center',
        borderRadius: 5, // скругление углов кнопки
        gap: 10,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: 'white', // цвет текста кнопки
    },
    switchContainer: {
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10,
    },
});

export default Setting;
