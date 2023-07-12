import {Text, View, Image } from 'react-native';
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";


export default function App() {
    const navigation = useNavigation();

  return (
    <View className="flex-1 bg-[#5F6896]">
      <View className="bg-[#FFFFFF] flex-row justify-center items-end p-20 rounded-b-[35]">
        <Image source={require('../../assets/images/LabCES.jpg')} className="w-[296] h-[102]" />
        <Text className="text-[#3E3E44] text-3xl">PROPSY</Text>
        <Image source={require('../../assets/images/UFRO.png')} className="w-[296] h-[102]" />
      </View>
      <View className="flex-1 justify-center items-center">
        <Button text="INICIAR" onPress={() => console.log('Button pressed')} />
        </View>
    </View>

  );
}