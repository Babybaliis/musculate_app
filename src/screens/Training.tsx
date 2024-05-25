import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {getThemeColors} from "../constants/colors";

const Training = () => {
    const isDarkTheme = useSelector((state: RootState) => state.theme.value);
    const colors = getThemeColors(isDarkTheme);
    const data = ['Тренировка 1', 'Тренировка 2', 'Тренировка 3'];

    return (
        <View style={{...styles.container, backgroundColor: colors.homeBG}}>
            <Text>Тренировки</Text>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <View style={{...styles.item, backgroundColor: colors.cardBG}}>
                        <Text style={{color: colors.app_color_primary}}>{item}</Text>
                    </View>
                )}
                keyExtractor={item => item}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        width: Dimensions.get('window').width - 20,
        margin: 10,
        padding: 20,
        borderRadius: 20,
    },
});

export default Training;
