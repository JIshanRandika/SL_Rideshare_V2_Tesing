import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import EarnWIthSLRScreen from '../screens/driver/earnWIthSLRScreen';
import DriveWIthOwnVehicleNavigation from './driveWIthOwnVehicleNavigation';

const Stack = createStackNavigator();

function DriveWithOwnVehicle() {
    return (
        <DriveWIthOwnVehicleNavigation/>
    );
}

export default function DriverNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="earnWithSLR"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="earnWithSLR"
                component={EarnWIthSLRScreen}
                options={{headerTitle:'Earn With SL Rideshare'}}
            />

            <Stack.Screen
                name="driveWithOwnVehicle"
                component={DriveWithOwnVehicle}
                options={{headerTitle:'Drive with Own Vehicle'}}
            />


        </Stack.Navigator>
    );
}
