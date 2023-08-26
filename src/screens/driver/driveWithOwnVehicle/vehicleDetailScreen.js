import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../../constants/colors'
import {FormItem} from 'react-native-form-component';
import DatePicker from 'react-native-date-picker'


export default function VehicleDetailScreen({navigation}) {
    const [vehicleNumber, setVehicleNumber] = React.useState('');
    const [chassisNumber, setChassisNumber] = React.useState('');
    const [bodyNumber, setBodyNumber] = React.useState('');
    const [engineNumber, setEngineNumber] = React.useState('');

    const [fRegDate, setFRegDate] = React.useState(new Date());
    const [fRegDateString, setFRegDateString] = React.useState('');
    const [fRegDatePickOpen, setFRegDatePickOpen] = React.useState(false)




    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    return (
        <View style={{flex:1,backgroundColor: Colors.background,justifyContent:'center'}}>

            <SafeAreaView style={{ flex: 1, padding: 24,justifyContent:'center' }}>


                <View style={{ padding: 24 }}>

                    <FormItem
                        style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                        labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                        textInputStyle={{ color: Colors.colorE }}
                        value={vehicleNumber}
                        label="Vehicle Number"
                        onChangeText={(vehicleNumber) => setVehicleNumber(vehicleNumber)}
                        floatingLabel
                        isRequired
                    />
                    <FormItem
                        style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                        labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                        textInputStyle={{ color: Colors.colorE }}
                        value={chassisNumber}
                        label="Chassis Number"
                        onChangeText={(chassisNumber) => setChassisNumber(chassisNumber)}
                        floatingLabel
                        isRequired
                    />
                    <FormItem
                        style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                        labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                        textInputStyle={{ color: Colors.colorE }}
                        value={bodyNumber}
                        label="Body Number"
                        onChangeText={(bodyNumber) => setBodyNumber(bodyNumber)}
                        floatingLabel
                        isRequired
                    />
                    <FormItem
                        style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                        labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                        textInputStyle={{ color: Colors.colorE }}
                        value={engineNumber}
                        label="Engine Number"
                        onChangeText={(engineNumber) => setEngineNumber(engineNumber)}
                        floatingLabel
                        isRequired
                    />

                    <FormItem
                        style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                        labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                        textInputStyle={{ color: Colors.colorE }}
                        value={fRegDateString}
                        label="First Registration date"
                        // onPress={() => setOpen(true)}
                        onPressIn={() => setFRegDatePickOpen(true)}
                        floatingLabel
                        isRequired
                    />


                    <TouchableOpacity onPress={()=>navigation.navigate('vehicleRegFrontScreen')} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50}}>
                        <Text style={{fontWeight:'bold',color:Colors.colorD}}>Next</Text>
                    </TouchableOpacity>


                </View>


                <DatePicker
                    modal
                    mode = {'date'}
                    open={fRegDatePickOpen}
                    date={fRegDate}
                    onConfirm={(date) => {
                        setFRegDate(date)
                        setFRegDateString(date.getDate()+' '+month[date.getUTCMonth()]+' '+date.getFullYear())
                        setFRegDatePickOpen(false)

                    }}
                    onCancel={() => {
                        setFRegDatePickOpen(false)
                    }}
                />

            </SafeAreaView>
        </View>

    );
}
