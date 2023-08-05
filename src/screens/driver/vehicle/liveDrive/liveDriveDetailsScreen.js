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
    StyleSheet,
} from 'react-native';
import {Colors} from '../../../../constants/colors'
import SwitchSelector from "react-native-switch-selector";
import SearchableDropdown from 'react-native-searchable-dropdown';



export default function LiveDriveDetailsScreen({navigation}) {
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

    const [selectedItems, setSelectedItems] = React.useState(null);
    const [privatePublic, setPrivatePublic] = React.useState('Private');
    const [goodPassenger, setGoodPassenger] = React.useState('Passengers');
    const [freePaidGood, setFreePaidGood] = React.useState('Paid');
    const [freePaidPassenger, setFreePaidPassenger] = React.useState('Paid');
    const [kiloLtr, setKiloLtr] = React.useState('Kilogram');


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

                        {freePaidGood == 'Paid' &&

                        <>
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
                                    <Text style={{color:Colors.contentLetters}}>{kiloLtr=='Kilogram' ? "Availability (Kg)" : "Availability (L)"}</Text>
                                </View>
                                <View style={{flexDirection:'column', flex:3}}>
                                    <TextInput
                                        style={styles.input}
                                        // onChangeText={onChangeText}
                                    />
                                </View>
                            </View>

                            <View style={{flexDirection:'row', paddingVertical:2}}>
                                <View style={{flexDirection:'column', justifyContent:'center', flex:9}}>
                                    <Text style={{color:Colors.contentLetters}}>{kiloLtr=='Kilogram' ? "Fee for First 5 Kilogram (LKR)" : "Fee for First 5 Liters (LKR)"}</Text>
                                </View>
                                <View style={{flexDirection:'column', flex:3}}>
                                    <TextInput
                                        style={styles.input}
                                        // onChangeText={onChangeText}
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection:'row', paddingVertical:2}}>
                                <View style={{flexDirection:'column', justifyContent:'center', flex:9}}>
                                    <Text style={{color:Colors.contentLetters}}>{kiloLtr=='Kilogram' ? "Fee for a Additional Kilogram (LKR)" : "Fee for a Additional Liter (LKR)"}</Text>
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

                        {freePaidPassenger == 'Paid' &&

                        <>
                            <View style={{flexDirection:'row', paddingVertical:2}}>
                                <View style={{flexDirection:'column', justifyContent:'center', flex:9}}>
                                    <Text style={{color:Colors.contentLetters}}>Availability (Number of seats)</Text>
                                </View>
                                <View style={{flexDirection:'column', flex:3}}>
                                    <TextInput
                                        style={styles.input}
                                        // onChangeText={onChangeText}
                                    />
                                </View>
                            </View>

                            <View style={{flexDirection:'row', paddingVertical:2}}>
                                <View style={{flexDirection:'column', justifyContent:'center', flex:9}}>
                                    <Text style={{color:Colors.contentLetters}}>Fee for First Kilometer</Text>
                                </View>
                                <View style={{flexDirection:'column', flex:3}}>
                                    <TextInput
                                        style={styles.input}
                                        // onChangeText={onChangeText}
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection:'row', paddingVertical:2}}>
                                <View style={{flexDirection:'column', justifyContent:'center', flex:9}}>
                                    <Text style={{color:Colors.contentLetters}}>Fee for Additional Kilometer</Text>
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

                    </>

                    }




                    <View style={{ padding: 24 }}>




                        <TouchableOpacity onPress={()=>navigation.navigate('liveDriveMapCreate')} style={{backgroundColor:Colors.colorA,padding:15,alignItems:'center',borderRadius:50}}>
                            <Text style={{fontWeight:'bold',color:Colors.colorD}}>Next</Text>
                        </TouchableOpacity>


                    </View>


                </ScrollView>


            </SafeAreaView>
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
});
