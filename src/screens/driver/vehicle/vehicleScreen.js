import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../../constants/colors'
import {AirbnbRating} from 'react-native-ratings';
import Award from '../../../assets/icons/Award';
import Route from '../../../assets/icons/Route';
import LiveWalking from '../../../assets/icons/LiveWalking';
import Schedule from '../../../assets/icons/Schedule';
import Hire from '../../../assets/icons/Hire';
import Requests from '../../../assets/icons/Requests';
import Map from '../../../assets/icons/Map';
import Driver from '../../../assets/icons/Driver';
import Offers from '../../../assets/icons/Offers';
import Details from '../../../assets/icons/Details';
import Statistics from '../../../assets/icons/Statistics';
import Passenger from '../../../assets/icons/Passenger';
import VehiclePro from '../../../assets/icons/VehiclePro';

export default function VehicleScreen({navigation}) {

    return (

        <View style={{flex:1,backgroundColor: Colors.background}}>
            <View style={{alignItems:'center',flex:3}}>
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
                            <Image style={{width:150,height:100, borderRadius:20,margin:20}} source={require('../../../assets/car.jpeg')}/>
                        </View>
                        <View style={{flexDirection:'column',paddingVertical:20}}>
                            <Text style={{fontWeight:'bold',fontSize:20,color:Colors.colorD}}>CAT 2236</Text>
                            <Text style={{fontWeight:'bold',fontSize:15,color:Colors.colorD,width:200}}>Earning: 2560.00LKR</Text>
                            <Text style={{fontWeight:'bold',fontSize:15,color:Colors.colorD,width:200}}>Trips: 20</Text>
                            <AirbnbRating
                                count={5}
                                defaultRating={3}
                                size={20}
                                isDisabled={true}
                                showRating={false}
                                ratingContainerStyle={{padding:0,marginLeft:-80}}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{alignItems:'center',flex:12,marginTop:10,paddingHorizontal:5}}>

                <View style={{flexDirection:'row', flex:3,width:"100%"}}>
                    <View style={{flexDirection:'column', flex:6,width:20,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('liveDrive')}

                            style={{flexDirection:'row',backgroundColor:'white',width:'80%',height:'70%', borderRadius:10, shadowColor: Colors.colorE, shadowOffset: {width: 0, height: 2,}, shadowOpacity:  0.17, shadowRadius: 2.54, elevation: 3, alignItems:'center',justifyContent:'center'
                            }}>
                            <View style={{flex:5, alignItems:'center',justifyContent:'center'}}>
                                <LiveWalking width={42} height={42} iconColor={Colors.colorA}/>
                            </View>
                            <View style={{flex:7}}>
                                <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Live Drive</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'column', flex:6,width:20,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('scheduledDrives')}
                            style={{flexDirection:'row',backgroundColor:'white',width:'80%',height:'70%', borderRadius:10, shadowColor: Colors.colorE, shadowOffset: {width: 0, height: 2,}, shadowOpacity:  0.17, shadowRadius: 2.54, elevation: 3, alignItems:'center',justifyContent:'center'
                            }}>
                            <View style={{flex:5, alignItems:'center',justifyContent:'center'}}>
                                <Schedule width={42} height={42} iconColor={Colors.colorA}/>
                            </View>
                            <View style={{flex:7}}>
                                <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Schedule</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>


                {/*====*/}

                <View style={{flexDirection:'row', flex:3,width:"100%"}}>
                    <View style={{flexDirection:'column', flex:6,width:20,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity

                            style={{flexDirection:'row',backgroundColor:'white',width:'80%',height:'70%', borderRadius:10, shadowColor: Colors.colorE, shadowOffset: {width: 0, height: 2,}, shadowOpacity:  0.17, shadowRadius: 2.54, elevation: 3, alignItems:'center',justifyContent:'center'
                            }}>
                            <View style={{flex:5, alignItems:'center',justifyContent:'center'}}>
                                <Hire width={42} height={42} iconColor={Colors.colorA}/>
                            </View>
                            <View style={{flex:7}}>
                                <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Hire</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'column', flex:6,width:20,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('rideRequest')}
                            style={{flexDirection:'row',backgroundColor:'white',width:'80%',height:'70%', borderRadius:10, shadowColor: Colors.colorE, shadowOffset: {width: 0, height: 2,}, shadowOpacity:  0.17, shadowRadius: 2.54, elevation: 3, alignItems:'center',justifyContent:'center'
                            }}>
                            <View style={{flex:5, alignItems:'center',justifyContent:'center'}}>
                                <Requests width={42} height={42} iconColor={Colors.colorA}/>
                            </View>
                            <View style={{flex:7}}>
                                <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Requests</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>

                {/*====*/}

                <View style={{flexDirection:'row', flex:3,backgroundColor:'white',width:'90%',height:'70%', borderRadius:10, shadowColor: Colors.colorE, shadowOffset: {width: 0, height: 2,}, shadowOpacity:  0.17, shadowRadius: 2.54, elevation: 3, alignItems:'center',justifyContent:'center'
                }}>
                    <View style={{flexDirection:'column', flex:5,width:20,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('availableRidesMap')}
                            style={{flexDirection:'row',backgroundColor:'white',width:'80%',height:'70%', borderRadius:10, shadowColor: Colors.colorE, shadowOffset: {width: 0, height: 2,}, shadowOpacity:  0.17, shadowRadius: 2.54, elevation: 3, alignItems:'center',justifyContent:'center'
                            }}>
                            <View style={{flex:5, alignItems:'center',justifyContent:'center'}}>
                                <Map width={30} height={30} iconColor={Colors.colorA}/>
                            </View>
                            <View style={{flex:7}}>
                                <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:10,marginTop:3}}>Map view</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'column', flex:2,width:20,alignItems:'center',justifyContent:'center'}}>
                        <Passenger width={40} height={40} iconColor={Colors.colorA}/>
                        <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Available</Text>
                        <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Rides</Text>
                    </View>
                    <View style={{flexDirection:'column', flex:5,width:20,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('availableRidesDetail')}
                            style={{flexDirection:'row',backgroundColor:'white',width:'80%',height:'70%', borderRadius:10, shadowColor: Colors.colorE, shadowOffset: {width: 0, height: 2,}, shadowOpacity:  0.17, shadowRadius: 2.54, elevation: 3, alignItems:'center',justifyContent:'center'
                            }}>
                            <View style={{flex:5, alignItems:'center',justifyContent:'center'}}>
                                <Details width={30} height={30} iconColor={Colors.colorA}/>
                            </View>
                            <View style={{flex:7}}>
                                <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:10,marginTop:3}}>Detail view</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>

                {/*=====*/}

                <View style={{flexDirection:'row', flex:3,width:"100%"}}>
                    <View style={{flexDirection:'column', flex:6,width:20,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('vehicleProfile')}
                            style={{flexDirection:'row',backgroundColor:'white',width:'80%',height:'70%', borderRadius:10, shadowColor: Colors.colorE, shadowOffset: {width: 0, height: 2,}, shadowOpacity:  0.17, shadowRadius: 2.54, elevation: 3, alignItems:'center',justifyContent:'center'
                            }}>
                            <View style={{flex:5, alignItems:'center',justifyContent:'center'}}>
                                <VehiclePro width={42} height={42} iconColor={Colors.colorA}/>
                            </View>
                            <View style={{flex:7}}>
                                <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Profile</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'column', flex:6,width:20,alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity

                            style={{flexDirection:'row',backgroundColor:'white',width:'80%',height:'70%', borderRadius:10, shadowColor: Colors.colorE, shadowOffset: {width: 0, height: 2,}, shadowOpacity:  0.17, shadowRadius: 2.54, elevation: 3, alignItems:'center',justifyContent:'center'
                            }}>
                            <View style={{flex:5, alignItems:'center',justifyContent:'center'}}>
                                <Statistics width={42} height={42} iconColor={Colors.colorA}/>
                            </View>
                            <View style={{flex:7}}>
                                <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Statistics</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection:'row', flex:1, width:"100%"}}>

                </View>
            </View>

        </View>

    );
}
