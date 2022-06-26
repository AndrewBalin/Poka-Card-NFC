import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Alert, Modal, Image, TextInput} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';
import React from "react";
import {Formik} from "formik";

NfcManager.start();

class Card extends React.Component {

    unid = '123456789';

    SetUnid(text) {
        this.unid = text;
    }

    async writeNdef(value) {
        let result = false;

        try {
            await NfcManager.requestTechnology(NfcTech.Ndef);
            const bytes = Ndef.encodeMessage([Ndef.textRecord(value)]);

            if (bytes) {
                await NfcManager.ndefHandler.writeNdefMessage(bytes);
                result = true;
            }
        } catch (ex) {
            console.warn(ex);
        } finally {
            // STEP 4
            NfcManager.cancelTechnologyRequest();
        }

        return result;
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#000022"}}>
                <Image source={require('../assets/logo.png')} style={styles.logo_image}/>
                <Modal visible={false}>
                    <View>
                        <Text></Text>
                    </View>
                </Modal>
                <Formik initialValues={{id: ''}} onSubmit={(values) => {
                    console.log(values)
                    this.writeNdef(values.id)
                    //this.login(values)
                }}>
                    {(props) =>
                        (
                            <View style={styles.container}>
                                <View style={styles.cards_info}>
                                    <MaterialCommunityIcons name={'account'} size={50} color={'#E30174'}
                                                            style={styles.input_icon}/>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Идентификатор"
                                        keyboardType="default"
                                        onChangeText={props.handleChange('id')}
                                    />
                                </View>
                                <Button
                                    titleStyle={{
                                        color: "white",
                                        fontSize: 20,
                                    }}
                                    title={"Использовать карту"}
                                    onPress={props.handleSubmit}
                                    color={"#b400ff"}
                                    buttonStyle={styles.input_button}/>
                            </View>)}
                </Formik>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000022',
        justifyContent: "center",
    },
    my_cards: {
        marginLeft: 40,
        color: "#fff",
        fontStyle: "normal" ,
        fontSize: 25,
        flex: 1,
    },
    cards_info: {
        width: '100%',
        flexDirection: 'row',
        marginRight: 15,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input_icon: {
        padding: 10,
    },
    logo_image: {
        position: "absolute",
        width: '20%',
        resizeMode: "contain",
        top: 10,
        alignSelf: 'center',
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
});

export default Card;