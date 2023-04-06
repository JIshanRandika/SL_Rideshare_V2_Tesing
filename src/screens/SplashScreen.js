import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const splashScreen = () => {
    return (
        <View style={{ flex: 1,width:'100%',justifyContent:'center' }}>
        <View
            style={{flex: 1, justifyContent: 'center', backgroundColor: '#114953'}}>
            <ActivityIndicator size="large" color="#ffffff" />
        </View>
        </View>
    );
};

export default splashScreen;
