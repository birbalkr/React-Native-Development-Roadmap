import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';

export default function index() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <Link href="/details" asChild>
                <Button title="Go to Details" />
            </Link>
        </View>
    );
}
