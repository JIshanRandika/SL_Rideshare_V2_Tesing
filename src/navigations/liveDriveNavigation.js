import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import LiveDriveDetailsScreen from '../screens/driver/vehicle/liveDrive/liveDriveDetailsScreen';
import LiveDriveCreateMapScreen from '../screens/driver/vehicle/liveDrive/liveDriveCreateMapScreen';
import LiveDriveViewScreen from '../screens/driver/vehicle/liveDrive/liveDriveViewScreen';

const Stack = createStackNavigator();

export default function LiveDriveNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="scheduledDrives"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="liveDrive"
                component={LiveDriveDetailsScreen}
                options={{headerTitle:'Live Drive Details'}}
            />
            <Stack.Screen
                name="liveDriveMapCreate"
                component={LiveDriveCreateMapScreen}
                options={{headerTitle:'Live Drive Route'}}
            />
            <Stack.Screen
                name="liveDriving"
                component={LiveDriveViewScreen}
                options={{headerTitle:'Live Driving'}}
            />




        </Stack.Navigator>
    );
}
