import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Account',
                    headerShown: false, // Hide the header for this tab
                }}
                
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false, // Hide the header for this tab
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    headerShown: false, // Hide the header for this tab
                }}
            />
        </Tabs>
    );
}
