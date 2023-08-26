import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../../constants/colors'
import {AirbnbRating} from 'react-native-ratings';


export default function DriveWithOwnVehicleScreen({navigation}) {

    return (

        <View style={{flex:1,backgroundColor: Colors.background}}>
            <View style={{flex:11}}>
                <ScrollView contentContainerStyle={{alignItems:'center'}}>
                        <View style={{
                            width:"90%",backgroundColor:Colors.colorA,
                            marginVertical:20,
                            borderRadius:20,
                            shadowColor: Colors.colorE,
                            shadowOffset: {
                                width: 0,
                                height: 18,
                            },
                            shadowOpacity:  0.25,
                            shadowRadius: 20.00,
                            elevation: 24,

                            alignItems:'center',
                            justifyContent:'center',

                            paddingVertical:50,
                            paddingHorizontal:20
                        }}>
                            <Text style={{fontWeight:'bold',fontSize:20,color:Colors.colorB}}>You didn’t register a vehicle</Text>
                            <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorD}}>Click the + button to register a vehicle</Text>

                        </View>




                    <TouchableOpacity
                        onPress={()=>navigation.navigate('licenseDetailScreen')}
                        style={{
                        width:"90%",backgroundColor:Colors.colorC,
                        marginVertical:20,
                        borderRadius:20,
                        shadowColor: Colors.colorE,
                        shadowOffset: {
                            width: 0,
                            height: 18,
                        },
                        shadowOpacity:  0.25,
                        shadowRadius: 20.00,
                        elevation: 24,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontStyle:'bold',fontSize:20}}>+</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={{flex:1}}>

            </View>

        </View>

    );
}
