import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

interface Props {
    numRounds: number;
    userNumber: number | null | undefined;
    onNewGame: () => void;
}

export default function GameOverScreen({ numRounds, userNumber, onNewGame }: Props) {
    return (
        <View style={styles.mainWrap}>
            <Text> GAME OVER! </Text>
            <Text>Number of Rounds: {numRounds}</Text>
            <Text>Number was: {userNumber}</Text>
            <Text> </Text>
            <Button title="New Game" onPress={onNewGame} />
        </View>
    );
}

// Styles for this GameOverScreen
const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
