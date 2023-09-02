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
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import axios from 'axios';
import {FormItem} from 'react-native-form-component';

export default function HireVehicleOnMap({ navigation }) {

    const [locationsInputs, setLocationsInput] = useState([]);
    const [currentLocationDescription, setCurrentLocationDescription] = useState('Choose on map');

    const [modalVisible, setModalVisible] = React.useState(false);
    const handleStart = () => {
        setModalVisible(!modalVisible);
        navigation.navigate('driveRequest');
    };
    const [routeName, setRouteName] = React.useState('');

    const handleAddTextInput = () => {
        const newLabel = String.fromCharCode(65 + locationsInputs.length); // Generate the alphabetical label
        setLocationsInput([...locationsInputs, { label: newLabel, description: '', latitude: null, longitude: null }]);
    };

    const handlePlaceSelected = (data, details, index) => {
        const updatedInputs = [...locationsInputs];
        updatedInputs[index] = {
            ...updatedInputs[index],
            description: data.description,
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
        };
        setLocationsInput(updatedInputs);

        setCurrentLocationDescription(data.description)

        setCurrentLocation({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: currentLocation.latitudeDelta,
            longitudeDelta: currentLocation.longitudeDelta,
        });
    };

    const handleRemoveTextInput = (index) => {
        const updatedInputs = [...locationsInputs];
        updatedInputs.splice(index, 1);
        setLocationsInput(updatedInputs);
    };





    const [tempLocation, setTempLocation] = useState(null);

    const handleDragEnd = async (e, index) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;

        try {
            // Make a reverse geocoding request to get the location description
            const response = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCT1sEzJHHoRDcScafHAebRp7tP_ZYc6p8`
            );

            if (response.data && response.data.results.length > 0) {
                const locationDescription = response.data.results[0].formatted_address;
                setCurrentLocationDescription(locationDescription)
                // Update the draggable marker with the new location description

                const updatedInputs = [...locationsInputs];
                updatedInputs[index] = {
                    ...updatedInputs[index],
                    description: locationDescription,
                    latitude: latitude,
                    longitude: longitude,
                };

                setLocationsInput(updatedInputs);

            }
        } catch (error) {
            console.error('Error fetching location description:', error);
        }
    };







    // =====================================



    const [currentLocation, setCurrentLocation] = React.useState({
        latitude: 6.586622,
        longitude: 79.975817,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [markerCoordinates, setMarkerCoordinates] = useState({
        latitude: 6.586622,
        longitude: 79.975817,
    });
    const handleMoveMarker = () => {
        // Update the marker's coordinates to the new location
        setMarkerCoordinates({
            latitude: 38.9072,
            longitude: -77.0369,
        });
    };







    const yourLocation = {
        description: 'Your Location',
        geometry: { location: { lat: currentLocation.latitude, lng: currentLocation.longitude } },
    };

    const chooseOnMap = {
        description: 'Choose on map',
        geometry: { location: { lat: currentLocation.latitude, lng: currentLocation.longitude } },
    };


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
                    {locationsInputs.map((locationsInput, index) => (
                        <>
                            {locationsInput.latitude !== null && (
                                <>
                                    <Marker
                                        key={index}
                                        // coordinate={{
                                        //     latitude: locationsInput.latitude,
                                        //     longitude: locationsInput.longitude,
                                        // }}
                                        // draggable
                                        coordinate={locationsInput}
                                        onDragEnd={(e) => handleDragEnd(e, index)}
                                        title={locationsInput.label}
                                        description={locationsInput.description}
                                    >
                                        {/*<Image source={require('../../../assets/start.png')} style={{height: 60, width:40 }} />*/}
                                        {index === 0 ? (
                                            <Image source={require('../../../assets/start.png')} style={{height: 60, width:40 }} />
                                        ) : (
                                            <Image source={require('../../../assets/stop.png')} style={{height: 60, width:40 }} />
                                        )}
                                    </Marker>
                                    <Circle center={locationsInput} radius={1000} />
                                </>

                            )}
                        </>



                    ))}
                    {locationsInputs.length > 1 && (
                        <>
                            {locationsInputs.slice(1).map((locationsInput, index) => (
                                locationsInput.latitude !== null && (
                                    <MapViewDirections
                                        key={index}
                                        origin={{
                                            latitude: locationsInputs[index].latitude,
                                            longitude: locationsInputs[index].longitude,
                                        }}
                                        destination={{
                                            latitude: locationsInput.latitude,
                                            longitude: locationsInput.longitude,
                                        }}
                                        apikey={'AIzaSyCT1sEzJHHoRDcScafHAebRp7tP_ZYc6p8'}
                                        strokeWidth={3}
                                        strokeColor="blue"
                                    />
                                )
                            ))}
                        </>
                    )}

                </MapView>
                {/* Button positioned at the bottom right */}
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        backgroundColor: Colors.colorA,
                        padding: 12,
                        borderRadius: 10,
                        shadowColor: Colors.colorE,
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity:  0.17,
                        shadowRadius: 3.05,
                        elevation: 4
                    }}
                >
                    <Text style={{ color: Colors.colorD, fontWeight: 'bold' }}>Request</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{fontWeight:'bold',color:Colors.colorE,marginVertical:10}}>Are you sure?</Text>

                            <TouchableOpacity onPress={handleStart} style={{backgroundColor:Colors.colorA,padding:10,alignItems:'center',borderRadius:50,width:240}}>
                                <Text style={{fontWeight:'bold',color:Colors.colorD}}>Yes</Text>
                            </TouchableOpacity>
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
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
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
