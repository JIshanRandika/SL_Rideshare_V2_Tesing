import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/colors'
import QRCode from 'react-native-qrcode-svg';



export default function RideRequestScreen({navigation}) {

    return (
        <View style={{flex:1,backgroundColor: Colors.background}}>

            <ScrollView  contentContainerStyle={{alignItems:'center'}}>
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




                }}>
                    <View style={{paddingVertical:20, paddingHorizontal:20}}>
                        <Text style={{fontWeight:'bold',fontSize:20,color:Colors.colorB}}>Status: Pending</Text>
                        <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorD}}>From: Kalutara</Text>
                        <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorD}}>From: Kalutara</Text>
                        <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorB}}>Cancel</Text>

                    </View>


                </View>




                {/*====================*/}



            </ScrollView>


        </View>

    );
}
