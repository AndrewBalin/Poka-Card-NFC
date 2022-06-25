import {SafeAreaView, StyleSheet, Text, View, TextInput} from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import React from "react";

class Login extends React.Component {

    login(props) {
        props.handleSubmit;
        this.props.navigation.navigate('Main');
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <Formik initialValues={{login: '', password: '', remember: false}} onSubmit={(values) => {
                    console.log(values)
                }}>
                    {(props) =>
                        (
                            <View>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Имя пользователя"
                                    keyboardType="default"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Пароль"
                                    keyboardType="default"
                                />
                                <Button
                                    title={"Войти"}
                                    onPress={() => this.login(props)}
                                    color={"#b400ff"}
                                    type="outline"
                                    buttonStyle={styles.input_button}/>
                            </View>
                        )}
                </Formik>
            </SafeAreaView>
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

export default Login;