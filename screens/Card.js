import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Alert, Modal} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import React from "react";

NfcManager.start();

class Card extends React.Component {

    unid;

    SetUnid(text) {
        this.unid = text;
    }



    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#000022"}}>
                <Modal visible={false}>
                    <View>
                        <Text></Text>
                    </View>
                </Modal>
                <View>
                    <Text>Мои карты</Text>
                    <Button type='clear' title={"Добавить карту?"}/>
                </View>

            </View>
        );
    }
}

export default Card;