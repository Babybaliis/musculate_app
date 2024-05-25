import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Calendars from "../components/Calendars";
import {getThemeColors} from "../constants/colors";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

const Home = () => {
    const isDarkTheme = useSelector((state: RootState) => state.theme.value);
    const colors = getThemeColors(isDarkTheme);
    return (
        <View style={{...styles.container, backgroundColor: colors.homeBG}}>
            <ScrollView>
                <Calendars/>
            </ScrollView>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10, // Добавьте отступы по бокам
    },
});

export default Home;
