import * as React from 'react';
import {
    Image,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Modal,
    Alert,
    Pressable,
    StyleSheet,
} from 'react-native';
import {Colors} from '../constants/colors'


export default function RegisterVerifyNICCardScreen({navigation}) {
    const [modalVisible, setModalVisible] = React.useState(false);
    const handleStart = () => {
        navigation.navigate('RegisterStep3');
        setModalVisible(!modalVisible);
    };

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
    return (
        <View style={{flex:1,backgroundColor: Colors.background}}>

            <View style={{flex:5, alignItems:'center'}} >
                <Image style={{width:340,height:300, borderRadius:20}} source={require('../assets/takePhoto.png')}/>
            </View>
            <View style={{flex:5, alignItems:'center',alignContent:'center'}} >
                <View style={{width:340,backgroundColor:Colors.colorB,borderRadius:30}}>
                    <Text style={{paddingHorizontal:40,paddingVertical:10,marginTop:20,textAlign:'center',fontWeight:'bold',color:Colors.colorD,fontSize:20}}>
                        Take a photo of the FRONT of your NIC
                    </Text>
                    <Text style={{paddingHorizontal:40,paddingVertical:10,marginBottom:20, textAlign:'center',fontWeight:'bold',color:Colors.colorD,fontSize:17}}>
                        Position your ID in the indicated zone
                    </Text>

                </View>

            </View>
            <View style={{flex:2, alignItems:'center'}} >
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
                                <Image source={require('../assets/images/success.png')}/>
                                <Text style={{fontWeight:'bold',color:Colors.colorE,marginVertical:10}}>NIC Verification is Successful!</Text>
                                <TouchableOpacity onPress={handleStart} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50,width:240}}>
                                    <Text style={{fontWeight:'bold',color:Colors.colorD}}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.blurredBackground} />
                    </Modal>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50,width:340}}>
                        <Text style={{fontWeight:'bold',color:Colors.colorD}}>Start</Text>
                    </TouchableOpacity>
                </View>
            {/*<TouchableOpacity onPress={()=>navigation.navigate('RegisterStep3')} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50,width:340}}>*/}
            {/*    <Text style={{fontWeight:'bold',color:Colors.colorD}}>Start</Text>*/}
            {/*</TouchableOpacity>*/}
            </View>


        </View>

    );

}
