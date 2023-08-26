import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import LiveWalkDetailsScreen from '../screens/passenger/liveWalk/liveWalkDetailsScreen';
import LiveWalkCreateMapScreen from '../screens/passenger/liveWalk/liveWalkCreateMapScreen';
import LiveWalkViewScreen from '../screens/passenger/liveWalk/liveWalkViewScreen';

const Stack = createStackNavigator();

export default function LiveWalkingNavigation() {
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
                name="liveWalk"
                component={LiveWalkDetailsScreen}
                options={{headerTitle:'Live Walk Details'}}
            />
            <Stack.Screen
                name="liveWalkMapCreate"
                component={LiveWalkCreateMapScreen}
                options={{headerTitle:'Live Walk Route'}}
            />
            <Stack.Screen
                name="liveWalking"
                component={LiveWalkViewScreen}
                options={{headerTitle:'Live Walking'}}
            />




        </Stack.Navigator>
    );
}
