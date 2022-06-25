import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Alert, Modal} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import React from "react";

class Card extends React.Component {

    unid;

    SetUnid(text) {
        this.unid = text;
    }

    async readNdef() {

            // register for the NFC tag with NDEF in it
            await NfcManager.requestTechnology(NfcTech.Ndef);
            // the resolved tag object will contain `ndefMessage` property
            const tag = await NfcManager.getTag();
            console.warn('Tag found', tag);

            NfcManager.cancelTechnologyRequest();
        }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Modal visible={false}>
                    <View>

                    </View>
                </Modal>
                <View>
                    <Text>Мои карты</Text>
                    <Button type='clear' onPress={this.readNdef} title={"Добавить карту?"}/>
                </View>

            </View>
        );
    }
}

export default Card;