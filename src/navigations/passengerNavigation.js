import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import PassengerScreen from '../screens/passenger/passengerScreen';

const Stack = createStackNavigator();

export default function PassengerNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="passenger"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="passenger"
                component={PassengerScreen}
                options={{headerTitle:'Passenger'}}
            />


        </Stack.Navigator>
    );
}
