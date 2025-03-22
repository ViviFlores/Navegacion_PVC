import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pantalla1Screen = () => {
    //hook useNavigation: permite navegar entre pantallas
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla 1</Text>
            <Button title='Ir pantalla 2'
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla2' }))} />
        </View>
    )
}
