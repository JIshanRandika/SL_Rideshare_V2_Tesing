import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../../constants/colors'
import {FormItem} from 'react-native-form-component';



export default function GroupsScreen({navigation}) {
    const [groupID, setGroupID] = React.useState('');
    const [groupName, setGroupName] = React.useState('');


    return (
        <View style={{flex:1,backgroundColor: Colors.background, padding:20}}>
            <View>
                <Text style={{color:Colors.contentLetters, fontWeight:'bold'}}>Add a group</Text>
                <View style={{width:'100%', height:2, backgroundColor:Colors.contentLetters,borderRadius:50}}>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column',flex:6, alignItems:'center',justifyContent:'center', paddingTop:20}}>
                            <FormItem
                                style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2,width:'100%'}}
                                labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                                textInputStyle={{ color: Colors.colorE }}
                                value={groupID}
                                label="Group ID"
                                onChangeText={(groupID) => setGroupID(groupID)}
                                floatingLabel
                                isRequired
                            />

                    </View>
                    <View style={{flexDirection:'column',flex:6, alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                // bottom: 20,
                                right: 20,
                                backgroundColor: Colors.colorA,
                                padding: 10,
                                borderRadius: 50,
                                shadowColor: Colors.colorE,
                                shadowOffset: {
                                    width: 0,
                                    height: 3,
                                },
                                shadowOpacity:  0.17,
                                shadowRadius: 3.05,
                                elevation: 4,

                                width:'80%',
                                alignItems:'center'
                            }}
                        >
                            <Text style={{ color: Colors.colorD, fontWeight: 'bold' }}>Send Request</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>


            {/*============================*/}


            <View>
                <Text style={{color:Colors.contentLetters, fontWeight:'bold'}}>Create a new group</Text>
                <View style={{width:'100%', height:2, backgroundColor:Colors.contentLetters,borderRadius:50}}>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column',flex:6, alignItems:'center',justifyContent:'center', paddingTop:20}}>
                        <FormItem
                            style={{borderRadius:50,borderColor:Colors.colorD,borderWidth:2,width:'100%'}}
                            labelStyle={{fontWeight:3,color:Colors.contentLetters}}
                            textInputStyle={{ color: Colors.colorE }}
                            value={groupName}
                            label="Group Name"
                            onChangeText={(groupName) => setGroupName(groupName)}
                            floatingLabel
                            isRequired
                        />

                    </View>
                    <View style={{flexDirection:'column',flex:6, alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                // bottom: 20,
                                right: 20,
                                backgroundColor: Colors.colorA,
                                padding: 10,
                                borderRadius: 50,
                                shadowColor: Colors.colorE,
                                shadowOffset: {
                                    width: 0,
                                    height: 3,
                                },
                                shadowOpacity:  0.17,
                                shadowRadius: 3.05,
                                elevation: 4,

                                width:'80%',
                                alignItems:'center'
                            }}
                        >
                            <Text style={{ color: Colors.colorD, fontWeight: 'bold' }}>Create</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>


            <View>
                <Text style={{color:Colors.contentLetters, fontWeight:'bold'}}>Your group list</Text>
                <View style={{width:'100%', height:2, backgroundColor:Colors.contentLetters,borderRadius:50}}>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column',flex:3}}>
                        <Text style={{color:Colors.contentLetters}}>Name</Text>
                    </View>
                    <View style={{flexDirection:'column',flex:2}}>
                        <Text style={{color:Colors.contentLetters}}>ID</Text>
                    </View>
                    <View style={{flexDirection:'column',flex:3}}>
                        <Text style={{color:Colors.contentLetters}}>Created at</Text>
                    </View>
                    <View style={{flexDirection:'column',flex:3}}>
                        <Text style={{color:Colors.contentLetters}}>Created by</Text>
                    </View>
                    <View style={{flexDirection:'column',flex:2}}>
                        <Text style={{color:Colors.contentLetters}}>Action</Text>
                    </View>
                </View>

                <View style={{width:'100%', height:2, backgroundColor:Colors.contentLetters,borderRadius:50}}>
                </View>

                <ScrollView>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column',flex:3}}>
                            <View style={{flexDirection:'row'}}>
                                <Image style={{width:15,height:15, borderRadius:20,marginTop:2}} source={require('../../../assets/my.jpg')}/>
                                <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>ABC Cab</Text>
                            </View>

                        </View>
                        <View style={{flexDirection:'column',flex:2}}>
                            <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>XD45A8</Text>
                        </View>
                        <View style={{flexDirection:'column',flex:3}}>
                            <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>4‎/‎14‎/‎2023 ‎9‎:‎01‎ ‎PM</Text>
                        </View>
                        <View style={{flexDirection:'column',flex:3}}>
                            <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>You</Text>
                        </View>
                        <View style={{flexDirection:'column',flex:2}}>
                            <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>Pending</Text>
                        </View>
                    </View>




                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'column',flex:3}}>
                            <View style={{flexDirection:'row'}}>
                                <Image style={{width:15,height:15, borderRadius:20,marginTop:2}} source={require('../../../assets/my.jpg')}/>
                                <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>ABC Cab</Text>
                            </View>

                        </View>
                        <View style={{flexDirection:'column',flex:2}}>
                            <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>XD45A8</Text>
                        </View>
                        <View style={{flexDirection:'column',flex:3}}>
                            <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>4‎/‎14‎/‎2023 ‎9‎:‎01‎ ‎PM</Text>
                        </View>
                        <View style={{flexDirection:'column',flex:3}}>
                            <Text style={{color:Colors.contentLetters, paddingHorizontal:2, fontSize:12}}>You</Text>
                        </View>
                        <View style={{flexDirection:'column',flex:2}}>
                            <TouchableOpacity
                                onPress={()=>navigation.navigate('groupProfileScreen')}
                                style={{
                                    position: 'absolute',
                                    // bottom: 20,

                                    backgroundColor: Colors.colorA,
                                    paddingVertical:5,
                                    borderRadius: 50,
                                    shadowColor: Colors.colorE,
                                    shadowOffset: {
                                        width: 0,
                                        height: 3,
                                    },
                                    shadowOpacity:  0.17,
                                    shadowRadius: 3.05,
                                    elevation: 4,

                                    width:'80%',
                                    alignItems:'center'
                                }}
                            >
                                <Text style={{ color: Colors.colorD, fontWeight: 'bold', fontSize:9 }}>Open</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>








            </View>


        </View>

    );
}
