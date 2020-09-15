import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    SafeAreaView,
    TouchableWithoutFeedback,
    Keyboard,
    Text,
} from 'react-native';

import Header from './components/common/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
    // Main Functions

    // Helpers

    // Main: return text only if list is empty
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={styles.firstLayerWrap}
        >
            <Header title="Guezz" />

            <SafeAreaView style={styles.secondLayerWrap}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.mainInnerWrap}>
                        <StartGameScreen />
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>

            <StatusBar style="light" />
        </KeyboardAvoidingView>
    );
}

// Styles for this component
const styles = StyleSheet.create({
    firstLayerWrap: {
        flex: 1,
    },
    secondLayerWrap: {
        flex: 1,
    },
    mainInnerWrap: {
        flex: 1,
    },
    emptyDataWrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        fontWeight: '500',
        fontSize: 15,
    },
});
