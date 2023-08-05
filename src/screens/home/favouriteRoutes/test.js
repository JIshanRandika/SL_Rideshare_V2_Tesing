import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Colors} from '../../../constants/colors';

const DynamicTextInputScreen = () => {
    const [locationsInputs, setLocationsInput] = useState([]);

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
    };

    const handleRemoveTextInput = (index) => {
        const updatedInputs = [...locationsInputs];
        updatedInputs.splice(index, 1);
        setLocationsInput(updatedInputs);
    };

    return (
        <View style={{ flex: 1, padding: 16 }}>
            {locationsInputs.map((textInput, index) => (
                <View key={index} style={{ marginTop: 8, flexDirection: 'row', alignItems: 'center' }}>
                    {/* Display alphabetical label in front of the input */}
                    <Text style={{ fontSize: 20, color:Colors.contentLetters }}>{textInput.label}</Text>
                    <GooglePlacesAutocomplete
                        placeholder="Search"
                        textInputProps={{
                            placeholderTextColor: Colors.contentLetters,
                        }}
                        onPress={(data, details) => handlePlaceSelected(data, details, index)}
                        fetchDetails={true}
                        query={{
                            key: "AIzaSyCT1sEzJHHoRDcScafHAebRp7tP_ZYc6p8",
                            language: "en",
                            components: "country:lk",
                        }}
                        styles={{
                            textInputContainer: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                color: Colors.contentLetters
                            },
                            textInput: {
                                marginLeft: 0,
                                marginRight: 0,
                                height: 38,
                                color: Colors.contentLetters,
                                fontSize: 16,
                            },
                            description: { textColor: Colors.contentLetters, color: Colors.contentLetters },
                        }}
                    />
                    {index > 0 && <Button title="Remove" onPress={() => handleRemoveTextInput(index)} />}
                </View>
            ))}

            {locationsInputs.length === 0 ? (
                <Button title="Add Origin" onPress={handleAddTextInput} />
            ) : (
                <Button title="Add Stop" onPress={handleAddTextInput} />
            )}

            {locationsInputs.map((locationsInput, index) => (
                <View style={{ marginTop: 8 }} key={index}>
                    <Text style={{ color: Colors.contentLetters }}>Label: {locationsInput.label}</Text>
                    <Text style={{ color: Colors.contentLetters }}>Description: {locationsInput.description}</Text>
                    {locationsInput.latitude !== null && (
                        <Text style={{ color: Colors.contentLetters }}>Latitude: {locationsInput.latitude}</Text>
                    )}
                    {locationsInput.longitude !== null && (
                        <Text style={{ color: Colors.contentLetters }}>Longitude: {locationsInput.longitude}</Text>
                    )}
                </View>
            ))}
        </View>
    );
};

export default DynamicTextInputScreen;
