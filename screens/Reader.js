import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Alert, Modal} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import React, { useState } from "react";

NfcManager.start();

function roughScale(x, base) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    return parsed * 100;
}
function UnidTake (cl) {
    if(cl.Unid != null) {
        return(
            <Text>{cl.Unid}</Text>,
            <Button title={'Сканировать ещё раз'} onPress={cl.readNdef()}/>
        );
    } else {
        return(<Text>Приложите карту к сканнеру</Text>);
    }
}

class Reader extends React.Component {

    constructor(props) {
        super(props);
        this.readNdef()
    }

    Unid = String;
    async readNdef() {

        try {
            console.warn('Start reading');
            // register for the NFC tag with NDEF in it
            await NfcManager.requestTechnology(NfcTech.Ndef);
            // the resolved tag object will contain `ndefMessage` property
            const tag = await NfcManager.getTag();
            console.warn('Tag found', tag);
            var tag_id = roughScale(tag['id'], 16)
            Alert.alert("Распознанный идентефикатор", tag_id.toString())
            this.Unid = "Карта с идентефикатором " + tag_id.toString() + " была использована";
        } catch (ex) {
            console.warn(ex);
            Alert.alert("Ошибка", 'Не удалось распознать инедтефикатор')
        } finally {
            // stop the nfc scanning
            NfcManager.cancelTechnologyRequest();
            this.forceUpdate();
            console.log(this.Unid)
        }

    }



    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000022'}}>
                <Modal visible={false}>
                    <View>
                        <Text></Text>
                    </View>
                </Modal>
                <View>
                    <UnidTake/>
                </View>

            </View>
        );
    }
}

export default Reader;