import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Button} from 'react-native';
import {Colors} from '../constants/colors'
import {FormItem} from 'react-native-form-component';
import DatePicker from 'react-native-date-picker';
import Passenger from '../assets/icons/Passenger';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

export default function RegisterProfileDetailsScreen({navigation}) {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [countryCode, setCountryCode] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [postalCode, setPostalCode] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const [imageURI, setImageURI] = React.useState(null);

    // const pickImage = () => {
    //     ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else {
    //             setImageURI(response.uri);
    //         }
    //     });
    // };
    //
    //
    // const uploadImage = () => {
    //     const formData = new FormData();
    //     formData.append('profilePicture', {
    //         uri: imageURI,
    //         type: 'image/jpeg',
    //         name: 'profile.jpg',
    //     });
    //
    //     axios
    //         .post('https://your-api-endpoint.com/upload', formData)
    //         .then((response) => {
    //             console.log('Image uploaded successfully');
    //         })
    //         .catch((error) => {
    //             console.log('Image upload error: ', error);
    //         });
    // };

    return (
        <View style={{flex:1,backgroundColor: Colors.background}}>


            <SafeAreaView style={{ flex: 1, padding: 24 }}>
                <ScrollView>
                    <View>
                        <View style={{ padding: 24, alignItems:'center'}}>
                            <Passenger width={80}/>
                            {imageURI && <Image style={{ width: 200, height: 200 }} />}
                            {imageURI && <Button title="Upload Image"  />}
                        </View>

                    </View>


                    <View style={{ padding: 24 }}>

                        <FormItem
                            style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                            labelStyle={{fontWeight:3,color:Colors.colorE}}
                            textInputStyle={{ color: Colors.colorE }}
                            value={username}
                            label="User Name"
                            onChangeText={(username) => setUsername(username)}
                            floatingLabel
                            isRequired
                        />
                        <FormItem
                            style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                            labelStyle={{fontWeight:3,color:Colors.colorE}}
                            textInputStyle={{ color: Colors.colorE }}
                            value={email}
                            label="Email"
                            onChangeText={(email) => setEmail(email)}
                            floatingLabel
                            isRequired
                        />
                        <FormItem
                            style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                            labelStyle={{fontWeight:3,color:Colors.colorE}}
                            textInputStyle={{ color: Colors.colorE }}
                            value={phoneNumber}
                            label="Phone Number"
                            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                            floatingLabel
                            isRequired
                        />
                        <FormItem
                            style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                            labelStyle={{fontWeight:3,color:Colors.colorE}}
                            textInputStyle={{ color: Colors.colorE }}
                            value={address}
                            label="Address"
                            onChangeText={(address) => setAddress(address)}
                            floatingLabel
                            isRequired
                        />
                        <FormItem
                            style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                            labelStyle={{fontWeight:3,color:Colors.colorE}}
                            textInputStyle={{ color: Colors.colorE }}
                            value={postalCode}
                            label="Postal Code"
                            onChangeText={(postalCode) => setPostalCode(postalCode)}
                            floatingLabel
                            isRequired
                        />
                        <FormItem
                            style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                            labelStyle={{fontWeight:3,color:Colors.colorE}}
                            textInputStyle={{ color: Colors.colorE }}
                            value={password}
                            label="Password"
                            onChangeText={(password) => setPassword(password)}
                            floatingLabel
                            isRequired
                            secureTextEntry
                        />
                        <FormItem
                            style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                            labelStyle={{fontWeight:3,color:Colors.colorE}}
                            textInputStyle={{ color: Colors.colorE }}
                            value={confirmPassword}
                            label="Confirm Password"
                            onChangeText={(password) => setConfirmPassword(password)}
                            floatingLabel
                            isRequired
                            secureTextEntry
                        />


                        <TouchableOpacity onPress={()=>navigation.navigate('RegisterStep4')} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50}}>
                            <Text style={{fontWeight:'bold',color:Colors.colorD}}>Next</Text>
                        </TouchableOpacity>


                    </View>


                </ScrollView>


            </SafeAreaView>
        </View>
    );
}
