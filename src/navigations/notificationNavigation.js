import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import NotificationsScreen from '../screens/notificationsScreen';

const Stack = createStackNavigator();

export default function NotificationNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="transactionHistoryScreen"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="notificationsScreen"
                component={NotificationsScreen}
                options={{headerTitle:'Notifications'}}
            />




        </Stack.Navigator>
    );
}
