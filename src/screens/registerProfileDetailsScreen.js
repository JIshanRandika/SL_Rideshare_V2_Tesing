import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/colors'


export default function RegisterProfileDetailsScreen({navigation}) {

    return (
        <View style={{flex:1,backgroundColor: Colors.background}}>


                    <Text style={{paddingHorizontal:40,paddingVertical:10,marginTop:20,textAlign:'center',fontWeight:'bold',color:Colors.colorD,fontSize:20}}>
                        Take a photo of the FRONT of your NIC
                    </Text>
        </View>
    );
}
