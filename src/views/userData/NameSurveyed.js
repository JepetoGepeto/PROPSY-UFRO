import React, { useState } from 'react';
import {View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const NombreEncuestado = () => {
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-[#5F6896]">
          <View className="flex-1 justify-center items-center mt-10">
            <TextInput
              className="h-[40] w-3/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
              placeholder="Nombre completo del encuestado"
              placeholderTextColor={'#DCDEE898'}
              value={inputText}
              onChangeText={text => setInputText(text)}
            />
            <TouchableOpacity className="bg-[#68d26c] rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Age")}>
              <Icon name="arrow-right" size={50} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
      );
    


};
export default NombreEncuestado;