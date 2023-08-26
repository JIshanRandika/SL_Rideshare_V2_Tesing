import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../../constants/colors'
import {FormItem} from 'react-native-form-component';
import DatePicker from 'react-native-date-picker'


export default function LicenseDetailScreen({navigation}) {
    const [licenseNumber, setLicenseNumber] = React.useState('');
    const [bloodGroup, setBloodGroup] = React.useState('');

    const [issueDate, setIssueDate] = React.useState(new Date());
    const [issueDateString, setIssueDateString] = React.useState('');
    const [issueDatePickOpen, setIssueDatePickOpen] = React.useState(false)

    const [expireDate, setExpireDate] = React.useState(new Date());
    const [expireDateString, setExpireDateString] = React.useState('');
    const [expireDatePickOpen, setExpireDatePickOpen] = React.useState(false)


    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return (
        <View style={{flex:1,backgroundColor: Colors.background,justifyContent:'center'}}>

                <SafeAreaView style={{ flex: 1, padding: 24,justifyContent:'center' }}>


                        <View style={{ padding: 24 }}>

                            <FormItem
                                style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                                labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                                textInputStyle={{ color: Colors.colorE }}
                                value={licenseNumber}
                                label="License Number"
                                onChangeText={(licenseNumber) => setLicenseNumber(licenseNumber)}
                                floatingLabel
                                isRequired
                            />
                            <FormItem
                                style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                                labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                                textInputStyle={{ color: Colors.colorE }}
                                value={bloodGroup}
                                label="Last Name"
                                onChangeText={(bloodGroup) => setBloodGroup(bloodGroup)}
                                floatingLabel
                                isRequired
                            />

                            <FormItem
                                style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                                labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                                textInputStyle={{ color: Colors.colorE }}
                                value={issueDateString}
                                label="License issue date"
                                // onPress={() => setOpen(true)}
                                onPressIn={() => setIssueDatePickOpen(true)}
                                floatingLabel
                                isRequired
                            />

                            <FormItem
                                style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                                labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                                textInputStyle={{ color: Colors.colorE }}
                                value={expireDateString}
                                label="License expire date"
                                // onPress={() => setOpen(true)}
                                onPressIn={() => setExpireDatePickOpen(true)}
                                floatingLabel
                                isRequired
                            />

                            <TouchableOpacity onPress={()=>navigation.navigate('licenseFrontScreen')} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50}}>
                                <Text style={{fontWeight:'bold',color:Colors.colorD}}>Next</Text>
                            </TouchableOpacity>


                        </View>


                    <DatePicker
                        modal
                        mode = {'date'}
                        open={issueDatePickOpen}
                        date={issueDate}
                        onConfirm={(date) => {
                            setIssueDate(date)
                            setIssueDateString(date.getDate()+' '+month[date.getUTCMonth()]+' '+date.getFullYear())
                            setIssueDatePickOpen(false)

                        }}
                        onCancel={() => {
                            setIssueDatePickOpen(false)
                        }}
                    />

                    <DatePicker
                        modal
                        mode = {'date'}
                        open={expireDatePickOpen}
                        date={expireDate}
                        onConfirm={(date) => {
                            setExpireDate(date)
                            setExpireDateString(date.getDate()+' '+month[date.getUTCMonth()]+' '+date.getFullYear())
                            setExpireDatePickOpen(false)

                        }}
                        onCancel={() => {
                            setExpireDatePickOpen(false)
                        }}
                    />

                </SafeAreaView>
        </View>

    );
}
