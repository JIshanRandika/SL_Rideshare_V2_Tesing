import * as React from 'react';
import {View, Text, TouchableOpacity, Image, Button, Alert, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Colors} from '../constants/colors';
import Passenger from '../assets/icons/Passenger.tsx';
import Driver from '../assets/icons/Driver.tsx';
import SegoePrint from '../assets/fonts/Segoe-Print-Font.ttf'
import Menu from '../assets/icons/Menu.tsx';
import DriverNavigation from './driverNavigation';
import PassengerNavigation from './passengerNavigation';
import MainHomeNavigation from './mainHomeNavigation';
import ProcessingNavigation from './processingNavigation';
import FavouriteRoutesNavigation from './favouriteRoutesNavigation';
import TransactionHistoryNavigation from './transactionHistoryNavigation';
import NotificationNavigation from './notificationNavigation';
import GroupsNavigation from './groupsNavigation';
import Bell from '../assets/icons/Bell';


function RideScreen() {
    return (
        <PassengerNavigation/>
    );
}

function MainHome() {
    return (
        <MainHomeNavigation/>
    );
}

function DriveScreen() {
    return (
        <DriverNavigation/>
    );
}

// @ts-ignore
function MyTabBar({ state, descriptors, navigation }) {
    const [isDriverActive, setIsDriverActive] = React.useState(false);
    const [isPassengerActive, setIsPassengerActive] = React.useState(false);
    // @ts-ignore
    // @ts-ignore
    return (
        <View style={{ flexDirection: 'row', backgroundColor:Colors.colorA
        }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                if(label=="Passenger"){
                    return (
                        <TouchableOpacity
                            disabled={false}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={() => {
                                setIsPassengerActive(true);
                                setIsDriverActive(false);
                                onPress();
                            }}
                            onLongPress={onLongPress}
                            style={{ flex: 1, borderRadius:50, backgroundColor:Colors.colorA ,width:10, margin:10}}
                        >
                            <View style={{ flexDirection: 'row', alignItems:"center",alignSelf:"center" }}>
                                <View style={{
                                    backgroundColor:isPassengerActive ? Colors.colorC:Colors.colorD,width:50,height:50,borderRadius:50,
                                    shadowColor: Colors.colorD,
                                    shadowOffset:{
                                        width: 0,
                                        height: 12,
                                    },
                                    shadowOpacity: 0.58,
                                    shadowRadius: 50.00,
                                    elevation: 24,
                                    padding:6
                                }}>
                                        <Passenger width={50} height={50} iconColor= {Colors.colorE} />
                                </View>
                                <View style={{backgroundColor:isPassengerActive ? Colors.colorC:Colors.colorD,width:80,height:5,borderRadius:50,
                                    shadowColor: Colors.colorD,
                                    shadowOffset:{
                                        width: 0,
                                        height: 12,
                                    },
                                    shadowOpacity: 0.58,
                                    shadowRadius: 50.00,
                                    elevation: 24,
                                }}>

                                </View>
                            </View>
                            {/*<Text style={{ color: isFocused ? '#673ab7' : '#222',textAlign:"center" }}>*/}
                            {/*    {label}*/}
                            {/*</Text>*/}


                        </TouchableOpacity>
                    );
                }

                if(label=="Welcome to SL Rideshare!"){
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={() => {
                                setIsPassengerActive(false);
                                setIsDriverActive(false);
                                onPress();
                            }}
                            onLongPress={onLongPress}
                            style={{ flex: 1, borderRadius:100, alignItems:'center', bottom:30 }}
                        >

                            <View style={{backgroundColor:Colors.colorD,width:70,height:70,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
                                <Image style={{width:45,height:45, borderRadius:20}} source={require('../assets/logo/logoB.png')}/>
                            </View>

                        </TouchableOpacity>
                    );
                }

                if(label=="Drive"){
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={() => {
                                setIsPassengerActive(false);
                                setIsDriverActive(true);
                                onPress();
                            }}
                            onLongPress={onLongPress}
                            style={{ flex: 1, borderRadius:50, backgroundColor:Colors.colorA ,width:10, margin:10 }}
                        >

                            {/*<Text style={{ color: isFocused ? '#673ab7' : '#222',textAlign:"center" }}>*/}
                            {/*    {label}*/}
                            {/*</Text>*/}
                            <View style={{ flexDirection: 'row', alignItems:"center" ,alignSelf:"center"}}>
                                <View style={{backgroundColor:isDriverActive ? Colors.colorC:Colors.colorD,width:80,height:5,borderRadius:50,
                                    shadowColor: Colors.colorD,
                                    shadowOffset:{
                                        width: 0,
                                        height: 12,
                                    },
                                    shadowOpacity: 0.58,
                                    shadowRadius: 50.00,
                                    elevation: 24,
                                }}>

                                </View>
                                    <View style={{
                                        backgroundColor:isDriverActive ? Colors.colorC:Colors.colorD,width:50,height:50,borderRadius:50,
                                        shadowColor: Colors.colorD,
                                        shadowOffset:{
                                            width: 0,
                                            height: 12,
                                        },
                                        shadowOpacity: 0.58,
                                        shadowRadius: 50.00,
                                        elevation: 24,
                                        padding:6
                                    }}>
                                        <Driver height={40} width={40} iconColor= {Colors.colorE}/>
                                    </View>

                            </View>


                        </TouchableOpacity>
                    );
                }

            })}
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation(props) {
    const [unreadNotifications, setUnreadNotifications] = React.useState(1);


    const handleBellIconPress = () => {
        // setShowNotificationBox(true);
    };


    return (
        // <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Welcome to SL Rideshare!"
                name="My home"
                screenOptions={({ route }) => ({
                    // title: 'My home',
                    headerRight: () => (
                        <>
                            <TouchableOpacity
                                onPress={()=>props.nav.navigate('notifications')}
                                style={{
                                    // Your styles for the bell icon container
                                    marginRight: 15
                                }}
                            >
                                <View style={{position:'relative'}}>
                                    <Bell width={30} height={30} iconColor={Colors.colorD} />
                                </View>


                                {unreadNotifications > 0 && ( // Show the unread notification count if greater than 0
                                    <View
                                        style={{
                                            // Your styles for the notification count badge
                                            position: 'absolute',
                                            top: -5,
                                            right: -5,
                                            backgroundColor: 'red',
                                            borderRadius: 10,
                                            minWidth: 20,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            paddingVertical: 2,
                                            paddingHorizontal: 5,
                                        }}
                                    >
                                        <Text style={{ color: 'white', fontSize: 12 }}>
                                            {unreadNotifications}
                                        </Text>
                                    </View>
                                )}
                                {/*<View style={{width:200, height:500, backgroundColor:'black'}}></View>*/}

                            </TouchableOpacity>


                        </>

                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => props.nav.openDrawer()}
                                          style={{
                                              // backgroundColor:'black',
                                              alignItems: 'center',
                                              borderRadius: 50,
                                              margin:10
                                          }}
                        >
                            <Menu width={30} height={30} iconColor= {Colors.colorD} />
                        </TouchableOpacity>

                    ),
                    headerStyle: {
                        backgroundColor: Colors.colorA,
                    },
                    headerTitleAlign:'center',
                    headerTitleStyle: {
                        color:Colors.colorD,
                        fontFamily:'SegoePrint',
                        fontSize:18,
                        // fontStyle:'italic'
                    },
                    tabBarStyle: {
                        height: 90,
                        paddingHorizontal: 5,
                        paddingTop: 0,
                        backgroundColor: 'rgba(34,36,40,1)',
                        position: 'absolute',
                        borderTopWidth: 0,
                    },
                })}
                tabBar={(props) => <MyTabBar {...props} />}>
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Passenger" component={RideScreen} />
                <Tab.Screen name="Welcome to SL Rideshare!" component={MainHome} />
                <Tab.Screen options={{ headerShown: false }} name="Drive" component={DriveScreen} />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="routes" component={FavouriteRoutesNavigation} />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="process" component={ProcessingNavigation} />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="transactions" component={TransactionHistoryNavigation} />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="groups" component={GroupsNavigation} />
                <Tab.Screen
                    options={{ headerShown: false }}
                    name="notifications" component={NotificationNavigation} />
            </Tab.Navigator>
        // </NavigationContainer>
    );
}
