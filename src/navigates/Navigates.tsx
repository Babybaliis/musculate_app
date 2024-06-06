import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import Home from "../screens/Home";
import MusclesList from "../screens/MusclesList";
import Setting from "../screens/Setting";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screenNames from "../constants/navigations";
import Login from "../screens/Login";
import Registration from "../screens/Registration";
import Profile from "../screens/Profile";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {useEffect, useState} from "react";
import {ActivityIndicator, Image, View} from "react-native";
import Exercises from "../screens/Exercises";

const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()
const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name={screenNames.HOME} component={Home}/>
    </HomeStack.Navigator>
);

const DirectoryStack = createNativeStackNavigator();
const DirectoryStackScreen = () => (
    <DirectoryStack.Navigator>
        <DirectoryStack.Screen name={screenNames.MUSCULATURE_lIST} component={MusclesList}/>
        <DirectoryStack.Screen name={screenNames.EXERCISES} component={Exercises}/>
    </DirectoryStack.Navigator>
);

const SettingStack = createNativeStackNavigator();
const SettingStackScreen = () => (
    <SettingStack.Navigator>
        <SettingStack.Screen name={screenNames.SETTING} component={Setting}/>
        <SettingStack.Screen name={screenNames.PROFILE} component={Profile}/>
    </SettingStack.Navigator>
);

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name={screenNames.LOGIN} component={Login}/>
        <AuthStack.Screen name={screenNames.REGISTRATION} component={Registration}/>
    </AuthStack.Navigator>
);

export const TabNavigate = () => {
    const getIcon = (route: any, color: string) => {
        if (route.name === screenNames.HOME) {
            return <FontAwesome5 name="dumbbell" size={24} color={color}/>;
        } else if (route.name === screenNames.MUSCULATURE_lIST) {
            return <AntDesign name="book" size={24} color={color}/>;
        } else if (route.name === screenNames.SETTING) {
            return <AntDesign name="setting" size={24} color={color}/>;
        }
    };

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarActiveTintColor: 'purple',
                tabBarInactiveTintColor: 'grey',
                tabBarIcon: ({color}) => getIcon(route, color),
            })}
        >
            <Tab.Screen
                name={screenNames.HOME}
                component={HomeStackScreen}
            />
            <Tab.Screen
                name={screenNames.MUSCULATURE_lIST}
                component={DirectoryStackScreen}
            />
            <Tab.Screen
                name={screenNames.SETTING}
                component={SettingStackScreen}
            />
        </Tab.Navigator>
    );
};

export const Navigates = () => {
    const isAuth = useSelector((state: RootState) => state.auth.accessToken !== null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const loader = (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff"/>
        </View>
    );

    return (
        isLoading ? loader : (
            <NavigationContainer>
                {isAuth ? <TabNavigate/> : <AuthStackScreen/>}
            </NavigationContainer>
        )
    );
};
export default Navigates;