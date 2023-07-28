import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../constants/colors'
import { SliderBox } from 'react-native-image-slider-box';
import {useEffect} from 'react';

export default function InitialHomeScreen({navigation}) {

    const images = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
        // Add more image URLs here
    ];

    return (

        <View style={{flex:1,backgroundColor: Colors.background}}>
            <View style={{flex:5}}>
                <SliderBox
                    ImageComponentStyle={{borderRadius:20,width:'90%',marginTop:20}}
                    autoplay={true}
                    circleLoop={true}
                    autoplayInterval={5000}
                    images={images} />
            </View>
            <View style={{alignItems:'center',flex:5}}>
                <View style={{
                    width:"90%",backgroundColor:Colors.colorA,
                    marginVertical:20,
                    borderRadius:20
                }}>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Image style={{width:150,height:150, borderRadius:20,margin:20}} source={require('../../assets/my.jpg')}/>
                        </View>
                        <View style={{flexDirection:'column',paddingVertical:20}}>
                            <Text style={{fontWeight:'bold',fontSize:20,color:Colors.colorD}}>Hi Ishan!</Text>
                            <Text style={{fontWeight:'bold',fontSize:20,color:Colors.colorD}}>Good Morning!</Text>
                            <Text style={{fontWeight:'bold',fontSize:15,color:Colors.colorB,width:200}}>Your referee still not recommended</Text>
                        </View>

                    </View>
                </View>
            </View>
            <View style={{alignItems:'center',flex:2}}>
                <TouchableOpacity  style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50,width:'90%'}}>
                    <Text style={{fontWeight:'bold',color:Colors.colorD}}>Change the referee</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}
