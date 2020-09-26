import React, { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, View, Button, Alert } from 'react-native';

import NumberBox from '../components/common/NumberBox';
import Card from '../components/common/Card';
import { randomize } from '../utils/numbersUtil';

interface Props {
    excluNum: number;
    onGameOver: (rounds: number) => void;
}

export default function MainGameScreen({ excluNum, onGameOver }: Props) {
    const { alert } = Alert;
    const [currentGuess, setCurrentGuess] = useState<number>(randomize(1, 100, excluNum));
    const [rounds, setRounds] = useState<number>(0);

    const CURRENT_LOW = useRef(1);
    const CURRENT_HIGH = useRef(100);

    useEffect(() => {
        if (currentGuess === excluNum) onGameOver(rounds);
    }, [currentGuess, excluNum, onGameOver]);

    // Handlers
    const handleNextGuess = (direction: string) => {
        if (
            (direction === 'lower' && currentGuess < excluNum) ||
            (direction === 'greater' && currentGuess > excluNum)
        ) {
            alert('Haha!', 'Please be honest.', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') CURRENT_HIGH.current = currentGuess;
        if (direction === 'greater') CURRENT_LOW.current = currentGuess;

        setCurrentGuessHelper(CURRENT_LOW, CURRENT_HIGH, currentGuess);
        setRounds(rounds + 1);
    };

    // Helpers
    const setCurrentGuessHelper = (first, second, exc) => {
        const nextNumber = randomize(first.current, second.current, exc);
        setCurrentGuess(nextNumber);
    };

    return (
        <View style={styles.mainWrap}>
            <Text> {"Opponent's Guess"} </Text>
            <NumberBox>{currentGuess}</NumberBox>
            <Card style={styles.card}>
                <Button title="LOWER" onPress={() => handleNextGuess('lower')} />
                <Button title="GREATER" onPress={() => handleNextGuess('greater')} />
            </Card>
        </View>
    );
}

// Styles for this MainGameScreen
const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    },
});
