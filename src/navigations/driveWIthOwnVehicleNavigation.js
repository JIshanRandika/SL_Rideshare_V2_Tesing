import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import DriveWithOwnVehicleScreen from '../screens/driver/driveWithOwnVehicle/driveWithOwnVehicleScreen';
import LicenseDetailScreen from '../screens/driver/driveWithOwnVehicle/licenseDetailScreen';
import LicenseFrontScreen from '../screens/driver/driveWithOwnVehicle/licenseFrontScreen';
import LicenseBackScreen from '../screens/driver/driveWithOwnVehicle/licenseBackScreen';
import VehicleDetailScreen from '../screens/driver/driveWithOwnVehicle/vehicleDetailScreen';
import VehicleRegFrontScreen from '../screens/driver/driveWithOwnVehicle/vehicleRegFrontScreen';
import VehicleInsuranceFrontScreen from '../screens/driver/driveWithOwnVehicle/vehicleInsuranceFrontScreen';
import VehicleInsuranceBackScreen from '../screens/driver/driveWithOwnVehicle/vehicleInsuranceBackScreen';
import RevenueLicenseFrontScreen from '../screens/driver/driveWithOwnVehicle/revenueLicenseFrontScreen';
import NumberPlateScreen from '../screens/driver/driveWithOwnVehicle/numberPlateScreen';

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
                options={{headerTitle:'Drive With Own Vehicle'}}
            />
            <Stack.Screen
                name="licenseDetailScreen"
                component={LicenseDetailScreen}
                options={{headerTitle:'License Details'}}
            />

            <Stack.Screen
                name="licenseFrontScreen"
                component={LicenseFrontScreen}
                options={{headerTitle:'License Front'}}
            />

            <Stack.Screen
                name="licenseBackScreen"
                component={LicenseBackScreen}
                options={{headerTitle:'License Back'}}
            />

            <Stack.Screen
                name="vehicleDetailScreen"
                component={VehicleDetailScreen}
                options={{headerTitle:'Vehicle Details'}}
            />

            <Stack.Screen
                name="vehicleRegFrontScreen"
                component={VehicleRegFrontScreen}
                options={{headerTitle:'Vehicle Registration Front'}}
            />

            <Stack.Screen
                name="vehicleInsuranceFrontScreen"
                component={VehicleInsuranceFrontScreen}
                options={{headerTitle:'Vehicle Insurance Front'}}
            />

            <Stack.Screen
                name="vehicleInsuranceBackScreen"
                component={VehicleInsuranceBackScreen}
                options={{headerTitle:'Vehicle Insurance Back'}}
            />

            <Stack.Screen
                name="revenueLicenseFrontScreen"
                component={RevenueLicenseFrontScreen}
                options={{headerTitle:'Revenue License'}}
            />

            <Stack.Screen
                name="numberPlateScreen"
                component={NumberPlateScreen}
                options={{headerTitle:'Number Plate'}}
            />


        </Stack.Navigator>
    );
}
