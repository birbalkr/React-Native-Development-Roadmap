import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Account = () => {
    const [data, setData] = useState('');
    const [retrievedData, setRetrievedData] = useState('');

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('DATA', data);
            console.log('Data saved');
        } catch (e) {
            console.log('Saving error:', e);
        }
    };

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('DATA');
            if (value !== null) {
                setRetrievedData(value);
                console.log('Retrieved:', value);
            } else {
                setRetrievedData('No data found');
            }
        } catch (error) {
            console.log('Retrieving error:', error);
            setRetrievedData('Error retrieving data');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>AsyncStorage Example</Text>

            <TextInput
                style={styles.input}
                placeholder="Type something..."
                value={data}
                onChangeText={text => setData(text)}
            />

            <TouchableOpacity style={styles.button} onPress={storeData}>
                <Text style={styles.buttonText}>Save Data</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={getData}>
                <Text style={styles.buttonText}>Get Data</Text>
            </TouchableOpacity>

            <Text style={styles.resultText}>Retrieved Data: {retrievedData}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    header: { fontSize: 20, marginBottom: 20 },
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: { color: 'white' },
    resultText: { marginTop: 30, fontSize: 16, color: 'green' },
});

export default Account;
