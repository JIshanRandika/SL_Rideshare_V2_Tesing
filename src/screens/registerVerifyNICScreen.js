import * as React from 'react';
import {Image, Text, View, SafeAreaView} from 'react-native';
import {Colors} from '../constants/colors'
import { Form, FormItem, Picker, PinInput } from 'react-native-form-component';

const firstnameInput = React.createRef();
const lastnameInput = React.createRef();

export default function registerVerifyNICScreen() {
    const [firstname, setFirstname] = React.useState('');
    const [number, setNumber] = React.useState(1);
    const [lastName, setLastName] = React.useState('');
    const [gender, setGender] = React.useState('male');
    return (
        <>
            <View style={{
                flex:5,
                backgroundColor:Colors.colorA,
                borderBottomLeftRadius:60,
                borderBottomRightRadius:60,
                alignItems:'center',
                justifyContent:'center'
            }}>

                    <Image style={{width:100,height:100, borderRadius:20}} source={require('../assets/logo/logoA.jpg')}/>

            </View>
            <View style={{flex:7}}>
                <SafeAreaView style={{ flex: 1, backgroundColor: 'yellow', padding: 24 }}>
                    <View style={{ padding: 24 }}>
                        <Form onButtonPress={() => console.warn('pressed button')}>
                            <FormItem
                                value={firstname}
                                label="Firstname"
                                asterik
                                onChangeText={(firstname) => setFirstname(firstname)}
                                floatingLabel
                                isRequired
                                // secureTextEntry
                                ref={firstnameInput}
                            />


                        </Form>
                    </View>
                </SafeAreaView>
            </View>
        </>

    );
}
