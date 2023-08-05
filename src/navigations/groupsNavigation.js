import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import GroupsScreen from '../screens/home/groups/groupsScreen';
import GroupProfileScreen from '../screens/home/groups/groupProfileScreen';

const Stack = createStackNavigator();

export default function GroupsNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="groupsScreen"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="groupsScreen"
                component={GroupsScreen}
                options={{headerTitle:'Groups'}}
            />
            <Stack.Screen
                name="groupProfileScreen"
                component={GroupProfileScreen}
                options={{headerTitle:'Group Profile'}}
            />




        </Stack.Navigator>
    );
}
