import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {Colors} from '../../../constants/colors'
import ImagePicker from 'react-native-image-crop-picker';
import Propic from '../../../assets/icons/Propic';
import GroupProfile from '../../../assets/icons/GroupProfile';
import {AirbnbRating} from 'react-native-ratings';
import {FormItem} from 'react-native-form-component';



export default function VehicleProfileScreen({navigation}) {
    const [driverID, setDriverID] = React.useState('');

    const defaultPickerOptions = {
        cropping: true,

    };
    const [imgSrc, setImgSrc] = React.useState(null);

    const recognizeFromGallery = async (options = defaultPickerOptions) => {
        try {
            const image = await ImagePicker.openPicker(options);
            setImgSrc({uri: image.path});

        } catch (err) {
            if (err.message !== 'User cancelled image selection') {
                console.error(err);
            }
        }
    };
    return (
        <View style={{flex:1,backgroundColor: Colors.background, padding:20}}>
            <View style={{ padding: 24, alignItems:'center',flex:3}}>
                <TouchableOpacity onPress={() => {
                    recognizeFromGallery();
                }}
                                  style={{
                                      // backgroundColor:'black',
                                      alignItems: 'center',
                                      borderRadius: 50,
                                  }}
                >
                    {imgSrc && <Image style={{width:80, height:80,borderRadius:50}} source={imgSrc}/>}
                    {!imgSrc && <GroupProfile width={80} height={80} iconColor= {Colors.contentLetters}/>}
                </TouchableOpacity>
                <Text style={{color:Colors.contentLetters, fontWeight:'bold',fontSize:15}}>CAT 2236</Text>
                <Text style={{color:Colors.contentLetters, fontWeight:'bold',fontSize:12}}>Earning: 2560.00LKR</Text>
                <Text style={{color:Colors.contentLetters, fontWeight:'bold',fontSize:12}}>Trips: 20</Text>
                <AirbnbRating
                    count={5}
                    defaultRating={3}
                    size={20}
                    isDisabled={true}
                    showRating={false}
                    ratingContainerStyle={{padding:0,marginLeft:0}}
                />

            </View>
            <View style={{flexDirection:'row',flex:4}}>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:Colors.contentLetters, fontWeight:'bold'}}>Drivers</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'100%', height:2, backgroundColor:Colors.contentLetters,borderRadius:50}}>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column',flex:6, alignItems:'center',justifyContent:'center', paddingTop:20}}>
                            <FormItem
                                style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2,width:'100%'}}
                                labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                                textInputStyle={{ color: Colors.colorE }}
                                value={driverID}
                                label="Driver ID"
                                onChangeText={(driverID) => setDriverID(driverID)}
                                floatingLabel
                                isRequired
                            />

                        </View>
                        <View style={{flexDirection:'column',flex:6, alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity
                                style={{
                                    position: 'absolute',
                                    // bottom: 20,
                                    right: 20,
                                    backgroundColor: Colors.colorA,
                                    padding: 10,
                                    borderRadius: 50,
                                    shadowColor: Colors.colorE,
                                    shadowOffset: {
                                        width: 0,
                                        height: 3,
                                    },
                                    shadowOpacity:  0.17,
                                    shadowRadius: 3.05,
                                    elevation: 4,

                                    width:'80%',
                                    alignItems:'center'
                                }}
                            >
                                <Text style={{ color: Colors.colorD, fontWeight: 'bold' }}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width:'100%', height:2, backgroundColor:Colors.contentLetters,borderRadius:50}}>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column',flex:3}}>
                            <Text style={{color:Colors.contentLetters}}>Name</Text>
                        </View>
                        <View style={{flexDirection:'column',flex:2}}>
                            <Text style={{color:Colors.contentLetters}}>ID</Text>
                        </View>
                        <View style={{flexDirection:'column',flex:3}}>
                            <Text style={{color:Colors.contentLetters}}>Until</Text>
                        </View>
                        <View style={{flexDirection:'column',flex:3}}>
                            <Text style={{color:Colors.contentLetters}}>Earned</Text>
                        </View>
                        <View style={{flexDirection:'column',flex:2}}>
                            <Text style={{color:Colors.contentLetters}}>Action</Text>
                        </View>
                    </View>

                    <View style={{width:'100%', height:2, backgroundColor:Colors.contentLetters,borderRadius:50}}>
                    </View>

                    <ScrollView>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column',flex:3}}>
                                <View style={{flexDirection:'row'}}>
                                    <Image style={{width:15,height:15, borderRadius:20,marginTop:2}} source={require('../../../assets/my.jpg')}/>
                                    <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>ABC Cab</Text>
                                </View>

                            </View>
                            <View style={{flexDirection:'column',flex:2}}>
                                <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>XD45A8</Text>
                            </View>
                            <View style={{flexDirection:'column',flex:3}}>
                                <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>4‎/‎14‎/‎2023 ‎9‎:‎01‎ ‎PM</Text>
                            </View>
                            <View style={{flexDirection:'column',flex:3}}>
                                <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>0</Text>
                            </View>
                            <View style={{flexDirection:'column',flex:2}}>
                                <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>Pending</Text>
                            </View>
                        </View>




                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column',flex:3}}>
                                <View style={{flexDirection:'row'}}>
                                    <Image style={{width:15,height:15, borderRadius:20,marginTop:2}} source={require('../../../assets/my.jpg')}/>
                                    <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>ABC Cab</Text>
                                </View>

                            </View>
                            <View style={{flexDirection:'column',flex:2}}>
                                <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>XD45A8</Text>
                            </View>
                            <View style={{flexDirection:'column',flex:3}}>
                                <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>4‎/‎14‎/‎2023 ‎9‎:‎01‎ ‎PM</Text>
                            </View>
                            <View style={{flexDirection:'column',flex:3}}>
                                <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>25000.00LKR</Text>
                            </View>
                            <View style={{flexDirection:'column',flex:2}}>
                                <TouchableOpacity
                                    onPress={()=>navigation.navigate('groupProfileScreen')}
                                    style={{
                                        position: 'absolute',
                                        // bottom: 20,

                                        backgroundColor: Colors.colorA,
                                        paddingVertical:5,
                                        borderRadius: 50,
                                        shadowColor: Colors.colorE,
                                        shadowOffset: {
                                            width: 0,
                                            height: 3,
                                        },
                                        shadowOpacity:  0.17,
                                        shadowRadius: 3.05,
                                        elevation: 4,

                                        width:'80%',
                                        alignItems:'center'
                                    }}
                                >
                                    <Text style={{ color: Colors.colorD, fontWeight: 'bold', fontSize:9 }}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </View>





            <View style={{flexDirection:'row',flex:4}}>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:Colors.contentLetters, fontWeight:'bold'}}>Documents</Text>

                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'100%', height:2, backgroundColor:Colors.contentLetters,borderRadius:50}}>
                        </View>
                    </View>

                    <ScrollView contentContainerStyle={{ paddingVertical:10}}>
                        <View style={{flexDirection:'row',paddingVertical:10}}>
                            <View style={{flexDirection:'column',flex:6}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>Vehicle Registration</Text>
                                </View>

                            </View>
                            <View style={{flexDirection:'column',flex:3, justifyContent:'center'}}>
                                <Text style={{color:Colors.colorA, paddingHorizontal:2, fontSize:12}}>VERIFIED</Text>
                            </View>
                            <View style={{flexDirection:'column',flex:3}}>
                                <TouchableOpacity
                                    style={{
                                        position: 'absolute',
                                        // bottom: 20,

                                        backgroundColor: Colors.colorA,
                                        paddingVertical:5,
                                        borderRadius: 50,
                                        shadowColor: Colors.colorE,
                                        shadowOffset: {
                                            width: 0,
                                            height: 3,
                                        },
                                        shadowOpacity:  0.17,
                                        shadowRadius: 3.05,
                                        elevation: 4,

                                        width:'80%',
                                        alignItems:'center'
                                    }}
                                >
                                    <Text style={{ color: Colors.colorD, fontWeight: 'bold', fontSize:9 }}>Renew</Text>
                                </TouchableOpacity>
                            </View>

                        </View>


                        {/*===================*/}
                        <View style={{flexDirection:'row',paddingVertical:10}}>
                            <View style={{flexDirection:'column',flex:6}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>Insurance</Text>
                                </View>

                            </View>
                            <View style={{flexDirection:'column',flex:3, justifyContent:'center'}}>
                                <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>SUBMITTED</Text>
                            </View>
                            <View style={{flexDirection:'column',flex:3}}>
                                <TouchableOpacity
                                    style={{
                                        position: 'absolute',
                                        // bottom: 20,

                                        backgroundColor: Colors.colorA,
                                        paddingVertical:5,
                                        borderRadius: 50,
                                        shadowColor: Colors.colorE,
                                        shadowOffset: {
                                            width: 0,
                                            height: 3,
                                        },
                                        shadowOpacity:  0.17,
                                        shadowRadius: 3.05,
                                        elevation: 4,

                                        width:'80%',
                                        alignItems:'center'
                                    }}
                                >
                                    <Text style={{ color: Colors.colorD, fontWeight: 'bold', fontSize:9 }}>Renew</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        {/*==========================*/}
                        <View style={{flexDirection:'row',paddingVertical:10}}>
                            <View style={{flexDirection:'column',flex:6}}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>Revenue License</Text>
                                </View>

                            </View>
                            <View style={{flexDirection:'column',flex:3, justifyContent:'center'}}>
                                <Text style={{color:Colors.colorA, paddingHorizontal:2, fontSize:12}}>VERIFIED</Text>
                            </View>
                            <View style={{flexDirection:'column',flex:3}}>
                                <TouchableOpacity
                                    style={{
                                        position: 'absolute',
                                        // bottom: 20,

                                        backgroundColor: Colors.colorA,
                                        paddingVertical:5,
                                        borderRadius: 50,
                                        shadowColor: Colors.colorE,
                                        shadowOffset: {
                                            width: 0,
                                            height: 3,
                                        },
                                        shadowOpacity:  0.17,
                                        shadowRadius: 3.05,
                                        elevation: 4,

                                        width:'80%',
                                        alignItems:'center'
                                    }}
                                >
                                    <Text style={{ color: Colors.colorD, fontWeight: 'bold', fontSize:9 }}>Renew</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    </ScrollView>
                </View>

            </View>


        </View>

    );
}
