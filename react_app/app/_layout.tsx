import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { AppProvider } from '../context/Context'; // Import the context provider
import { store } from '../redux/store/store'; // Import the Redux store

export default function Layout() {
  return (
    <Provider store={store}>
      <AppProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer>
            <Drawer.Screen
              name="(tabs)"
              options={{
                drawerLabel: 'Home',
                title: '',
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="home-outline" size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="index"
              options={{
                drawerLabel: 'Index',
                title: 'Index',
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="list-outline" size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="profile"
              options={{
                drawerLabel: 'Profile',
                title: 'User Profile',
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="person-outline" size={size} color={color} />
                ),
              }}
            />
          </Drawer>
        </GestureHandlerRootView>
      </AppProvider>
    </Provider>
  );
}
