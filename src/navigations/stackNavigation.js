import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterVerifyNICScreen from "../screens/registerVerifyNICScreen";
import RegisterVerifyNICCardScreen from "../screens/registerVerifyNICCardScreen";
import RegisterProfileDetailsScreen from "../screens/registerProfileDetailsScreen";
import PersonalDetailsScreen from '../screens/personalDetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '../constants/colors'

const Stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator
            initialRouteName="RegisterStep1"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="RegisterStep1"
                component={RegisterVerifyNICScreen}
                options={{headerShown:false}}

            />
            <Stack.Screen
                name="RegisterStep2"
                component={RegisterVerifyNICCardScreen}
                options={{
                    title: 'Step 2',
                }}
            />
            <Stack.Screen
                name="RegisterStep3"
                component={RegisterProfileDetailsScreen}
                options={{
                    title: 'Step 3',
                }}
            />
            <Stack.Screen
                name="RegisterStep4"
                component={PersonalDetailsScreen}
                options={{
                    title: 'Step 4',
                }}
            />



        </Stack.Navigator>
        </NavigationContainer>
    );
}
