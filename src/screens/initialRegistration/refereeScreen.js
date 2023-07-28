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
import {Colors} from '../../constants/colors'
import {FormItem} from 'react-native-form-component';
import Passenger from '../../assets/icons/Passenger';


export default function RefereeScreen({navigation}) {
    const [refereeID, setRefereeID] = React.useState('');

    const [modalVisible, setModalVisible] = React.useState(false);

    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
        },
        modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        blurredBackground: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
            zIndex: -1,
        },
    });

    const handleStart = () => {
        navigation.navigate('RegisterStep5');
        setModalVisible(!modalVisible);
    };

    return (
        <View style={{flex:1,backgroundColor: Colors.background}}>


            <SafeAreaView style={{ flex: 1, padding: 24 }}>
                <View style={{
                    flex:3,
                    borderBottomLeftRadius:60,
                    borderBottomRightRadius:60,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Image style={{width:200,height:200, borderRadius:20}} source={require('../../assets/logo/logoA.jpg')}/>
                </View>
                <ScrollView>

                    <View style={{ padding: 24 }}>

                        <FormItem
                            style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                            labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                            textInputStyle={{ color: Colors.colorE }}
                            value={refereeID}
                            label="Referee ID"
                            onChangeText={(refereeID) => setRefereeID(refereeID)}
                            floatingLabel
                            isRequired
                        />

                        <View style={styles.centeredView}>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert('Modal has been closed.');
                                    setModalVisible(!modalVisible);
                                }}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Image source={require('../../assets/images/success.png')}/>
                                        <Text style={{fontWeight:'bold',color:Colors.colorE,marginVertical:10,fontSize:17}}>Successfully Verified!</Text>
                                        <Text style={{fontWeight:'bold',color:Colors.colorB,marginVertical:10,fontSize:12, textAlign:'center'}}>After recommend you by your
                                            referee account will active after
                                            24 hours security period</Text>
                                        <TouchableOpacity onPress={handleStart} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50,width:240}}>
                                            <Text style={{fontWeight:'bold',color:Colors.colorD}}>Next</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.blurredBackground} />
                            </Modal>

                            <TouchableOpacity onPress={() => setModalVisible(true)} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50,width:340}}>
                                <Text style={{fontWeight:'bold',color:Colors.colorD}}>Submit</Text>
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
