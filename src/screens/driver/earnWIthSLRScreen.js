import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../constants/colors'
import {AirbnbRating} from 'react-native-ratings';
import Passenger from '../../assets/icons/Passenger';
import Award from '../../assets/icons/Award';
import Route from '../../assets/icons/Route';
import DriveWithOwnVehicle from '../../assets/icons/DriveWithOwnVehicle';
import DriveUnderPartner from '../../assets/icons/DriveUnderPartner';
import NonDrivingPartner from '../../assets/icons/NonDrivingPartner';

export default function EarnWIthSLRScreen({navigation}) {

    return (

        <View style={{flex:1,backgroundColor: Colors.background}}>
            <View style={{alignItems:'center',flex:5}}>
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
                    elevation: 24
                }}>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Image style={{width:150,height:150, borderRadius:20,margin:20}} source={require('../../assets/my.jpg')}/>
                        </View>
                        <View style={{flexDirection:'column',paddingVertical:20}}>
                            <Text style={{fontWeight:'bold',fontSize:20,color:Colors.colorD}}>Hi Ishan!</Text>
                            <AirbnbRating
                                count={5}
                                defaultRating={3}
                                size={20}
                                isDisabled={true}
                                showRating={false}
                                ratingContainerStyle={{padding:0,marginLeft:-80}}
                            />
                            <Text style={{fontWeight:'bold',fontSize:15,color:Colors.colorD,width:200}}>Earned: 2560.00LKR</Text>
                            <View style={{flexDirection:'row', paddingTop:12}}>
                                <Award width={50} height={50} iconColor={Colors.colorB}/>
                                <Text style={{fontWeight:'bold',fontSize:25,color:Colors.colorB}}>Level 1</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>

            <View style={{alignItems:'center',flex:9,flexDirection:'column'}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:4,flexDirection:'column', alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('driveWithOwnVehicle')}
                            style={{backgroundColor:'white',width:70,height:70, borderRadius:50,
                                shadowColor: Colors.colorE,
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity:  0.17,
                                shadowRadius: 2.54,
                                elevation: 3,

                                alignItems:'center',justifyContent:'center'
                            }}>
                            <DriveWithOwnVehicle width={42} height={42} iconColor={Colors.colorA}/>

                        </TouchableOpacity>
                    </View>
                    <View style={{flex:8,flexDirection:'column'}}>
                        <Text style={{color:Colors.colorA,fontSize:15,fontWeight:'bold'}}>
                            Driver with own vehicle
                        </Text>
                        <Text style={{color:Colors.contentLetters,fontSize:15,paddingRight:20}}>
                            A driver with own vehicle drive his/her vehicle to earn.
                        </Text>
                    </View>
                </View>



                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:4,flexDirection:'column', alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('driveUnderPartner')}
                            style={{backgroundColor:'white',width:70,height:70, borderRadius:50,
                                shadowColor: Colors.colorE,
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity:  0.17,
                                shadowRadius: 2.54,
                                elevation: 3,

                                alignItems:'center',justifyContent:'center'
                            }}>
                            <DriveUnderPartner width={42} height={42} iconColor={Colors.colorA}/>

                        </TouchableOpacity>
                    </View>
                    <View style={{flex:8,flexDirection:'column'}}>
                        <View style={{flex:8,flexDirection:'column'}}>
                            <Text style={{color:Colors.colorA,fontSize:15,fontWeight:'bold'}}>
                                Driver under partner
                            </Text>
                            <Text style={{color:Colors.contentLetters,fontSize:15,paddingRight:20}}>
                                A driver under partner drives a vehicle owned by a non-driving partner.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{flex:2,flexDirection:'row'}}>
                    <View style={{flex:4,flexDirection:'column', alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('nonDrivingPartner')}
                            style={{backgroundColor:'white',width:70,height:70, borderRadius:50,
                                shadowColor: Colors.colorE,
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity:  0.17,
                                shadowRadius: 2.54,
                                elevation: 3,

                                alignItems:'center',justifyContent:'center'
                            }}>
                            <NonDrivingPartner width={42} height={42} iconColor={Colors.colorA}/>

                        </TouchableOpacity>
                    </View>
                    <View style={{flex:8,flexDirection:'column'}}>
                        <Text style={{color:Colors.colorA,fontSize:15,fontWeight:'bold'}}>
                            Non-driving partner
                        </Text>
                        <Text style={{color:Colors.contentLetters,fontSize:15,paddingRight:20}}>
                            A non-driving partner or fleet partner
                            is someone who does not drive on
                            the SL Rideshare platform but owns
                            vehicle(s) and manages at least one driver.
                        </Text>
                    </View>
                </View>
            </View>

        </View>

    );
}
