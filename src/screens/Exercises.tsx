import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from "react";
import {GetAllByMuscleGroupFilter, HierarchyBaseResponse} from "../../musculate-app";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {getThemeColors} from "../constants/colors";
import {useNavigation} from "@react-navigation/native";
import exerciseApi from "../api/exerciseApi";


const Exercises = ({route, navigation}) => {
    const emptyFilter = {
        tagIds: []
    } as GetAllByMuscleGroupFilter
    const [muscleGroupFilter, setMuscleGroupFilter] = useState<GetAllByMuscleGroupFilter>(emptyFilter)
    const [list, setList] = useState<HierarchyBaseResponse[]>([])
    const isDarkTheme = useSelector((state: RootState) => state.theme.value);
    const colors = getThemeColors(isDarkTheme);
    const {id} = route.params;

    useEffect(() => {
        exerciseApi.getAllByMuscleGroupId(id, muscleGroupFilter)
            .then((res) => {
                setList(res)
                console.log(res)
            })
    }, []);

    return (
        <View style={{...styles.container, backgroundColor: colors.homeBG}}>
            <Text>Упражнения</Text>
            <FlatList
                data={list}
                renderItem={({item}) => (
                    <View style={{...styles.item, backgroundColor: colors.cardBG}}>
                        <TouchableOpacity onPress={() => navigation.navigate('Список групп мышц')}>
                            <Text style={{color: colors.app_color_primary}}>{item.title}</Text>
                        </TouchableOpacity>

                    </View>
                )}
                keyExtractor={item => String(item.id)}
            />
        </View>
    )
}

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

export default Exercises;