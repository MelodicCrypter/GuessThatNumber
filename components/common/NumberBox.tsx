import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Colors from '../../constants/colors';

interface Props {
    children: React.ReactNode;
}

export default function NumberBox({ children }: Props) {
    return (
        <View style={styles.mainWrap}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
}

// Styles for this NumberBox
const styles = StyleSheet.create({
    mainWrap: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 7,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: Colors.accent,
        fontSize: 22,
    },
});
