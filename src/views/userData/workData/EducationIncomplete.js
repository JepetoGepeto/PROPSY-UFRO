import React, { useState } from 'react';
import {View, TouchableOpacity, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const EducationIncomplete = () => {
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-[#5F6896]">
          <View className="flex-1 justify-center items-center mt-10">
            <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">En caso de haber seleccionado alguna “incompleta”, por favor indique ¿Cuál fue el último nivel cursado?</Text>
            <TextInput
              className="h-[40] w-3/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
              placeholder="Ingrese el último nivel cursado, o deje vacio en caso de no aplicar"
              placeholderTextColor={'#DCDEE898'}
              value={inputText}
              onChangeText={text => setInputText(text)}
            />
            <View className="flex-row space-x-4">
                    <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("EducationalLevel")}>
                        <Icon name="arrow-left" size={50} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-tertiary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Ocupation")}>
                        <Icon name="arrow-right" size={50} color="#000000" />
                    </TouchableOpacity>
                </View>
          </View>
        </View>
      );
    


};
export default EducationIncomplete;