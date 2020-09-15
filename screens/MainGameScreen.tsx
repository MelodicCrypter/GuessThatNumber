import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Button, Alert } from 'react-native';

import NumberBox from '../components/common/NumberBox';
import Card from '../components/common/Card';
import { randomize } from '../utils/numbersUtil';

interface Props {
    excluNum: number;
}

export default function MainGameScreen({ excluNum }: Props) {
    const { alert } = Alert;
    const [currentGuess, setCurrentGuess] = useState<number>(randomize(1, 100, excluNum));

    // Handlers
    const handleLower = () => {};
    const handleGreater = () => {};
    const handleNextGuess = (direction: string) => {
        if (
            (direction === 'lower' && currentGuess < excluNum) ||
            (direction === 'greater' && currentGuess > excluNum)
        ) {
            alert('Haha!', 'Please be honest.', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        return 'yay!';
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
