import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/colors'
import {FormItem} from 'react-native-form-component';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function LoginScreen({navigation}) {
    const [usernameOrEmail, setUsernameOrEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <View style={{flex:1,backgroundColor: Colors.background}}>
            <View style={{
                flex:6,
                backgroundColor:Colors.colorA,
                borderBottomLeftRadius:60,
                borderBottomRightRadius:60,
                alignItems:'center',
                justifyContent:'center'
            }}>

                <Image style={{width:150,height:150, borderRadius:20}} source={require('../assets/logo/logoA.jpg')}/>

            </View>
            <View style={{flex:6}}>
                <SafeAreaView style={{ flex: 1, padding: 24 }}>
                    <ScrollView>

                        <View style={{ padding: 24 }}>

                            <FormItem
                                style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                                labelStyle={{fontWeight:3,color:Colors.colorE}}
                                textInputStyle={{ color: Colors.colorE }}
                                value={usernameOrEmail}
                                label="Username/Email"
                                onChangeText={(usernameOrEmail) => setUsernameOrEmail(usernameOrEmail)}
                                floatingLabel
                                isRequired
                            />
                            <FormItem
                                style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                                labelStyle={{fontWeight:3,color:Colors.colorE}}
                                textInputStyle={{ color: Colors.colorE }}
                                value={password}
                                label="Password"
                                onChangeText={(password) => setPassword(password)}
                                floatingLabel
                                isRequired
                                secureTextEntry
                            />
                            <View style={{flexDirection:'row',marginTop:-20,marginBottom:20}}>
                                <BouncyCheckbox
                                    size={20}
                                    fillColor={Colors.colorA}
                                    unfillColor="#FFFFFF"
                                    iconStyle={{ borderColor: "red" }}
                                />
                                <Text style={{color:Colors.colorE}}>Remember Me</Text>
                                <TouchableOpacity style={{alignItems:'center',borderRadius:50,position:'absolute',right:0}}>
                                    <Text style={{color:Colors.colorA}}>Forget Password?</Text>
                                </TouchableOpacity>
                            </View>


                            <TouchableOpacity onPress={()=>navigation.navigate('RegisterStep2')} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50}}>
                                <Text style={{fontWeight:'bold',color:Colors.colorD}}>Next</Text>
                            </TouchableOpacity>


                        </View>


                    </ScrollView>



                </SafeAreaView>
            </View>
            <View style={{alignSelf:'center',flexDirection:'row',flex:1}} >
                <Text style={{fontWeight:2,color:Colors.colorE,textAlign:'center'}}>
                    Don’t have an account?
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('RegisterStep1')}>
                    <Text style={{fontWeight:2,color:Colors.colorA,textAlign:'center'}}> Register</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}
