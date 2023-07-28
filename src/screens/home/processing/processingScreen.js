import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors'
import QRCode from 'react-native-qrcode-svg';



export default function ProcessingScreen({navigation}) {

    return (
        <View style={{flex:1,backgroundColor: Colors.background}}>
                <View style={{alignItems:'center'}}>
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
                        <Text style={{fontWeight:'bold',fontSize:20,color:Colors.colorB}}>No Current Process Items</Text>

                    </View>
                </View>

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
                        <Text style={{fontWeight:'bold',fontSize:20,color:Colors.colorB}}>Current Price: 175.00LKR</Text>
                        <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorD}}>From: Kalutara</Text>
                        <View style={{alignItems:'center',width:'100%'}}>
                            <QRCode
                                value="http://awesome.link.qr"
                            />
                            <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorD}}>Start QR Code</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={()=>navigation.navigate('qrScan')}
                        style={{
                            backgroundColor:Colors.colorD,
                            alignItems:'center',
                            justifyContent:'center',
                            borderBottomRightRadius:20,
                            borderBottomLeftRadius:20

                    }}>
                        <Text style={{fontWeight:'bold',fontSize:15,color:Colors.colorA, paddingVertical:10}}>Scan</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>


</View>

    );
}
