import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../constants/colors'
import {FormItem} from 'react-native-form-component';
import DatePicker from 'react-native-date-picker'


export default function RegisterVerifyNICScreen({navigation}) {
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [nic, setNic] = React.useState('');
    const [dob, setDob] = React.useState(new Date());
    const [dobString, setDobString] = React.useState('');
    const [open, setOpen] = React.useState(false)
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return (
        <View style={{flex:1,backgroundColor: Colors.background}}>
            <View style={{
                flex:4,
                backgroundColor:Colors.colorA,
                borderBottomLeftRadius:60,
                borderBottomRightRadius:60,
                alignItems:'center',
                justifyContent:'center'
            }}>

                    <Image style={{width:100,height:100, borderRadius:20}} source={require('../../assets/logo/logoA.jpg')}/>

            </View>
            <View style={{flex:6}}>
                <SafeAreaView style={{ flex: 1, padding: 24 }}>
                    <ScrollView>

                        <View style={{ padding: 24 }}>

                            <FormItem
                                style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                                labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                                textInputStyle={{ color: Colors.colorE }}
                                value={firstname}
                                label="First Name"
                                onChangeText={(firstname) => setFirstname(firstname)}
                                floatingLabel
                                isRequired
                            />
                            <FormItem
                                style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                                labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                                textInputStyle={{ color: Colors.colorE }}
                                value={lastname}
                                label="Last Name"
                                onChangeText={(lastname) => setLastname(lastname)}
                                floatingLabel
                                isRequired
                            />
                            <FormItem
                                style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                                labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                                textInputStyle={{ color: Colors.colorE }}
                                value={nic}
                                label="NIC Number"
                                onChangeText={(nic) => setNic(nic)}
                                floatingLabel
                                isRequired
                            />
                            <FormItem
                                style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                                labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                                textInputStyle={{ color: Colors.colorE }}
                                value={dobString}
                                label="Date of Birth"
                                // onPress={() => setOpen(true)}
                                onPressIn={() => setOpen(true)}
                                floatingLabel
                                isRequired
                            />

                            <TouchableOpacity onPress={()=>navigation.navigate('RegisterStep2')} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50}}>
                                <Text style={{fontWeight:'bold',color:Colors.colorD}}>Next</Text>
                            </TouchableOpacity>


                        </View>


                    </ScrollView>

                    <DatePicker
                        modal
                        mode = {'date'}
                        open={open}
                        date={dob}
                        onConfirm={(date) => {
                            setDob(date)
                            setDobString(date.getDate()+' '+month[date.getUTCMonth()]+' '+date.getFullYear())
                            setOpen(false)

                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />

                </SafeAreaView>
            </View>
            <View style={{alignSelf:'center',flexDirection:'row',flex:1}} >
                <Text style={{fontWeight:2,color:Colors.contentLetters,textAlign:'center'}}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text style={{fontWeight:2,color:Colors.colorA,textAlign:'center'}}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}
