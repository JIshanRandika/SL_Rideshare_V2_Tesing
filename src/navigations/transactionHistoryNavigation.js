import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import TransactionHistoryScreen from '../screens/home/transactionHistory/transactionHistoryScreen';

const Stack = createStackNavigator();

export default function TransactionHistoryNavigation() {
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
                name="transactionHistoryScreen"
                component={TransactionHistoryScreen}
                options={{headerTitle:'Transaction History'}}
            />




        </Stack.Navigator>
    );
}
