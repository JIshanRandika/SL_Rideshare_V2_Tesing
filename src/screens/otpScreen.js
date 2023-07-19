import * as React from 'react';
import {
    Image,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Button,
    TextInput,
    StyleSheet, Modal, Alert,
} from 'react-native';
import {Colors} from '../constants/colors'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


export default function OtpScreen({navigation}) {
    const [isPlaying, setIsPlaying] = React.useState(true)
    const styles = StyleSheet.create({
        borderStyleBase: {
            width: 30,
            height: 45
        },

        borderStyleHighLighted: {
            borderColor: "#03DAC6",
        },

        underlineStyleBase: {
            width: 30,
            height: 45,
            borderWidth: 0,
            borderBottomWidth: 1,
        },

        underlineStyleHighLighted: {
            borderColor: "#03DAC6",
        },
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
        },
    });

    const handleStart = () => {
        navigation.navigate('RegisterStep5');
    };

    return (
        <View style={{flex:1,backgroundColor: Colors.background}}>


            <SafeAreaView style={{ flex: 1, padding: 24 }}>
                <ScrollView>

                    <View style={{ padding: 24 }}>
                        <View>
                            <Text style={{ fontWeight: 3, color: Colors.colorE }}>
                                Enter 4 digit verification code sent to you contact number
                            </Text>
                        </View>
                        <View style={styles.centeredView}>

                            <OTPInputView
                                style={{width: '80%', height: 200,textColor:'black'}}
                                pinCount={4}
                                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                                // onCodeChanged = {code => { this.setState({code})}}
                                autoFocusOnLoad
                                codeInputFieldStyle={styles.underlineStyleBase}
                                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                onCodeFilled = {(code => {
                                    console.log(`Code is ${code}, you are good to go!`)
                                })}
                            />
                        </View>
                        <View>
                            <Text style={{ fontWeight: 3, color: Colors.colorE }}>
                                Enter 4 digit verification code sent to you contact number
                            </Text>
                        </View>
                        <View style={styles.centeredView}>
                            {isPlaying &&
                            <CountdownCircleTimer
                                isPlaying
                                duration={5}
                                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                                colorsTime={[7, 5, 2, 0]}
                                onComplete={() => setIsPlaying(false)}
                            >
                                {({ remainingTime, color }) => (
                                    <Text style={{ color, fontSize: 40 }}>
                                        {remainingTime}
                                    </Text>
                                )}
                            </CountdownCircleTimer>
                            }

                            {!isPlaying &&
                            <TouchableOpacity style={{
                                backgroundColor: Colors.colorB,
                                padding: 8,
                                alignItems: 'center',
                                borderRadius: 50,
                                width: 340,
                                marginTop: 30
                            }}>
                                <Text style={{fontWeight: 'bold', color: Colors.colorD}}>Resend</Text>
                            </TouchableOpacity>
                            }


                        </View>

                        <View style={styles.centeredView}>

                            <TouchableOpacity onPress={() => setModalVisible(true)} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50,width:340}}>
                                <Text style={{fontWeight:'bold',color:Colors.colorD}}>Confirm</Text>
                            </TouchableOpacity>
                        </View>

                        {/*<TouchableOpacity onPress={()=>navigation.navigate('RegisterStep2')} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50}}>*/}
                        {/*    <Text style={{fontWeight:'bold',color:Colors.colorD}}>Submit</Text>*/}
                        {/*</TouchableOpacity>*/}


                    </View>


                </ScrollView>


            </SafeAreaView>
        </View>
    );
}
