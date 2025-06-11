import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(tabs)" // route group that contains tabs
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="Index" // route group that contains tabs
          options={{
            drawerLabel: 'Index',
            title: 'Index',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
