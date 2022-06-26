import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainApp from './screens/MainApp';
import Login from './screens/Login';
import Register from "./screens/Register";
import React from "react";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

class App extends React.Component{



    render() {
      return (
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{ headerShown: false }}>
                  <Stack.Screen
                      name="Login"
                      component={Login}
                  />
                  <Stack.Screen
                      name="Main"
                      component={MainApp}
                  />
                  <Stack.Screen
                      name="Register"
                      component={Register}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      );
  }
}

export default App;
