import * as React from 'react';
import {View, Text, TouchableOpacity, Image, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Colors} from '../constants/colors';
import Passenger from '../assets/icons/Passenger.tsx';
import Driver from '../assets/icons/Driver.tsx';
import SegoePrint from '../assets/fonts/Segoe-Print-Font.ttf'
import Menu from '../assets/icons/Menu.tsx';
import MainHomeScreen from '../screens/home/mainHomeScreen';
import InitialHomeScreen from '../screens/home/initialHomeScreen';
import InitialStackNavigation from './initialStackNavigation';
import DriverNavigation from './driverNavigation';
import PassengerNavigation from './passengerNavigation';
import MainHomeNavigation from './mainHomeNavigation';
import ProcessingNavigation from './processingNavigation';
import FavouriteRoutesNavigation from './favouriteRoutesNavigation';
import TransactionHistoryNavigation from './transactionHistoryNavigation';
import GroupsNavigation from './groupsNavigation';

export const passengerSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="d71d8e8ac5"><path d="M 200 306 L 347.550781 306 L 347.550781 314 L 200 314 Z M 200 306 " clip-rule="nonzero"/></clipPath><clipPath id="72a150a270"><path d="M 27.410156 197 L 347.550781 197 L 347.550781 333 L 27.410156 333 Z M 27.410156 197 " clip-rule="nonzero"/></clipPath><clipPath id="5ec7fad321"><path d="M 200 241 L 347.550781 241 L 347.550781 249 L 200 249 Z M 200 241 " clip-rule="nonzero"/></clipPath></defs><path fill="#0e0e52" d="M 64.128906 332.980469 C 62.09375 332.980469 60.464844 331.347656 60.464844 329.316406 L 60.464844 289.851562 C 60.464844 287.824219 62.09375 286.179688 64.128906 286.179688 C 66.15625 286.179688 67.796875 287.824219 67.796875 289.851562 L 67.796875 329.316406 C 67.796875 331.347656 66.148438 332.980469 64.128906 332.980469 Z M 64.128906 332.980469 " fill-opacity="1" fill-rule="evenodd"/><path fill="#0e0e52" d="M 204.320312 238.464844 C 203.941406 238.464844 203.546875 238.410156 203.175781 238.28125 L 167.792969 226.644531 C 166.292969 226.144531 165.277344 224.742188 165.277344 223.148438 L 165.277344 202.191406 C 165.277344 200.160156 166.917969 198.519531 168.945312 198.519531 C 170.972656 198.519531 172.609375 200.160156 172.609375 202.191406 L 172.609375 220.488281 L 205.460938 231.296875 C 207.386719 231.933594 208.4375 234 207.808594 235.925781 C 207.285156 237.488281 205.859375 238.464844 204.320312 238.464844 Z M 204.320312 238.464844 " fill-opacity="1" fill-rule="evenodd"/><path fill="#0e0e52" d="M 160.738281 260.867188 C 159.199219 260.867188 157.660156 260.40625 156.34375 259.457031 L 110.015625 226.144531 C 108.367188 224.964844 107.996094 222.667969 109.175781 221.023438 C 110.355469 219.375 112.648438 218.996094 114.296875 220.183594 L 160.636719 253.496094 C 160.726562 253.5625 160.839844 253.550781 160.921875 253.46875 L 186.421875 227.207031 C 187.839844 225.75 190.160156 225.722656 191.605469 227.132812 C 193.0625 228.554688 193.089844 230.878906 191.679688 232.328125 L 166.171875 258.589844 C 164.707031 260.09375 162.71875 260.867188 160.738281 260.867188 Z M 160.738281 260.867188 " fill-opacity="1" fill-rule="evenodd"/><path fill="#0e0e52" d="M 120.359375 260.867188 C 118.371094 260.867188 116.398438 260.09375 114.933594 258.597656 L 89.425781 232.328125 C 88.015625 230.871094 88.042969 228.546875 89.492188 227.132812 C 90.945312 225.710938 93.269531 225.757812 94.675781 227.214844 L 120.175781 253.476562 C 120.257812 253.5625 120.359375 253.5625 120.453125 253.503906 L 166.789062 220.183594 C 168.429688 219.003906 170.722656 219.382812 171.910156 221.023438 C 173.089844 222.675781 172.710938 224.972656 171.074219 226.15625 L 124.753906 259.484375 C 123.4375 260.40625 121.898438 260.867188 120.359375 260.867188 Z M 120.359375 260.867188 " fill-opacity="1" fill-rule="evenodd"/><path fill="#0e0e52" d="M 140.542969 332.992188 C 138.515625 332.992188 136.878906 331.347656 136.878906 329.316406 L 136.878906 243.566406 C 136.878906 241.539062 138.507812 239.894531 140.542969 239.894531 C 142.570312 239.894531 144.199219 241.539062 144.199219 243.566406 L 144.199219 329.308594 C 144.203125 331.347656 142.570312 332.992188 140.542969 332.992188 Z M 140.542969 332.992188 " fill-opacity="1" fill-rule="evenodd"/><path fill="#0e0e52" d="M 92.878906 158.203125 C 94.152344 184.660156 116.398438 207 141.484375 207 C 166.972656 207 188.761719 185.15625 190.09375 158.289062 L 189.089844 111.875 C 174.296875 125.53125 160.765625 125.273438 158.996094 124.636719 C 157.789062 124.191406 156.894531 123.160156 156.648438 121.902344 C 156.398438 120.640625 156.820312 119.347656 157.761719 118.480469 C 160.910156 115.582031 162.238281 111.707031 162.773438 108.402344 C 144.882812 119.984375 126.585938 123.027344 113.839844 123.445312 C 104.414062 123.738281 96.757812 122.707031 92.132812 121.839844 Z M 141.484375 214.34375 C 127.121094 214.34375 113.359375 208.382812 102.746094 197.558594 C 92.335938 186.957031 86.230469 173.078125 85.546875 158.507812 C 85.546875 158.480469 85.546875 158.433594 85.546875 158.40625 L 84.738281 117.28125 C 84.710938 116.109375 85.242188 115 86.175781 114.289062 C 87.09375 113.582031 88.3125 113.351562 89.425781 113.683594 C 89.519531 113.710938 99.632812 116.578125 113.882812 116.089844 C 132.859375 115.425781 149.839844 109.445312 164.355469 98.308594 C 165.390625 97.515625 166.761719 97.332031 167.96875 97.820312 C 169.175781 98.316406 170.023438 99.40625 170.214844 100.699219 C 170.28125 101.125 171.320312 108.773438 168.089844 116.257812 C 173.617188 114.492188 181.546875 110.324219 189.746094 100.53125 C 190.722656 99.359375 192.335938 98.917969 193.769531 99.425781 C 195.207031 99.921875 196.183594 101.28125 196.222656 102.8125 L 197.417969 158.242188 C 197.417969 158.324219 197.417969 158.417969 197.410156 158.5 C 196.726562 173.089844 190.613281 186.949219 180.210938 197.550781 C 169.597656 208.382812 155.84375 214.34375 141.484375 214.34375 Z M 141.484375 214.34375 " fill-opacity="1" fill-rule="evenodd"/><path fill="#0e0e52" d="M 88.9375 148.136719 C 88.164062 148.136719 87.390625 147.886719 86.726562 147.390625 C 85.113281 146.171875 76.933594 139.234375 74.246094 122.753906 C 69.777344 95.328125 83.640625 68.097656 108.742188 54.996094 C 124.753906 46.644531 155.984375 37.5 186.273438 69.25 C 189.542969 69.960938 197.519531 72.5625 202.800781 81.433594 C 210.90625 95.0625 208.898438 116.734375 196.828125 145.847656 C 196.054688 147.722656 193.898438 148.609375 192.039062 147.832031 C 190.167969 147.058594 189.285156 144.898438 190.058594 143.042969 C 203.914062 109.59375 201.207031 93.125 196.5 85.195312 C 191.734375 77.1875 184.125 76.3125 184.050781 76.3125 C 183.167969 76.226562 182.347656 75.8125 181.742188 75.167969 C 155.871094 47.375 129.601562 52.402344 112.125 61.519531 C 89.832031 73.15625 77.515625 97.285156 81.476562 121.570312 C 83.769531 135.578125 90.402344 140.957031 91.148438 141.53125 C 92.769531 142.75 93.082031 145.054688 91.859375 146.679688 C 91.140625 147.640625 90.042969 148.136719 88.9375 148.136719 Z M 88.9375 148.136719 " fill-opacity="1" fill-rule="evenodd"/><g clip-path="url(#d71d8e8ac5)"><path fill="#0e0e52" d="M 343.863281 313.953125 L 203.988281 313.953125 C 201.960938 313.953125 200.320312 312.3125 200.320312 310.28125 C 200.320312 308.25 201.960938 306.609375 203.988281 306.609375 L 343.863281 306.609375 C 345.890625 306.609375 347.53125 308.25 347.53125 310.28125 C 347.539062 312.3125 345.890625 313.953125 343.863281 313.953125 Z M 343.863281 313.953125 " fill-opacity="1" fill-rule="evenodd"/></g><g clip-path="url(#72a150a270)"><path fill="#0e0e52" d="M 215.410156 325.65625 L 332.707031 325.65625 C 336.851562 325.65625 340.226562 322.277344 340.226562 318.125 L 340.226562 237.429688 C 340.226562 233.277344 336.851562 229.902344 332.707031 229.902344 L 215.179688 229.902344 C 211.042969 229.902344 207.664062 233.277344 207.664062 237.429688 L 207.664062 318.125 C 207.664062 322.269531 211.035156 325.65625 215.179688 325.65625 C 215.246094 325.644531 215.328125 325.644531 215.410156 325.65625 Z M 332.6875 333 L 38.273438 333 C 32.230469 333 27.308594 328.0625 27.308594 322.011719 L 27.308594 278.234375 C 27.308594 260.363281 38.519531 244.195312 55.222656 238.003906 C 55.257812 237.984375 55.304688 237.984375 55.351562 237.957031 L 108.496094 220.488281 L 108.496094 200.871094 C 108.496094 198.84375 110.136719 197.199219 112.160156 197.199219 C 114.1875 197.199219 115.828125 198.84375 115.828125 200.871094 L 115.828125 223.15625 C 115.828125 224.742188 114.804688 226.144531 113.304688 226.644531 L 57.699219 244.914062 C 43.898438 250.054688 34.640625 263.433594 34.640625 278.226562 L 34.640625 322 C 34.640625 324.003906 36.273438 325.65625 38.273438 325.65625 L 202.375 325.65625 C 201.078125 323.441406 200.320312 320.867188 200.320312 318.125 L 200.320312 237.429688 C 200.320312 229.226562 206.980469 222.566406 215.160156 222.566406 L 332.6875 222.566406 C 340.878906 222.566406 347.53125 229.238281 347.53125 237.429688 L 347.53125 318.132812 C 347.539062 326.328125 340.878906 333 332.6875 333 Z M 332.6875 333 " fill-opacity="1" fill-rule="evenodd"/></g><path fill="#0e0e52" d="M 308.019531 229.910156 C 305.992188 229.910156 304.351562 228.269531 304.351562 226.238281 L 304.351562 199.652344 C 304.351562 196.570312 301.839844 194.054688 298.761719 194.054688 L 249.082031 194.054688 C 245.996094 194.054688 243.488281 196.570312 243.488281 199.652344 L 243.488281 226.238281 C 243.488281 228.269531 241.847656 229.910156 239.824219 229.910156 C 237.796875 229.910156 236.15625 228.269531 236.15625 226.238281 L 236.15625 199.652344 C 236.15625 192.519531 241.960938 186.707031 249.082031 186.707031 L 298.761719 186.707031 C 305.882812 186.707031 311.6875 192.519531 311.6875 199.652344 L 311.6875 226.238281 C 311.695312 228.257812 310.046875 229.910156 308.019531 229.910156 Z M 308.019531 229.910156 " fill-opacity="1" fill-rule="evenodd"/><path fill="#0e0e52" d="M 294.042969 229.910156 C 292.019531 229.910156 290.378906 228.269531 290.378906 226.238281 L 290.378906 208.050781 L 257.480469 208.050781 L 257.480469 226.238281 C 257.480469 228.269531 255.84375 229.910156 253.816406 229.910156 C 251.789062 229.910156 250.148438 228.269531 250.148438 226.238281 L 250.148438 204.371094 C 250.148438 202.339844 251.789062 200.695312 253.816406 200.695312 L 294.054688 200.695312 C 296.082031 200.695312 297.71875 202.339844 297.71875 204.371094 L 297.71875 226.230469 C 297.710938 228.257812 296.070312 229.910156 294.042969 229.910156 Z M 294.042969 229.910156 " fill-opacity="1" fill-rule="evenodd"/><g clip-path="url(#5ec7fad321)"><path fill="#0e0e52" d="M 343.863281 248.945312 L 203.988281 248.945312 C 201.960938 248.945312 200.320312 247.304688 200.320312 245.273438 C 200.320312 243.234375 201.960938 241.601562 203.988281 241.601562 L 343.863281 241.601562 C 345.890625 241.601562 347.53125 243.234375 347.53125 245.273438 C 347.539062 247.296875 345.890625 248.945312 343.863281 248.945312 Z M 343.863281 248.945312 " fill-opacity="1" fill-rule="evenodd"/></g><path fill="#0e0e52" d="M 306.894531 313.953125 C 304.867188 313.953125 303.230469 312.3125 303.230469 310.28125 L 303.230469 245.265625 C 303.230469 243.226562 304.867188 241.59375 306.894531 241.59375 C 308.921875 241.59375 310.5625 243.226562 310.5625 245.265625 L 310.5625 310.273438 C 310.5625 312.3125 308.921875 313.953125 306.894531 313.953125 Z M 306.894531 313.953125 " fill-opacity="1" fill-rule="evenodd"/><path fill="#0e0e52" d="M 240.964844 313.953125 C 238.9375 313.953125 237.296875 312.3125 237.296875 310.28125 L 237.296875 245.265625 C 237.296875 243.226562 238.9375 241.59375 240.964844 241.59375 C 243 241.59375 244.632812 243.226562 244.632812 245.265625 L 244.632812 310.273438 C 244.640625 312.3125 243 313.953125 240.964844 313.953125 Z M 240.964844 313.953125 " fill-opacity="1" fill-rule="evenodd"/></svg>
  </svg>
`;

function favouriteRouteScreen({ navigation }) {
    return (
        <InitialStackNavigation nav={navigation}/>
    );
}

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

// function InitialHomeScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home!</Text>
//         </View>
//     );
// }

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
    return (
        // <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Welcome to SL Rideshare!"
                name="My home"
                screenOptions={({ route }) => ({
                    // title: 'My home',
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
            </Tab.Navigator>
        // </NavigationContainer>
    );
}
