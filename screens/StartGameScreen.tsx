import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native';

import Card from '../components/common/Card';
import Input from '../components/unique/Input';
import NumberBox from '../components/common/NumberBox';
import Colors from '../constants/colors';

export default function StartGameScreen() {
    const [enteredValue, setEnteredValue] = useState<string>('');
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [finalNumber, setFinalNumber] = useState<number>(0);

    // Handlers
    const handleNumInput = (inputText: string) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    const handleReset = () => {
        setEnteredValue('');
        setConfirmed(false);
    };
    const handleConfirm = () => {
        const chosenNum = parseInt(enteredValue);
        if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
            Alert.alert('Invalid number!', 'Number must  between 1 and 99.', [
                { text: 'Okay', style: 'destructive', onPress: handleReset },
            ]);
            return;
        }

        setConfirmed(true);
        setFinalNumber(chosenNum);
        setEnteredValue('');
    };

    // Custom JSX
    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.preStartGameWrap}>
                <Text style={styles.commonText}>Lez Go!</Text>
                <NumberBox>{finalNumber}</NumberBox>
                <Button title="START GAME" />
            </Card>
        );
    }

    return (
        <View style={styles.mainWrap}>
            <Card style={styles.inputWrap}>
                <Text>Select A Number</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={handleNumInput}
                    value={enteredValue}
                />
                <View style={styles.buttonWrap}>
                    <View style={styles.button}>
                        <Button title="Reset" onPress={handleReset} color={Colors.accent} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm" onPress={handleConfirm} color={Colors.primary} />
                    </View>
                </View>
            </Card>

            {confirmedOutput}
        </View>
    );
}

// Styles for this StartGameScreen
const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputWrap: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    buttonWrap: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
    },
    preStartGameWrap: {
        marginTop: 20,
        alignItems: 'center',
    },
    commonText: {
        textAlign: 'center',
    },
});
