import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string;
}

export default function Header({ title }: Props) {
    return (
        <View style={styles.headerWrap}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}

// Styles for this component
const styles = StyleSheet.create({
    headerWrap: {
        backgroundColor: '#5f4d46',
        width: '100%',
        height: 90,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
    },
});
