import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {Colors} from '../constants/colors'



export default function NotificationsScreen({navigation}) {

    return (
        <View style={{flex:1,backgroundColor: Colors.background, alignItems:'center', padding:20}}>
            <ScrollView contentContainerStyle={{flex:1, width:Dimensions.get('window').width}}>
                <View style={{width:'100%', height:5, backgroundColor:Colors.colorA,borderRadius:50}}>
                </View>


                <View style={{width:'100%', height:5, backgroundColor:Colors.colorA,borderRadius:50}}>
                </View>


            </ScrollView>


        </View>

    );
}
