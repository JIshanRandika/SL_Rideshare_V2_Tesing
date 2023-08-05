import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import ScheduledDrivesScreen from '../screens/driver/vehicle/scheduledDrives/scheduledDrivesScreen';
import DriveDetailsScreen from '../screens/driver/vehicle/scheduledDrives/driveDetailsScreen';
import ScheduledDriveMapCreateScreen from '../screens/driver/vehicle/scheduledDrives/scheduledDriveMapCreateScreen';

const Stack = createStackNavigator();

export default function ScheeduledDriveNavigation() {
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
                name="scheduledDrives"
                component={ScheduledDrivesScreen}
                options={{headerTitle:'Scheduled Drives'}}
            />

            <Stack.Screen
                name="driveDetails"
                component={DriveDetailsScreen}
                options={{headerTitle:'Drive Details'}}
            />
            <Stack.Screen
                name="scheduledDriveMapCreate"
                component={ScheduledDriveMapCreateScreen}
                options={{headerTitle:'Drive Route'}}
            />


        </Stack.Navigator>
    );
}
