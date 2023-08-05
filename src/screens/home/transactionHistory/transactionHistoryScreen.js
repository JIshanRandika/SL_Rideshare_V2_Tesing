import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {Colors} from '../../../constants/colors'



export default function TransactionHistoryScreen({navigation}) {

    return (
        <View style={{flex:1,backgroundColor: Colors.background, alignItems:'center', padding:20}}>
            <ScrollView contentContainerStyle={{flex:1, width:Dimensions.get('window').width}}>
                <View style={{width:'100%', height:5, backgroundColor:Colors.colorA,borderRadius:50}}>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column', flex:8}}>
                        <Text style={{color:Colors.colorB, fontWeight:'bold', fontSize:15}}>Ride (Debit)</Text>
                        <Text style={{color:Colors.colorB, fontWeight:'bold', fontSize:12}}>01/15/2023 10.21AM</Text>

                    </View>
                    <View style={{flexDirection:'column', flex:4}}>
                        <Text style={{color:Colors.colorB, fontWeight:'bold', fontSize:15}}>246.00LKR</Text>
                    </View>

                </View>

                <View style={{width:'100%', height:5, backgroundColor:Colors.colorA,borderRadius:50}}>
                </View>


            </ScrollView>


        </View>

    );
}
