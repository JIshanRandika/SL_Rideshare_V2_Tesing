import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterVerifyNICScreen from "../screens/initialRegistration/registerVerifyNICScreen";
import RegisterVerifyNICCardScreen from "../screens/initialRegistration/registerVerifyNICCardScreen";
import RegisterProfileDetailsScreen from "../screens/initialRegistration/registerProfileDetailsScreen";
import PersonalDetailsScreen from '../screens/initialRegistration/personalDetailsScreen';
import OTPScreen from '../screens/initialRegistration/otpScreen';
import RefereeID from '../screens/initialRegistration/refereeScreen';
import LoginScreen from '../screens/loginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '../constants/colors'

const Stack = createStackNavigator();

export default function InitialStackNavigation() {
    return (
        // <NavigationContainer>
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
                name="Login"
                component={LoginScreen}
                options={{headerShown:false}}

            />

            <Stack.Screen
                name="RegisterStep2"
                component={RegisterVerifyNICCardScreen}
                options={{
                    title: 'Step 2',
                }}
            />
            {/*<Stack.Screen*/}
            {/*    name="RegisterStep2"*/}
            {/*    component={RegisterProfileDetailsScreen}*/}
            {/*    options={{*/}
            {/*        title: 'Step 6',*/}
            {/*    }}*/}
            {/*/>*/}
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
            <Stack.Screen
                name="RegisterStep5"
                component={OTPScreen}
                options={{
                    title: 'Step 5',
                }}
            />
            <Stack.Screen
                name="RegisterStep6"
                component={RefereeID}
                options={{
                    title: 'Step 6',
                }}
            />



        </Stack.Navigator>
        // </NavigationContainer>
    );
}
