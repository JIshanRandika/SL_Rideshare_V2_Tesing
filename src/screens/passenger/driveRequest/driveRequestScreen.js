import * as React from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

export default function DriveRequestScreen({ navigation }) {
    const [status, setStatus] = React.useState('Pending');

    const handleCancel = () => {
        if (status === 'Pending') {
            // Add your cancellation logic here
            setStatus('Cancelled');
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: Colors.background }}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <Text style={styles.statusText}>Status: {status}</Text>
                        <Text style={styles.locationText}>From: Kalutara</Text>
                        <Text style={styles.locationText}>To: Colombo</Text>
                        {status === 'Pending' && (
                            <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        backgroundColor: Colors.colorA,
        marginVertical: 20,
        borderRadius: 20,
        shadowColor: Colors.colorE,
        shadowOffset: {
            width: 0,
            height: 18,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.0,
        elevation: 24,
    },
    cardContent: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    statusText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.colorB,
    },
    locationText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: Colors.colorD,
    },
    cancelButton: {
        marginTop: 10,
        backgroundColor: Colors.colorB, // Customize the color as needed
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    cancelButtonText: {
        color: 'white', // Customize the text color as needed
        fontWeight: 'bold',
        textAlign:'center'
    },
});
