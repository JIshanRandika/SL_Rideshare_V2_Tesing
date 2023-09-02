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
import {Colors} from '../../../constants/colors'
import SwitchSelector from "react-native-switch-selector";
import SearchableDropdown from 'react-native-searchable-dropdown';


export default function AvailableDrivesMapSearchScreen({navigation}) {
    const [username, setUsername] = React.useState('');
    const optionsPBG = [
        { label: "Passengers", value: "Passengers" },
        { label: "Both", value: "Both" },
        { label: "Goods", value: "Goods" }
    ];
    const optionsPP = [
        { label: "Private", value: "Private" },
        { label: "Public", value: "Public" }
    ];
    const optionsFreePaid = [
        { label: "Paid", value: "Paid" },
        { label: "Free", value: "Free" }
    ];

    const optionsKL = [
        { label: "Kilogram", value: "Kilogram" },
        { label: "Liter", value: "Liter" }
    ];

    const items = [
        {
            id: 1,
            name: 'Group 1',
        },
        {
            id: 2,
            name: 'Group 2',
        },
        {
            id: 3,
            name: 'Group 3',
        },
        {
            id: 4,
            name: 'Group 4',
        },

    ];

    const routes = [
        {
            id: 1,
            name: 'Home',
        },
        {
            id: 2,
            name: 'Office',
        },
        {
            id: 3,
            name: 'Company',
        },
        {
            id: 4,
            name: 'Not a favorite route',
        },

    ];

    const [selectedRoutes, setSelectedRoutes] = React.useState('Not a favorite route');

    const [selectedItems, setSelectedItems] = React.useState(null);
    const [privatePublic, setPrivatePublic] = React.useState('Private');
    const [goodPassenger, setGoodPassenger] = React.useState('Passengers');
    const [freePaidGood, setFreePaidGood] = React.useState('Paid');
    const [freePaidPassenger, setFreePaidPassenger] = React.useState('Paid');
    const [kiloLtr, setKiloLtr] = React.useState('Kilogram');


    const [modalVisible, setModalVisible] = React.useState(false);
    const handleStart = () => {
        setModalVisible(!modalVisible);
        navigation.navigate('availableDrivesMap');
    };

    const handleItemSelect = (item) => {
        setSelectedItems(item.name);
    };

    const handleItemRemove = (item) => {
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.filter((sitem) => sitem.id !== item.id)
        );
    };



    return (
        <View style={{flex:1,backgroundColor: Colors.background}}>


            <SafeAreaView style={{ flex: 1, padding: 24 }}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <View style={{marginVertical:3}}>
                        <SwitchSelector
                            textColor={Colors.colorA} //'#7a44cf'
                            selectedColor={Colors.colorD}
                            buttonColor={Colors.colorA}
                            borderColor={Colors.colorA}
                            hasPadding
                            options={optionsPP}
                            initial={0}
                            onPress={(value) => {
                                setPrivatePublic(value);
                                setSelectedItems(null);
                            }}
                        />
                    </View>


                    {privatePublic=="Private" &&
                    <View>
                        <SearchableDropdown
                            onItemSelect={(item) => setSelectedItems(item)}
                            containerStyle={{ padding: 5 }}
                            onRemoveItem={handleItemRemove}
                            itemStyle={{
                                padding: 10,
                                marginTop: 2,
                                backgroundColor: '#ddd',
                                borderColor: '#bbb',
                                borderWidth: 1,
                                borderRadius: 5,
                            }}
                            itemTextStyle={{ color: '#222' }}
                            itemsContainerStyle={{ maxHeight: 140 }}
                            items={items}
                            // defaultIndex={2}
                            placeholder='Search Group Name'
                            placeholderTextColor= {Colors.contentLetters}
                            resetValue={false}
                            textInputProps={{
                                // placeholder: 'placeholder',
                                placeholderColor:'black',
                                underlineColorAndroid: 'transparent',
                                style: {
                                    padding: 12,
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    borderRadius: 5,
                                    color:'#ccc'
                                },

                                // value:selectedItems ? selectedItems.name : null

                                // onTextChange: (text) => alert(text),
                            }}
                            listProps={{
                                nestedScrollEnabled: true,
                            }}
                        />
                        <View style={{flexDirection:'row', padding:10, alignItems:'center'}}>
                            <Text style={{color:Colors.contentLetters, fontSize:15}}>{selectedItems ? 'Selected Group Name: ': null}</Text>
                            <Text style={{color:Colors.colorA, fontSize:15, fontWeight:'bold'}}>{selectedItems ? selectedItems.name : null}</Text>
                        </View>




                    </View>

                    }



                    <View style={{marginVertical:3}}>
                        <SwitchSelector
                            textColor={Colors.colorA} //'#7a44cf'
                            selectedColor={Colors.colorD}
                            buttonColor={Colors.colorA}
                            borderColor={Colors.colorA}
                            hasPadding
                            options={optionsPBG}
                            initial={0}
                            onPress={(value) => {
                                setGoodPassenger(value);
                            }}
                        />
                    </View>

                    {(goodPassenger == "Goods" || goodPassenger == "Both") &&
                    <>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:Colors.contentLetters, fontWeight:'bold'}}>Goods</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'100%', height:2, backgroundColor:Colors.contentLetters,borderRadius:50}}>
                            </View>
                        </View>
                        <View style={{marginVertical:10}}>

                            <SwitchSelector
                                textColor={Colors.colorA} //'#7a44cf'
                                selectedColor={Colors.colorD}
                                buttonColor={Colors.colorA}
                                borderColor={Colors.colorA}
                                hasPadding
                                options={optionsFreePaid}
                                initial={0}
                                onPress={(value) => {
                                    setFreePaidGood(value);
                                }}
                            />
                        </View>
                        <View style={{marginVertical:10}}>
                            <SwitchSelector
                                textColor={Colors.colorA} //'#7a44cf'
                                selectedColor={Colors.colorD}
                                buttonColor={Colors.colorA}
                                borderColor={Colors.colorA}
                                hasPadding
                                options={optionsKL}
                                initial={0}
                                onPress={(value) => {
                                    setKiloLtr(value);
                                }}
                            />
                        </View>
                        <View style={{flexDirection:'row', paddingVertical:2}}>
                            <View style={{flexDirection:'column', justifyContent:'center', flex:9}}>
                                <Text style={{color:Colors.contentLetters}}>{kiloLtr=='Kilogram' ? "Space (Kg)" : "Space (L)"}</Text>
                            </View>
                            <View style={{flexDirection:'column', flex:3}}>
                                <TextInput
                                    style={styles.input}
                                    // onChangeText={onChangeText}
                                />
                            </View>
                        </View>





                    </>

                    }
                    {(goodPassenger == "Passengers" || goodPassenger == "Both") &&
                    <>

                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:Colors.contentLetters, fontWeight:'bold'}}>Passengers</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'100%', height:2, backgroundColor:Colors.contentLetters,borderRadius:50}}>
                            </View>
                        </View>

                        <View style={{marginVertical:10}}>

                            <SwitchSelector
                                textColor={Colors.colorA} //'#7a44cf'
                                selectedColor={Colors.colorD}
                                buttonColor={Colors.colorA}
                                borderColor={Colors.colorA}
                                hasPadding
                                options={optionsFreePaid}
                                initial={0}
                                onPress={(value) => {
                                    setFreePaidPassenger(value);
                                }}
                            />
                        </View>
                        <View style={{flexDirection:'row', paddingVertical:2}}>
                            <View style={{flexDirection:'column', justifyContent:'center', flex:9}}>
                                <Text style={{color:Colors.contentLetters}}>Space (Number of seats)</Text>
                            </View>
                            <View style={{flexDirection:'column', flex:3}}>
                                <TextInput
                                    style={styles.input}
                                    // onChangeText={onChangeText}
                                />
                            </View>
                        </View>


                    </>

                    }
                    <SearchableDropdown
                        onItemSelect={(item) => setSelectedRoutes(item)}
                        containerStyle={{ padding: 5 }}
                        onRemoveItem={handleItemRemove}
                        // selectedItems={}
                        itemStyle={{
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#ddd',
                            borderColor: '#bbb',
                            borderWidth: 1,
                            borderRadius: 5,
                        }}
                        itemTextStyle={{ color: '#222' }}
                        itemsContainerStyle={{ maxHeight: 140 }}
                        items={routes}
                        // defaultIndex={2}
                        placeholder='Search Favourite Route'
                        placeholderTextColor= {Colors.contentLetters}
                        resetValue={false}
                        textInputProps={{
                            // placeholder: 'placeholder',
                            placeholderColor:'black',
                            underlineColorAndroid: 'transparent',
                            style: {
                                padding: 12,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 5,
                                color:'#ccc'
                            },

                            // value:selectedItems ? selectedItems.name : null

                            // onTextChange: (text) => alert(text),
                        }}
                        listProps={{
                            nestedScrollEnabled: true,
                        }}
                    />
                    <View style={{flexDirection:'row', padding:10, alignItems:'center'}}>
                        <Text style={{color:Colors.contentLetters, fontSize:15}}>{selectedRoutes ? 'Route: ': null}</Text>
                        <Text style={{color:Colors.colorA, fontSize:15, fontWeight:'bold'}}>{selectedRoutes ? selectedRoutes.name : null}</Text>
                    </View>







                    {/*==================================*/}



                    <View style={{ padding: 24 }}>
                        {(selectedRoutes=='Not a favorite route'||selectedRoutes.name=='Not a favorite route')&&
                        <TouchableOpacity onPress={()=>navigation.navigate('availableDrivesMap')} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50}}>
                            <Text style={{fontWeight:'bold',color:Colors.colorD}}>Next</Text>
                        </TouchableOpacity>
                        }

                        {(selectedRoutes!='Not a favorite route'&& selectedRoutes.name!='Not a favorite route')&&
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50}}>
                            <Text style={{fontWeight:'bold',color:Colors.colorD}}>Finish</Text>
                        </TouchableOpacity>
                        }



                    </View>


                </ScrollView>


            </SafeAreaView>

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
                            <Text style={{fontWeight:'bold',color:Colors.colorE,marginVertical:10}}>Are you ready?</Text>

                            <TouchableOpacity onPress={handleStart} style={{backgroundColor:Colors.colorA,padding:10,alignItems:'center',borderRadius:50,width:240}}>
                                <Text style={{fontWeight:'bold',color:Colors.colorD}}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.blurredBackground} />
                </Modal>
            </View>


        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width:80,
        // margin: 12,
        borderWidth: 1,
        padding: 0,
        fontSize:12,
        color: Colors.colorE,
        borderColor: Colors.contentLetters,
        borderRadius: 10,
        paddingHorizontal:10
    },
    centeredView: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0
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
