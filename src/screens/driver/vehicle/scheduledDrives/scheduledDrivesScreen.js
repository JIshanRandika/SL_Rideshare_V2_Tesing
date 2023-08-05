import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import {Colors} from '../../../../constants/colors'
import QRCode from 'react-native-qrcode-svg';



export default function ScheduledDrivesScreen({navigation}) {

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
                        <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorD}}>From: Kalutara</Text>
                        <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorD}}>From: Kalutara</Text>
                        <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorD}}>From: Kalutara</Text>
                        <Text style={{fontWeight:'bold',fontSize:12,color:Colors.colorD}}>From: Kalutara</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column',flex:6}}>
                            <TouchableOpacity
                                // onPress={()=>navigation.navigate('qrScan')}
                                style={{
                                    backgroundColor:Colors.colorD,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    borderBottomLeftRadius:20,
                                    borderRightWidth:0.3

                                }}>
                                <Text style={{fontWeight:'bold',fontSize:15,color:Colors.colorA, paddingVertical:10}}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'column',flex:6}}>
                            <TouchableOpacity

                                style={{
                                    backgroundColor:Colors.colorD,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    borderBottomRightRadius:20,
                                    borderLeftWidth:0.3
                                }}>
                                <Text style={{fontWeight:'bold',fontSize:15,color:Colors.colorA, paddingVertical:10}}>View</Text>
                            </TouchableOpacity>
                        </View>


                    </View>


                </View>

                <TouchableOpacity
                    onPress={()=>navigation.navigate('driveDetails')}
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

    );
}
