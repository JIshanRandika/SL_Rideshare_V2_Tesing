import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import MainHomeScreen from '../screens/home/mainHomeScreen';

const Stack = createStackNavigator();


export default function MainHomeNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="mainHome"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="mainHome"
                component={MainHomeScreen}
                options={{headerShown:false}}
            />



        </Stack.Navigator>
    );
}
