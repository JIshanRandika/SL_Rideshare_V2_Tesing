import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import ScheduledDrivesScreen from '../screens/driver/vehicle/scheduledDrives/scheduledDrivesScreen';
import EarnWIthSLRScreen from '../screens/driver/earnWIthSLRScreen';
import AvailableRidesMapViewScreen from '../screens/driver/vehicle/availableRides/availableRidesMapViewScreen';
import AvailableRIdesDetailViewMapScreen from '../screens/driver/vehicle/availableRides/availableRIdesDetailViewMapScreen';
import ARideOnMapScreen from '../screens/driver/vehicle/availableRides/aRideOnMapScreen';
import VehicleProfileScreen from '../screens/driver/vehicle/vehicleProfileScreen';
import RideRequestScreen from '../screens/driver/vehicle/rideRequest/rideRequestScreen';
import DriveWIthOwnVehicleNavigation from './driveWIthOwnVehicleNavigation';
import NonDrivingPartnerNavigation from './nonDrivingPartnerNavigation';
import DriveUnderPartnerNavigation from './driveUnderPartnerNavigation';
import VehicleNavigation from './vehicleNavigation';
import ScheeduledDriveNavigation from './scheeduledDriveNavigation';
import LiveDriveNavigation from './liveDriveNavigation';

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
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="nonDrivingPartner"
                component={NonDrivingPartnerNavigation}
                options={{headerTitle:'Non-Driving Partner'}}
            />

            <Stack.Screen
                name="driveUnderPartner"
                component={DriveUnderPartnerNavigation}
                options={{headerTitle:'Drive Under Partner'}}
            />
            <Stack.Screen
                name="vehicle"
                component={VehicleNavigation}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="scheduledDrives"
                component={ScheeduledDriveNavigation}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="liveDrive"
                component={LiveDriveNavigation}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="availableRidesMap"
                component={AvailableRidesMapViewScreen}
                options={{headerTitle:'Available Rides Map'}}
            />

            <Stack.Screen
                name="rideRequest"
                component={RideRequestScreen}
                options={{headerTitle:'Ride Requests'}}
            />

            <Stack.Screen
                name="availableRidesDetail"
                component={AvailableRIdesDetailViewMapScreen}
                options={{headerTitle:'Available Rides Detail'}}
            />

            <Stack.Screen
                name="rideOnMap"
                component={ARideOnMapScreen}
                options={{headerTitle:'Ride On Map'}}
            />

            <Stack.Screen
                name="vehicleProfile"
                component={VehicleProfileScreen}
                options={{headerTitle:'Vehicle Profile'}}
            />


        </Stack.Navigator>
    );
}
