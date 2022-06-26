import {SafeAreaView, StyleSheet, Text, View, TextInput, Image, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './Profile'

class Login extends React.Component {

    /*login(values) {
        var prof = new Profile(values['login'], values['password'])
        this.state = {
            profile: prof
        }
        if(prof.join == true) {
            this.props.navigation.navigate('Main', {prof: prof});
        } else {
            Alert.alert("Вход не выолнен", "Проверьте правильность введённых данных")
        }
    }*/
    goToReg() {
        this.props.navigation.navigate('Register')
    }

    goToMain() {
        this.props.navigation.navigate('Main')
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <Image source={require('../assets/logo.png')} style={styles.logo_image}/>
                <Formik initialValues={{login: '', password: ''}} onSubmit={(values) => {
                    console.log(values)
                    //this.login(values)
                    this.props.navigation.navigate('Main')
                }}>
                    {(props) =>
                        (
                            <View>
                                <View  style={styles.input_section}>
                                    <MaterialCommunityIcons name={'account'} size={50} color={'#E30174'} style={styles.input_icon}/>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Логин"
                                        keyboardType="default"
                                        onChangeText={props.handleChange('login')}
                                    />
                                </View>
                                <View  style={styles.input_section}>
                                    <MaterialCommunityIcons name={'key'} size={50} color={'#E30174'} style={styles.input_icon}/>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Пароль"
                                        keyboardType="default"
                                        onChangeText={props.handleChange('password')}
                                    />
                                </View>
                                <Button
                                    titleStyle={{
                                        color: "white",
                                        fontSize: 20,
                                    }}
                                    title={"Войти"}
                                    onPress={props.handleSubmit}
                                    color={"#b400ff"}
                                    buttonStyle={styles.input_button}/>
                            </View>
                        )}
                </Formik>
                <Text style={styles.noclik_text} onPress={this.goToReg}>
                    Нет аккаунта?
                    <Text style={styles.click_text}> Зарегистрируйся!</Text>
                </Text>
                <Text style={styles.noclik_text} onPress={this.goToMain}>
                    Лень регистрироваться?{'\n'}
                    <Text style={styles.click_text}>Войди как гость!</Text>
                </Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000022',
        justifyContent: "center",
    },
    input: {
        flex: 1,
        height: 45,
        borderWidth: 2,
        borderColor: '#D9D9D9B2',
        backgroundColor: '#D9D9D9B2',
        borderRadius: 20,
        padding: 10,
        marginTop: 15
    },
    login_text: {
        textAlign: "center",
        fontSize: 25,
        color: "#b400ff"
    },
    input_button: {
        marginTop: 20,
        marginRight: 15,
        marginLeft: 15,
        height: 50,
        padding: 10,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#E30174",
        backgroundColor: "#E30174",
        fontSize: 20,
    },
    input_section: {
        flexDirection: 'row',
        marginRight: 15,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input_icon: {
        padding: 10,
    },
    click_text: {
        color: "#E30174",
    },
    noclik_text: {
        fontSize: 15,
        marginTop: 15,
        color: "#fff",
        textAlign: 'center',
    },
    logo_image: {
        position: "absolute",
        width: '20%',
        resizeMode: "contain",
        top: 10,
        alignSelf: 'center',
    }
});

export default Login;