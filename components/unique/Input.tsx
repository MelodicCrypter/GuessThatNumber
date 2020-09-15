import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface Props {
    props: React.ReactNode;
    style: object;
}

export default function Input(props: Props) {
    const { style } = props;

    return <TextInput {...props} style={{ ...styles.inputWrap, ...style }} />;
}

// Styles for this Input
const styles = StyleSheet.create({
    inputWrap: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
});
