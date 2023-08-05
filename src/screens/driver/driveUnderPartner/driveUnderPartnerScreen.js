import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../../constants/colors'
import {AirbnbRating} from 'react-native-ratings';


export default function NonDrivingPartnerScreen({navigation}) {

    return (

        <View style={{flex:1,backgroundColor: Colors.background}}>
            <View style={{flex:11}}>
                <ScrollView contentContainerStyle={{alignItems:'center'}}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('vehicle')}
                        style={{
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
                                <Text style={{fontWeight:'bold',fontSize:15,color:Colors.colorD}}>Earned: 2560.00LKR</Text>
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
                    </TouchableOpacity>



                </ScrollView>
            </View>

            <View style={{flex:1}}>

            </View>

        </View>

    );
}
