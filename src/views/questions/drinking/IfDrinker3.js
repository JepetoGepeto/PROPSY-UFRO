// IfDrinker3.js
import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const IfDrinker3 = () => {
  const [answer, setAnswer] = useState('');
  const navigation = useNavigation();

  const handleNext = () => {
    // Si el usuario no ha ingresado una respuesta, simplemente navega a la siguiente pantalla
    if (answer.trim() !== '') {
      dispatch({ type: 'ADD_ANSWER', questionId: 'edadInicioBeber', answer: answer });
    }
    navigation.navigate("IfExDrinkerContext");
  };

  return (
    <View className="flex-1 bg-[#5F6896]">
      <View className="flex-1 justify-center items-center mt-10">
        <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">¿A qué edad comenzó a beber?</Text>
        <TextInput
          className="h-[40] w-2/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
          placeholder="Indique a qué edad comenzó a beber el encuestado"
          placeholderTextColor={'#DCDEE898'}
          value={answer}
          onChangeText={text => setAnswer(text)}
        />
        <View className="flex-row space-x-4">
          <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate('IfDrinker2')}>
            <Icon name="arrow-left" size={50} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-tertiary rounded-lg w-24 h-24 justify-center items-center" onPress={handleNext}>
            <Icon name="arrow-right" size={50} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default IfDrinker3;
