import { Platform, View, Text } from 'react-native';
import '.././global.css'; // assuming Tailwind setup

export default function Index() {
  return (
    <View style={{ flex: 1 }}>

      {Platform.OS === 'ios' && (
        <View className='bg-pink-500 flex-1'>
          <View style={{ backgroundColor: 'green', flex: 2 }} />
          <View style={{ backgroundColor: 'blue', flex: 5 }} />
          <View style={{ backgroundColor: 'purple', flex: 1 }} />
          <View style={{ backgroundColor: 'orange', flex: 3 }} />
        </View>
      )}

      {Platform.OS === 'android' && (
        <View style={{ backgroundColor: 'red', flex: 1 }}>
          <View style={{ backgroundColor: 'green', flex: 1 }} />
          <View style={{ backgroundColor: 'blue', flex: 1 }} />
          <View style={{ backgroundColor: 'purple', flex: 1 }} />
          <View style={{ backgroundColor: 'orange', flex: 1 }} />
        </View>
      )}


    </View>
  );
}
