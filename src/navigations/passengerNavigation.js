import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import PassengerScreen from '../screens/passenger/passengerScreen';
import LiveWalkingNavigation from './liveWalkingNavigation';
import ScheduledRideNavigation from './scheduledRideNavigation';
import DriveRequestScreen from '../screens/passenger/driveRequest/driveRequestScreen';
import OffersScreen from '../screens/passenger/offers/offersScreen';
import PassengerStatisticsScreen from '../screens/passenger/passengerStatistics/passengerStatisticsScreen';
import ARideOnMapScreen from '../screens/driver/vehicle/availableRides/aRideOnMapScreen';
import ADriveOnMapScreen from '../screens/passenger/availableDrives/aDriveOnMapScreen';
import AvailableRidesMapViewScreen from '../screens/driver/vehicle/availableRides/availableRidesMapViewScreen';
import AvailableRIdesDetailViewMapScreen
    from '../screens/driver/vehicle/availableRides/availableRIdesDetailViewMapScreen';
import AvailableDrivesDetailViewScreen from '../screens/passenger/availableDrives/availableDrivesDetailViewScreen';
import AvailableDrivesMapViewScreen from '../screens/passenger/availableDrives/availableDrivesMapViewScreen';
import HireFindNavigation from './hireFindNavigation';

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
            <Stack.Screen
                name="liveWalk"
                component={LiveWalkingNavigation}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="hireFind"
                component={HireFindNavigation}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="scheduledRides"
                component={ScheduledRideNavigation}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="driveRequest"
                component={DriveRequestScreen}
                options={{headerTitle:'Drive Requests'}}
            />
            <Stack.Screen
                name="offers"
                component={OffersScreen}
                options={{headerTitle:'Offers'}}
            />
            <Stack.Screen
                name="passengerStatistics"
                component={PassengerStatisticsScreen}
                options={{headerTitle:'Offers'}}
            />

            <Stack.Screen
                name="driveOnMap"
                component={ADriveOnMapScreen}
                options={{headerTitle:'Drive On Map'}}
            />
            <Stack.Screen
                name="availableDrivesMap"
                component={AvailableDrivesMapViewScreen}
                options={{headerTitle:'Available Drives Map'}}
            />
            <Stack.Screen
                name="availableDrivesDetail"
                component={AvailableDrivesDetailViewScreen}
                options={{headerTitle:'Available Drives Detail'}}
            />
        </Stack.Navigator>
    );
}
