import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../../../constants/colors';
import FastImage from 'react-native-fast-image';

export default function HireScreen({ navigation }) {
    const [isHiring, setIsHiring] = useState(false);

    const startHiring = () => {
        setIsHiring(true);
    };

    const stopHiring = () => {
        setIsHiring(false);
    };

    return (
        <View style={{ flex: 1, backgroundColor: Colors.background, justifyContent:'center',alignItems:'center' }}>
            {isHiring ? (
                <View style={{alignItems:'center'}}>
                    <FastImage
                        source={require('../../../../assets/gifs/waiting.gif')} // Replace with your actual GIF file path
                        style={{ width: 200, height: 200, alignSelf: 'center' }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <Text style={{color:Colors.colorA, fontSize:20, marginBottom:20, fontStyle:'italic', fontWeight:'bold'}}>Waiting for Hires</Text>
                    <TouchableOpacity
                        onPress={stopHiring}
                        style={{backgroundColor:Colors.colorB,padding:15,alignItems:'center',borderRadius:50,width:340}}
                    >
                        <Text style={{fontWeight:'bold',color:Colors.colorD}}>Stop Hiring</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{alignItems:'center'}}>
                    <FastImage
                        source={require('../../../../assets/gifs/startHiring.gif')} // Replace with your actual GIF file path
                        style={{ width: 200, height: 200, alignSelf: 'center' }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <TouchableOpacity
                        onPress={startHiring}
                        style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50,width:340}}
                    >
                        <Text style={{fontWeight:'bold',color:Colors.colorD}}>Start Hiring</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
