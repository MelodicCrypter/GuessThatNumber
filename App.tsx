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
import MainGameScreen from './screens/MainGameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState<undefined | null | number>();
    const [rounds, setRounds] = useState<number>(0);

    // Handlers
    const handleNewGame = () => {
        setRounds(0);
        setUserNumber(null);
    };
    const handleOnGameStart = (num: number) => {
        setUserNumber(num);
        setRounds(0);
    };
    const handleGameOver = (numOfRounds: number) => setRounds(numOfRounds);

    // Screen seletor
    let inlineScreenSelector = <StartGameScreen onGameStart={handleOnGameStart} />;
    if (userNumber && rounds <= 0) {
        inlineScreenSelector = <MainGameScreen excluNum={userNumber} onGameOver={handleGameOver} />;
    } else if (rounds > 0) {
        inlineScreenSelector = (
            <GameOverScreen numRounds={rounds} userNumber={userNumber} onNewGame={handleNewGame} />
        );
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={styles.firstLayerWrap}
        >
            <Header title="Guezz" />

            <SafeAreaView style={styles.secondLayerWrap}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.mainInnerWrap}>{inlineScreenSelector}</View>
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
