import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import LiveWalkCreateMapScreen from '../screens/passenger/liveWalk/liveWalkCreateMapScreen';
import LiveWalkViewScreen from '../screens/passenger/liveWalk/liveWalkViewScreen';
import HireDetailsScreen from '../screens/passenger/hire/hireDetailsScreen';
import HireCreateMapScreen from '../screens/passenger/hire/hireCreateMapScreen';
import AvailableHiringVehiclesScreen from '../screens/passenger/hire/availableHiringVehiclesScreen';
import HireVehicleOnMap from '../screens/passenger/hire/hireVehicleOnMap';

const Stack = createStackNavigator();

export default function HireFindNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="hireDetails"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="hireDetails"
                component={HireDetailsScreen}
                options={{headerTitle:'Hire Details'}}
            />
            <Stack.Screen
                name="hireCreateMapCreate"
                component={HireCreateMapScreen}
                options={{headerTitle:'Hire Route'}}
            />
            <Stack.Screen
                name="availableHiringVehicles"
                component={AvailableHiringVehiclesScreen}
                options={{headerTitle:'Available Vehicles'}}
            />

            <Stack.Screen
                name="hireVehicleOnMap"
                component={HireVehicleOnMap}
                options={{headerTitle:'Vehicle On Map'}}
            />




        </Stack.Navigator>
    );
}
