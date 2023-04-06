import React from 'react';
import {View, Text} from 'react-native';

const home = () => {
    return (
        <View style={{ flex: 1,width:'100%',justifyContent:'center' }}>
        <View>
            <Text style={{margin:10, color:'black'}}>
                Home
            </Text>
        </View>
        </View>
    );
};

export default home;
