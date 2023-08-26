import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import ScheduledDrivesScreen from '../screens/driver/vehicle/scheduledDrives/scheduledDrivesScreen';
import DriveDetailsScreen from '../screens/driver/vehicle/scheduledDrives/driveDetailsScreen';
import ScheduledDriveMapCreateScreen from '../screens/driver/vehicle/scheduledDrives/scheduledDriveMapCreateScreen';
import ScheduledRidesScreen from '../screens/passenger/scheduledRide/scheduledRidesScreen';
import RideDetailsScreen from '../screens/passenger/scheduledRide/rideDetailsScreen';
import ScheduledRideMapCreateScreen from '../screens/passenger/scheduledRide/scheduledRideMapCreateScreen';

const Stack = createStackNavigator();

export default function ScheduledRideNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="scheduledRides"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="scheduledRides"
                component={ScheduledRidesScreen}
                options={{headerTitle:'Scheduled Rides'}}
            />

            <Stack.Screen
                name="rideDetails"
                component={RideDetailsScreen}
                options={{headerTitle:'Ride Details'}}
            />
            <Stack.Screen
                name="scheduledRideMapCreate"
                component={ScheduledRideMapCreateScreen}
                options={{headerTitle:'Ride Route'}}
            />


        </Stack.Navigator>
    );
}
