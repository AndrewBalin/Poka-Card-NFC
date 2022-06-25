import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
export default class MainApp extends Component {
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
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;

                            if (route.name === 'Мой пропуск') {
                                iconName = focused ? 'cellphone-nfc' : 'cellphone-nfc-off';
                            } else if (route.name === 'Settings') {
                                iconName = focused ? 'ios-list-box' : 'ios-list';
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color}/>;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    })}
                    >
                    <Tab.Screen name="Мой пропуск" component={this.HomeScreen}/>
                    <Tab.Screen name="Приёмник" component={this.SettingsScreen}/>
                    <Tab.Screen name="Профиль" component={this.HomeScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
