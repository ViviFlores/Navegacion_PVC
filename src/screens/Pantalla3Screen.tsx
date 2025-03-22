import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

export const Pantalla3Screen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Pantalla 3</Text>
            <Button title='Regresar'
                onPress={() => navigation.dispatch(CommonActions.goBack())} />
            <Button title='Ir al home'
                onPress={() => navigation.popToTop()} />
        </View>
    )
}
