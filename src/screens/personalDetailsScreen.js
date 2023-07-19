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
import {FormItem} from 'react-native-form-component';
import Passenger from '../assets/icons/Passenger';


export default function PersonalDetailsScreen({navigation}) {
    const [occupation, setOccupation] = React.useState('');
    const [shortDescription, setShortDescription] = React.useState('');
    const [diseases, setDiseases] = React.useState('');

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
                <ScrollView>

                    <View style={{ padding: 24 }}>

                        <FormItem
                            style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2}}
                            labelStyle={{fontWeight:3,color:Colors.colorE}}
                            textInputStyle={{ color: Colors.colorE }}
                            value={occupation}
                            label="Occupation"
                            onChangeText={(occupation) => setOccupation(occupation)}
                            floatingLabel
                            isRequired
                        />

                        <View>
                            <Text style={{ fontWeight: 3, color: Colors.colorE }}>Who are you? (short description)</Text>
                            <TextInput
                                style={{
                                    padding:10,
                                    borderRadius: 15,
                                    borderColor: Colors.colorD,
                                    borderWidth: 2,
                                    color: Colors.colorE,
                                    height: 200, // Adjust the height as needed
                                    textAlignVertical: 'top', // To align the text at the top of the text area
                                }}
                                multiline
                                value={shortDescription}
                                onChangeText={(shortDescription) => setShortDescription(shortDescription)}
                            />
                        </View>

                        <View style={{marginVertical:25}}>
                            <Text style={{ fontWeight: 3, color: Colors.colorE }}>What are the diseases and disability you had in
                                previous 3 months?</Text>
                            <TextInput
                                style={{
                                    padding:10,
                                    borderRadius: 15,
                                    borderColor: Colors.colorD,
                                    borderWidth: 2,
                                    color: Colors.colorE,
                                    height: 200, // Adjust the height as needed
                                    textAlignVertical: 'top', // To align the text at the top of the text area
                                }}
                                multiline
                                value={shortDescription}
                                onChangeText={(shortDescription) => setShortDescription(shortDescription)}
                            />
                        </View>


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
                                        <Passenger width={80}/>
                                        <Text style={{fontWeight:'bold',color:Colors.colorE,marginVertical:10}}>Go to your Email account and click the
                                            Email verification button to continue.</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} style={{backgroundColor:Colors.colorA,padding:10,alignItems:'center',borderRadius:50,width:100,height:40,marginRight:15}}>
                                                <Text style={{fontWeight:'bold',color:Colors.colorD}}>Back</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={handleStart} style={{backgroundColor:Colors.colorA,padding:10,alignItems:'center',borderRadius:50,width:100,height:40,marginLeft:15}}>
                                                <Text style={{fontWeight:'bold',color:Colors.colorD}}>Resend</Text>
                                            </TouchableOpacity>
                                        </View>

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
