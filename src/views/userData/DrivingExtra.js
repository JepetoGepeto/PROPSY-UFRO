// DrivingExtra.js
import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSurveyContext } from '../../../SurveyContext';

const DrivingExtra = () => {
  const [driving, setDriving] = useState('');
  const navigation = useNavigation();
  const { dispatch } = useSurveyContext(); // Acceder al dispatch del contexto

  const handleNext = () => {
    // Verificar si se ha ingresado una respuesta
    if (driving !== '') {
      // Enviar la respuesta al contexto
      dispatch({ type: 'ADD_ANSWER', questionId: 'renovacion', answer: driving });
      navigation.navigate('Language');
    } else {
      // Si no se ha ingresado una respuesta, mostrar una alerta o mensaje al usuario para que complete el campo
      alert('Por favor, indique los años en que se renovó la licencia de conducir antes de continuar.');
    }
  };

  return (
    <View className="flex-1 bg-[#5F6896]">
      <View className="flex-1 justify-center items-center mt-10">
        <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">En caso de que su respuesta anterior fuera “Si” ¿Por cuántos años se la renovaron?</Text>
        <TextInput
          className="h-[40] w-2/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
          placeholder="Indique los años en que se renovó la licencia de conducir"
          placeholderTextColor="#DCDEE898"
          value={driving}
          onChangeText={text => setDriving(text)}
        />
        <View className="flex-row space-x-4">
          <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate('Driving')}>
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

export default DrivingExtra;
