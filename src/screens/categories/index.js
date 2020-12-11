import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../styles/styles';

export default function Categories({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>THIS IS THE CATEGORIES' SCREEN, WELCOME !</Text>
            <Button title="GO TO PRODUCTS" onPress={() => navigation.navigate('Products')} />
        </View>
    );
}