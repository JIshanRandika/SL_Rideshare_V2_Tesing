import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Button, TextInput} from 'react-native';
import {Colors} from '../constants/colors'
import {FormItem} from 'react-native-form-component';


export default function PersonalDetailsScreen({navigation}) {
    const [occupation, setOccupation] = React.useState('');
    const [shortDescription, setShortDescription] = React.useState('');
    const [diseases, setDiseases] = React.useState('');

    return (
        <View style={{flex:1,backgroundColor: Colors.background}}>


            <SafeAreaView style={{ flex: 1, padding: 24 }}>
                <ScrollView>

                    <View style={{ padding: 24 }}>

                        <FormItem
                            style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                            labelStyle={{fontWeight:3,color:Colors.colorE}}
                            textInputStyle={{ color: Colors.colorE }}
                            value={occupation}
                            label="Occupation"
                            onChangeText={(occupation) => setOccupation(occupation)}
                            floatingLabel
                            isRequired
                        />

                        <View>
                            <Text style={{ fontWeight: 3, color: Colors.colorE }}>Who are you? (short description)</Text>
                            <TextInput
                                style={{
                                    padding:10,
                                    borderRadius: 15,
                                    borderColor: Colors.colorD,
                                    borderWidth: 2,
                                    color: Colors.colorE,
                                    height: 200, // Adjust the height as needed
                                    textAlignVertical: 'top', // To align the text at the top of the text area
                                }}
                                multiline
                                value={shortDescription}
                                onChangeText={(shortDescription) => setShortDescription(shortDescription)}
                            />
                        </View>

                        <View style={{marginVertical:25}}>
                            <Text style={{ fontWeight: 3, color: Colors.colorE }}>What are the diseases and disability you had in
                                previous 3 months?</Text>
                            <TextInput
                                style={{
                                    padding:10,
                                    borderRadius: 15,
                                    borderColor: Colors.colorD,
                                    borderWidth: 2,
                                    color: Colors.colorE,
                                    height: 200, // Adjust the height as needed
                                    textAlignVertical: 'top', // To align the text at the top of the text area
                                }}
                                multiline
                                value={shortDescription}
                                onChangeText={(shortDescription) => setShortDescription(shortDescription)}
                            />
                        </View>



                        <TouchableOpacity onPress={()=>navigation.navigate('RegisterStep2')} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50}}>
                            <Text style={{fontWeight:'bold',color:Colors.colorD}}>Submit</Text>
                        </TouchableOpacity>


                    </View>


                </ScrollView>


            </SafeAreaView>
        </View>
    );
}
