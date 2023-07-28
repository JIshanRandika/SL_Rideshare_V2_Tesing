import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import ProcessingScreen from '../screens/home/processing/processingScreen';
import QrScannerScreen from '../screens/home/processing/qrScannerScreen';

const Stack = createStackNavigator();

export default function ProcessingNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="processing"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="qrScan"
                component={QrScannerScreen}
                options={{headerTitle:'QR Scan'}}
            />
            <Stack.Screen
                name="processing"
                component={ProcessingScreen}
                options={{headerTitle:'Processing'}}
            />

        </Stack.Navigator>
    );
}
