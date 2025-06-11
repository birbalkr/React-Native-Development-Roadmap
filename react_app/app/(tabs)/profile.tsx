import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { AppContexts } from '@/context/Context';

const Profile = () => {
    const { userDetail } = useContext(AppContexts);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Profile</Text>
            {userDetail.map((user) => (
                <Text key={user.key} style={styles.userText}>
                    Name: {user.title}
                </Text>
            ))}
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    userText: {
        fontSize: 18,
        marginBottom: 10,
    },
});
