import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function RideScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Ride!</Text>
        </View>
    );
}

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function DriveScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Drive!</Text>
        </View>
    );
}

// @ts-ignore
function MyTabBar({ state, descriptors, navigation }) {
    // @ts-ignore
    // @ts-ignore
    return (
        <View style={{ flexDirection: 'row', backgroundColor:'white' }}>
            {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
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
                if(label=="Ride"){
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, borderRadius:50, backgroundColor:'red' ,width:10, margin:10}}
                        >
                            <View style={{ flexDirection: 'row', alignItems:"center",alignSelf:"center" }}>
                                <View style={{backgroundColor:'blue',width:50,height:50,borderRadius:50}}>

                                </View>
                                <View style={{backgroundColor:'blue',width:80,height:5,borderRadius:50}}>

                                </View>
                            </View>
                            {/*<Text style={{ color: isFocused ? '#673ab7' : '#222',textAlign:"center" }}>*/}
                            {/*    {label}*/}
                            {/*</Text>*/}


                        </TouchableOpacity>
                    );
                }

                if(label=="Home"){
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, borderRadius:100 }}
                        >

                            <Text style={{ color: isFocused ? '#673ab7' : '#222',textAlign:"center" }}>
                                {label}
                            </Text>


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
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, borderRadius:50, backgroundColor:'red' ,width:10, margin:10 }}
                        >

                            {/*<Text style={{ color: isFocused ? '#673ab7' : '#222',textAlign:"center" }}>*/}
                            {/*    {label}*/}
                            {/*</Text>*/}
                            <View style={{ flexDirection: 'row', alignItems:"center" ,alignSelf:"center"}}>
                                <View style={{backgroundColor:'blue',width:80,height:5,borderRadius:50}}>

                                </View>
                                <View style={{backgroundColor:'blue',width:50,height:50,borderRadius:50}}>

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

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
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
                <Tab.Screen name="Ride" component={RideScreen} />
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Drive" component={DriveScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
