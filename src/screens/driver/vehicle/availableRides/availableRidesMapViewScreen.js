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
import { Colors } from '../../../../constants/colors';
import MapView, {Circle, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {useState} from 'react';
import {FormItem} from 'react-native-form-component';


export default function AvailableRidesMapViewScreen({ navigation }) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const handleStart = () => {
        setModalVisible(!modalVisible);
        navigation.navigate('rideRequest');

    };



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

                                    <Marker
                                        coordinate={currentLocation}
                                        onPress={() => {
                                            setModalVisible(true);
                                        }}
                                    >
                                            <Image source={require('../../../../assets/start.png')} style={{height: 60, width:40 }} />
                                    </Marker>
                                    <Circle center={currentLocation} radius={1000} />

                        </>



                </MapView>


            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{paddingVertical:20, paddingHorizontal:20}}>
                                <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorA}}>From: Kalutara</Text>
                                <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorA}}>From: Kalutara</Text>
                                <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorA}}>From: Kalutara</Text>
                                <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorA}}>From: Kalutara</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>

                                <View style={{flexDirection:'column', flex:6,paddingRight:10}}>
                                    <TouchableOpacity onPress={handleStart} style={{backgroundColor:Colors.colorA,padding:10,alignItems:'center',borderRadius:50}}>
                                        <Text style={{fontWeight:'bold',color:Colors.colorD}}>Close</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{flexDirection:'column', flex:6, paddingLeft:10}}>
                                    <TouchableOpacity onPress={handleStart} style={{backgroundColor:Colors.colorA,padding:10,alignItems:'center',borderRadius:50}}>
                                        <Text style={{fontWeight:'bold',color:Colors.colorD}}>Send Request</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>


                        </View>
                    </View>
                    <View style={styles.blurredBackground} />
                </Modal>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    centeredView: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0
    },
    modalView: {
        margin: 20,
        width:'100%',
        backgroundColor: 'white',
        // borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    blurredBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
        zIndex: -1,
    },

});
