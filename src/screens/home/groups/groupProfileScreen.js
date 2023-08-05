import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import {Colors} from '../../../constants/colors'
import ImagePicker from 'react-native-image-crop-picker';
import Propic from '../../../assets/icons/Propic';
import GroupProfile from '../../../assets/icons/GroupProfile';



export default function GroupProfileScreen({navigation}) {
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
                <Text style={{color:Colors.contentLetters, fontWeight:'bold',fontSize:15}}>AB Cabs</Text>

            </View>
            <View style={{flexDirection:'row',flex:4}}>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:Colors.contentLetters, fontWeight:'bold'}}>Requests</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'100%', height:2, backgroundColor:Colors.contentLetters,borderRadius:50}}>
                        </View>
                    </View>

                    <ScrollView contentContainerStyle={{flexDirection:'row', paddingVertical:10}}>
                        <View style={{flexDirection:'column',flex:6}}>
                            <View style={{flexDirection:'row'}}>
                                <Image style={{width:15,height:15, borderRadius:20,marginTop:2}} source={require('../../../assets/my.jpg')}/>
                                <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>ABC Cab</Text>
                            </View>

                        </View>
                        <View style={{flexDirection:'column',flex:2}}>
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
                                <Text style={{ color: Colors.colorD, fontWeight: 'bold', fontSize:9 }}>Ignore</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'column',flex:2}}>
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
                                <Text style={{ color: Colors.colorD, fontWeight: 'bold', fontSize:9 }}>Accept</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </View>


            <View style={{flexDirection:'row',flex:4}}>
                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:Colors.contentLetters, fontWeight:'bold'}}>Members</Text>

                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:'100%', height:2, backgroundColor:Colors.contentLetters,borderRadius:50}}>
                        </View>
                    </View>

                    <ScrollView contentContainerStyle={{flexDirection:'row', paddingVertical:10}}>
                        <View style={{flexDirection:'column',flex:6}}>
                            <View style={{flexDirection:'row'}}>
                                <Image style={{width:15,height:15, borderRadius:20,marginTop:2}} source={require('../../../assets/my.jpg')}/>
                                <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>ABC Cab</Text>
                            </View>

                        </View>
                        <View style={{flexDirection:'column',flex:2}}>
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
                                <Text style={{ color: Colors.colorD, fontWeight: 'bold', fontSize:9 }}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'column',flex:2}}>
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
                                <Text style={{ color: Colors.colorD, fontWeight: 'bold', fontSize:9 }}>Block</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </View>

            <View style={{flexDirection:'row',flex:1}}>
                <View style={{flexDirection:'column',flex:6, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            // bottom: 20,
                            // right: 20,
                            backgroundColor: Colors.colorC,
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

                            width:'90%',
                            alignItems:'center'
                        }}
                    >
                        <Text style={{ color: Colors.colorD, fontWeight: 'bold' }}>Block</Text>
                    </TouchableOpacity>
                </View>


                <View style={{flexDirection:'column',flex:6, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            // bottom: 20,
                            // right: 20,
                            backgroundColor: Colors.colorC,
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

                            width:'90%',
                            alignItems:'center'
                        }}
                    >
                        <Text style={{ color: Colors.colorD, fontWeight: 'bold' }}>Leave</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    );
}
