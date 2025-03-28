import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Pantalla2Screen = () => {
    //hook useNavigation: permite navegar entre pantallas
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla 2</Text>
            <Button title='Ir pantalla 3'
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla3' }))} />
        </View>
    )
}
