import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './tabNavigation';
import {Colors} from '../constants/colors';

function HomeScreen({ navigation }) {
    return (
        <TabNavigation nav={navigation}/>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.openDrawer()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerShown:false,
                    drawerStyle: {
                        backgroundColor: Colors.colorD,
                        borderBottomRightRadius:20,
                        borderTopRightRadius:20,
                        opacity:1
                    },

                }}


                initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen}
                               options={{
                                   drawerLabel: 'Home',
                                   drawerItemStyle:{
                                       color:Colors.colorD,
                                       backgroundColor:Colors.colorA,
                                       padding:5,
                                       borderRadius:10,
                                   },
                                   drawerLabelStyle:{
                                       color:Colors.colorD,
                                   }

                               }}
                />
                <Drawer.Screen name="Notifications" component={NotificationsScreen}
                               options={{
                                   drawerLabel: 'Logout',
                                   drawerItemStyle:{
                                       color:Colors.colorD,
                                       backgroundColor:Colors.colorB,
                                       padding:5,
                                       borderRadius:10,
                                   },
                                   drawerLabelStyle:{
                                       color:Colors.colorD,
                                   }
                               }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
