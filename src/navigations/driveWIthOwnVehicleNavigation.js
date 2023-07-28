import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import DriveWithOwnVehicleScreen from '../screens/driver/driveWithOwnVehicle/driveWithOwnVehicleScreen';

const Stack = createStackNavigator();

export default function DriveWIthOwnVehicleNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="driveWithOwnVehicle"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="driveWithOwnVehicle"
                component={DriveWithOwnVehicleScreen}
                options={{headerShown:false}}
            />


        </Stack.Navigator>
    );
}
