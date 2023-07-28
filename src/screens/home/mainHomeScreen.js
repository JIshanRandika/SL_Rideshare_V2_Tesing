import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../constants/colors'
import { SliderBox } from 'react-native-image-slider-box';
import {useEffect} from 'react';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Passenger from '../../assets/icons/Passenger';
import Driver from '../../assets/icons/Driver';
import TopUp from '../../assets/icons/TopUp';
import Withdraw from '../../assets/icons/Withdraw';
import Transaction from '../../assets/icons/Transaction';
import Group from '../../assets/icons/Group';
import Processing from '../../assets/icons/Processing';
import Route from '../../assets/icons/Route';
import InitialStackNavigation from '../../navigations/initialStackNavigation';
import TabNavigation from '../../navigations/tabNavigation';



export default function MainHomeScreen({navigation}) {

    const images = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
    ];
    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating);
    };

    return (

    <View style={{flex:1,backgroundColor: Colors.background}}>
        <View style={{flex:4}}>
            <SliderBox
                ImageComponentStyle={{borderRadius:20,width:'90%',marginTop:20}}
                autoplay={true}
                circleLoop={true}
                autoplayInterval={5000}
                images={images} />
        </View>
        <View style={{alignItems:'center',flex:4}}>
            <View style={{
                width:"90%",backgroundColor:Colors.colorA,
                marginVertical:20,
                borderRadius:20,
                shadowColor: Colors.colorE,
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity:  0.23,
                shadowRadius: 11.27,
                elevation: 14
            }}>
                <View style={{flexDirection:'row',}}>
                    <View>
                        <Image style={{width:150,height:150, borderRadius:20,margin:20}} source={require('../../assets/my.jpg')}/>
                    </View>
                    <View style={{flexDirection:'column',paddingVertical:20}}>
                        <Text style={{fontWeight:'bold',fontSize:20,color:Colors.colorD}}>Hi Ishan!</Text>
                        <Text style={{fontWeight:'bold',fontSize:20,color:Colors.colorD}}>Good Morning!</Text>
                        <Text style={{fontWeight:'bold',fontSize:14,color:Colors.colorD,width:200}}>Balance: 2560.00LKR</Text>
                        <AirbnbRating
                            count={5}
                            defaultRating={3}
                            size={20}
                            isDisabled={true}
                            showRating={false}
                            ratingContainerStyle={{padding:0,marginLeft:-80}}
                        />
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'column'}}>
                                <Passenger width={50} height={50} iconColor={Colors.colorB}/>
                                <Text style={{fontWeight:'bold',fontSize:10,color:Colors.colorB,marginTop:-15}}>Level 1</Text>
                            </View>
                            <View style={{flexDirection:'column', marginLeft:20}}>
                                <Driver width={38} height={38} iconColor={Colors.colorB}/>
                                <Text style={{fontWeight:'bold',fontSize:10,color:Colors.colorB,marginTop:-3}}>Level 1</Text>
                            </View>
                        </View>
                    </View>


                </View>
            </View>
        </View>
        <View style={{alignItems:'center',flex:5}}>
            <View style={{flexDirection:'row', margin:20}}>
                <View style={{flex:4, alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'white',width:70,height:70, borderRadius:50,
                        shadowColor: Colors.colorE,
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity:  0.17,
                        shadowRadius: 2.54,
                        elevation: 3,

                        alignItems:'center',justifyContent:'center'
                    }}>
                        <TopUp width={45} height={45} iconColor={Colors.colorA}/>
                    </TouchableOpacity>
                    <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>To Up</Text>

                </View>
                <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'white',width:70,height:70, borderRadius:50,
                        shadowColor: Colors.colorE,
                        sshadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity:  0.17,
                        shadowRadius: 2.54,
                        elevation: 3,

                        alignItems:'center',justifyContent:'center'
                    }}>
                        <Withdraw width={45} height={45} iconColor={Colors.colorA}/>
                    </TouchableOpacity>
                    <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Withdraw</Text>
                </View>
                <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'white',width:70,height:70, borderRadius:50,
                        shadowColor: Colors.colorE,
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity:  0.17,
                        shadowRadius: 2.54,
                        elevation: 3,

                        alignItems:'center',justifyContent:'center'
                    }}>
                        <Transaction width={42} height={42} iconColor={Colors.colorA}/>
                    </TouchableOpacity>
                    <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Transaction</Text>
                </View>

            </View>

            {/*=====*/}
            <View style={{flexDirection:'row', margin:20}}>
                <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'white',width:70,height:70, borderRadius:50,
                        shadowColor: Colors.colorE,
                        sshadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity:  0.17,
                        shadowRadius: 2.54,
                        elevation: 3,

                        alignItems:'center',justifyContent:'center'
                    }}>
                        <Group width={45} height={45} iconColor={Colors.colorA}/>
                    </TouchableOpacity>
                    <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Groups</Text>

                </View>
                <View style={{flex:4, alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('process')}
                        style={{backgroundColor:'white',width:70,height:70, borderRadius:50,
                        shadowColor: Colors.colorE,
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity:  0.17,
                        shadowRadius: 2.54,
                        elevation: 3,

                        alignItems:'center',justifyContent:'center'
                    }}>
                        <Processing width={42} height={42} iconColor={Colors.colorA}/>

                    </TouchableOpacity>
                    <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Processing</Text>

                </View>
                <View style={{flex:4, alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Routes')}
                        style={{backgroundColor:'white',width:70,height:70, borderRadius:50,
                        shadowColor: Colors.colorE,
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity:  0.17,
                        shadowRadius: 2.54,
                        elevation: 3,

                        alignItems:'center',justifyContent:'center'
                    }}>
                        <Route width={42} height={42} iconColor={Colors.colorA}/>

                    </TouchableOpacity>
                    <Text style={{color:Colors.contentLetters,fontWeight:'bold',fontSize:12,marginTop:3}}>Favourite Routes</Text>

                </View>

            </View>

        </View>
    </View>


    );
}
