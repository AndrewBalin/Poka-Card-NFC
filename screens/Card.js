import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Alert, Modal, Image} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';
import React from "react";

NfcManager.start();

class Card extends React.Component {

    unid;

    SetUnid(text) {
        this.unid = text;
    }

    async writeNdef({type, value}) {
        let result = false;

        try {
            await NfcManager.requestTechnology(NfcTech.Ndef);
            const bytes = Ndef.encodeMessage([Ndef.textRecord(this.unid)]);

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
                <View style={styles.cards_info}>
                    <Text style={styles.my_cards}>Мои карты</Text>
                    <MaterialCommunityIcons name={'plus'} color={'#E30174'} size={60} style={styles.input_icon}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        marginRight: 40,
    },
    logo_image: {
        position: "absolute",
        width: '20%',
        resizeMode: "contain",
        top: 10,
        alignSelf: 'center',
    }
});

export default Card;