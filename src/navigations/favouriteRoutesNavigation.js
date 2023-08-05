import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Colors} from '../constants/colors'
import FavouriteRoutesScreen from '../screens/home/favouriteRoutes/favouriteRoutesScreen';
import FavouriteRouteCreateMapScreen from '../screens/home/favouriteRoutes/favouriteRouteCreateMapScreen';
import FavouriteRouteMapScreen from '../screens/home/favouriteRoutes/favouriteRouteMapScreen';

const Stack = createStackNavigator();

export default function FavouriteRoutesNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="favouriteRouteScreen"
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: Colors.colorD,
                headerStyle: { backgroundColor: Colors.colorA },
                headerTitleAlign:'center',
            }}
        >
            <Stack.Screen
                name="favouriteRouteScreen"
                component={FavouriteRoutesScreen}
                options={{headerTitle:'Favourite Routes'}}
            />
            <Stack.Screen
                name="favouriteRouteCreateMapScreen"
                component={FavouriteRouteCreateMapScreen}
                options={{headerTitle:'Select Route'}}
            />
            <Stack.Screen
                name="favouriteRouteMapScreen"
                component={FavouriteRouteMapScreen}
                options={{headerTitle:'Route'}}
            />



        </Stack.Navigator>
    );
}
