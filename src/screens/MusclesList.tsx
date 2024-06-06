import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {getThemeColors} from "../constants/colors";
import {HierarchyBaseResponse} from "../../musculate-app";
import {useNavigation} from "@react-navigation/native";
import ScreenNames from "../constants/navigations";
import {StackNavigationProp} from "@react-navigation/stack";
import muscleGroupApi from "../api/muscleGroupApi";

const MusclesList = ({navigation}) => {
    const isDarkTheme = useSelector((state: RootState) => state.theme.value);
    const colors = getThemeColors(isDarkTheme);
    const [muscleGroups, setMuscleGroups] = useState<HierarchyBaseResponse[]>([]);

    useEffect(() => {
        muscleGroupApi.getAll().then((res) => {
            setMuscleGroups(res)
            console.log(res)
        })
    }, []);


    return (
        <View style={{...styles.container, backgroundColor: colors.homeBG}}>
            <Text>Упражнения</Text>
            <FlatList
                data={muscleGroups}
                renderItem={({item}) => (
                    <View style={{...styles.item, backgroundColor: colors.cardBG}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Упражнения', {id: item.id})}>
                            <Text style={{color: colors.app_color_primary}}>{item.title}</Text>
                        </TouchableOpacity>

                    </View>
                )}
                keyExtractor={item => String(item.id)}
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

export default MusclesList;
