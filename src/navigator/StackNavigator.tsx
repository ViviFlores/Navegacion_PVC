import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';

const Stack = createStackNavigator();

//Componente de navegación
export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Pantalla1'
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'white'
                },
                headerShown: true,
                headerStyle: {
                    elevation: 7
                }
            }}>
            <Stack.Screen name="Pantalla1"
                options={{ title: 'Home' }}
                component={Pantalla1Screen} />
            <Stack.Screen name="Pantalla2"
                options={{ title: 'Perfil' }}
                component={Pantalla2Screen} />
            <Stack.Screen name='Pantalla3'
                options={{ title: 'Productos', headerShown: false }}
                component={Pantalla3Screen} />
        </Stack.Navigator>
    );
}