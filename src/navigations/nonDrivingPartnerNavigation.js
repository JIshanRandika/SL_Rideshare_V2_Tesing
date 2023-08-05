import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import NonDrivingPartnerScreen from '../screens/driver/nonDrivingPartner/nonDrivingPartnerScreen';

const Stack = createStackNavigator();

export default function NonDrivingPartnerNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="nonDrivingPartner"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="nonDrivingPartner"
                component={NonDrivingPartnerScreen}
                options={{headerShown:false}}
            />


        </Stack.Navigator>
    );
}
