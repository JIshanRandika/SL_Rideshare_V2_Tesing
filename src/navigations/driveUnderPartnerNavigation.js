import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import DriveUnderPartnerScreen from '../screens/driver/driveUnderPartner/driveUnderPartnerScreen';

const Stack = createStackNavigator();

export default function DriveUnderPartnerNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="driveUnderPartner"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="driveUnderPartner"
                component={DriveUnderPartnerScreen}
                options={{headerShown:false}}
            />





        </Stack.Navigator>
    );
}
