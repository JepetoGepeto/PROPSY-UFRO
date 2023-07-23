import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSurveyContext } from '../../../SurveyContext';

const SleepingContext = () => {
  const navigation = useNavigation();
  const { dispatch } = useSurveyContext(); // Acceder al dispatch del contexto
  
  const [sleepingFrequency, setSleepingFrequency] = useState('');

  const handleNext = () => {
    if (sleepingFrequency.trim() !== '') {
      // Enviar la frecuencia de problemas para dormir al contexto
      dispatch({ type: 'ADD_ANSWER', questionId: 'problemasDormir', answer: sleepingFrequency });
      navigation.navigate('Sleeping1');
    } else {
      // Si no se ha ingresado la frecuencia, mostrar una alerta o mensaje al usuario para que ingrese la información
      alert('Por favor, ingrese la frecuencia de problemas para dormir antes de continuar.');
    }
  };

  return (
    <View className="flex-1 bg-[#5F6896]">
      <View className="flex-1 justify-center items-center mt-10">
        <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">Durante el último mes, ¿con qué frecuencia ha tenido problemas para dormir debido a que?</Text>
        {/* Agregar un TextInput para que el usuario ingrese la frecuencia */}
        <TextInput
          className="h-[40] w-2/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
          placeholder="Frecuencia de problemas para dormir"
          placeholderTextColor="#DCDEE898"
          value={sleepingFrequency}
          onChangeText={text => setSleepingFrequency(text)}
        />
        <View className="flex-row space-x-4">
          <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate('SleepingHours')}>
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

export default SleepingContext;
