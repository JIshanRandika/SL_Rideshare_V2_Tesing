import * as React from 'react';
import {
    Image,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StyleSheet, Button, Modal, Alert,
} from 'react-native';
import { Colors } from '../../../constants/colors';
import MapView, {Circle, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {useState} from 'react';


export default function ADriveOnMapScreen({ navigation }) {




    const [currentLocation, setCurrentLocation] = React.useState({
        latitude: 6.586622,
        longitude: 79.975817,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });


    React.useEffect(() => {
        getCurrentLocation();
    }, []);

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation((prevLocation) => ({
                    ...prevLocation,
                    latitude,
                    longitude,
                }));
            },
            (error) => console.log('Error getting location: ', error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };



    return (
        <View style={{ flex: 1, backgroundColor: Colors.background }}>
            <View style={{flex: 10}}>
                <MapView
                    // provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: currentLocation.latitude,
                        longitude: currentLocation.longitude,
                        latitudeDelta: currentLocation.latitudeDelta,
                        longitudeDelta: currentLocation.longitudeDelta,
                    }}
                >
                    <>
                        <>
                            <Marker
                                coordinate={currentLocation}

                            >

                                <Image source={require('../../../assets/start.png')} style={{height: 60, width:40 }} />
                            </Marker>
                            <Circle center={currentLocation} radius={1000} />
                        </>

                    </>



                </MapView>


            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },

});
