import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Alert, Modal, Image} from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';
import React from "react";

NfcManager.start();

class ProfieScreen extends React.Component {

    unid;

    SetUnid(text) {
        this.unid = text;
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
                    <Text style={styles.my_cards}>Профиль</Text>
                </View>

            </View>
        );
    }
}

export default ProfieScreen;