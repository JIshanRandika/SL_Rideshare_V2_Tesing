import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/colors'


export default function RegisterVerifyNICCardScreen({navigation}) {

    return (
        <View style={{flex:1,backgroundColor: Colors.background}}>

            <View style={{flex:5, alignItems:'center'}} >
                <Image style={{width:340,height:300, borderRadius:20}} source={require('../assets/takePhoto.png')}/>
            </View>
            <View style={{flex:5, alignItems:'center',alignContent:'center'}} >
                <View style={{width:340,backgroundColor:Colors.colorB,borderRadius:30}}>
                    <Text style={{paddingHorizontal:40,paddingVertical:10,marginTop:20,textAlign:'center',fontWeight:'bold',color:Colors.colorD,fontSize:20}}>
                        Take a photo of the FRONT of your NIC
                    </Text>
                    <Text style={{paddingHorizontal:40,paddingVertical:10,marginBottom:20, textAlign:'center',fontWeight:'bold',color:Colors.colorD,fontSize:17}}>
                        Position your ID in the indicated zone
                    </Text>

                </View>

            </View>
            <View style={{flex:2, alignItems:'center'}} >
            <TouchableOpacity onPress={()=>navigation.navigate('RegisterStep3')} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50,width:340}}>
                <Text style={{fontWeight:'bold',color:Colors.colorD}}>Start</Text>
            </TouchableOpacity>
            </View>
        </View>

    );
}
