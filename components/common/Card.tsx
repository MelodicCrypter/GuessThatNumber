import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
    children: React.ReactNode;
    style: object;
}

export default function Card({ children, style }: Props) {
    return <View style={{ ...styles.cardWrap, ...style }}>{children}</View>;
}

// Styles for this Card
const styles = StyleSheet.create({
    cardWrap: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 3,
    },
});
