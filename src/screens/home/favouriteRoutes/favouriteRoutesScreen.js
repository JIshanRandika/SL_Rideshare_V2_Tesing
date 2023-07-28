import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../../constants/colors'
import {AirbnbRating} from 'react-native-ratings';


export default function FavouriteRoutesScreen({navigation}) {

    return (

        <View style={{flex:1,backgroundColor: Colors.background}}>
            <View style={{flex:11}}>
                <ScrollView contentContainerStyle={{alignItems:'center'}}>
                    <TouchableOpacity style={{
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
                                <Image style={{width:100,height:100, borderRadius:20,margin:20}} source={require('../../../assets/map.jpeg')}/>
                            </View>
                            <View style={{flexDirection:'column',paddingVertical:20, paddingRight:20}}>
                                <Text style={{fontWeight:'bold',fontSize:20,color:Colors.colorD}}>Home</Text>
                                <Text style={{fontWeight:'bold',fontSize:15,color:Colors.colorD}}>From: Kalutara</Text>
                                <Text style={{fontWeight:'bold',fontSize:15,color:Colors.colorD,width:200}}>asd sdf</Text>

                            </View>

                        </View>
                    </TouchableOpacity>




                    <TouchableOpacity style={{
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
