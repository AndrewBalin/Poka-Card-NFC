import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from "react";
import Card from './Card'
import Reader from "./Reader";

const Tab = createBottomTabNavigator();

class MainApp extends React.Component {
    HomeScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }

    SettingsScreen() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }


    render() {
        return (
                <Tab.Navigator

                    screenOptions={({route}) => ({
                        tabBarStyle: {
                            backgroundColor: "#000022",
                            height: 60,

                        },
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;

                            if (route.name === 'Мои карты') {
                                iconName = focused ? 'cellphone-nfc' : 'cellphone-nfc-off';
                            } else if (route.name === 'Ридер') {
                                iconName = focused ? 'access-point' : 'access-point-off';
                            } else if (route.name === 'Профиль') {
                                iconName = focused ? 'account' : 'account-outline';
                            }

                            // You can return any component that you like here!
                            return <MaterialCommunityIcons name={iconName} size={size} color={color}/>;
                        },
                        tabBarActiveTintColor: '#E30174',
                        tabBarInactiveTintColor: '#D9D9D9B2',
                    })}
                    >
                    <Tab.Screen name="Мои карты" component={Card} options={{headerShown: false}}/>
                    <Tab.Screen name="Ридер" component={Reader} options={{headerShown: false}}/>
                    <Tab.Screen name="Профиль" component={this.HomeScreen} options={{headerShown: false}}/>
                </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default MainApp;
