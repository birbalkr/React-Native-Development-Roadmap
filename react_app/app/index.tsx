import { View } from "react-native";
import '.././global.css';

export default function Index() {
  return (
    <View style={{ flex: 1 }}>

      <View className='bg-pink-500 flex-1'></View>
      <View style={{backgroundColor:'green', flex: 1,}}></View>
      <View style={{backgroundColor:'blue', flex: 1,}}></View>
      <View style={{backgroundColor:'purple', flex: 1,}}></View>
      <View style={{backgroundColor:'orange', flex: 1,}}></View>
      
    </View>
  );
}

