import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import VehicleScreen from '../screens/driver/vehicle/vehicleScreen';

const Stack = createStackNavigator();

export default function VehicleNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="vehicle"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="vehicle"
                component={VehicleScreen}
                options={{headerTitle:'Vehicle'}}
            />


        </Stack.Navigator>
    );
}
