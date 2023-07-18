import React from 'react';
import {Text, View, Image } from 'react-native';


const LandingFinal = () => {

  return (
    <View className="flex-1 bg-[#5F6896]">
      <View className="bg-[#FFFFFF] flex-row justify-center items-center p-20 rounded-b-[35]">
        <Image source={require('../../assets/images/LabCES.jpg')} className="w-[296] h-[102] rotate-180" />
        <Text className="text-[#3E3E44] text-6xl mx-5 rotate-180">Gracias por participar</Text>
        <Image source={require('../../assets/images/UFRO.png')} className="w-[296] h-[102] rotate-180" />
      </View>
      <View className="flex-1 justify-center items-center">
      <Text className="text-[#ffffff] text-6xl mx-5">Datos guardados</Text>
        </View>
    </View>

  );
}

export default LandingFinal; 