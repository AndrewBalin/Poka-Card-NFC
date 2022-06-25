import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainApp from './screens/MainApp';
import Login from './screens/Login';

const Stack = createStackNavigator();

export default class App extends Component{

    render() {
      return (
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen
                      name="Login"
                      component={Login}
                  />
                  <Stack.Screen
                      name="Main"
                      component={MainApp}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
  },
  input: {
    height: 40,
    marginTop: 12,
    marginRight: 15,
    marginLeft: 15,
    borderWidth: 2,
    borderColor: '#b400ff',
    borderRadius: 20,
    padding: 10,
  },
  login_text: {
    textAlign: "center",
    fontSize: 25,
    color: "#b400ff"
  },
  input_button: {
      marginTop: 15,
      marginRight: 15,
      marginLeft: 15,
      height: 45,
      padding: 10,
      borderWidth: 2,
      borderRadius: 20,
      color: "#b400ff",
  }
});
