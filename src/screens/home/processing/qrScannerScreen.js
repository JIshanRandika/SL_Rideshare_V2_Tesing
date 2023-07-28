import * as React from 'react';
import {Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors'
import QRCode from 'react-native-qrcode-svg';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});



export default function ProcessingScreen({navigation}) {

    const [scannedUrl, setScannedUrl] = React.useState('');

    const openLink = () => {
        setScannedUrl('')
        Linking.openURL(scannedUrl).catch(err =>
            console.error('An error occurred', err)
        );
        setScannedUrl('')

    };
    const onSuccess = (e) => {
        setScannedUrl(e.data)
        Linking.openURL(e.data).catch(err =>
            console.error('An error occurred', err)
        );
        navigation.navigate('qrScan')
    };

    return (
        <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.off}
            showMarker={true}
            reactivate={true}
            // bottomContent={
            //     <TouchableOpacity style={styles.buttonTouchable}>
            //         <Text style={styles.buttonText}>OK. Got it!</Text>
            //         <Text>{scannedUrl.toString()}</Text>
            //     </TouchableOpacity>
            // }
        />


    );
}
