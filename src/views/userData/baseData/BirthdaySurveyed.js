// BirthdaySurveyed.js
import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSurveyContext } from '../../../SurveyContext';

const BirthdaySurveyed = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const navigation = useNavigation();
  const { surveyData, dispatch } = useSurveyContext();

  console.log('Nombre del encuestado:', surveyData.nombre);
  console.log('Edad del encuestado:', surveyData.edad);

  const handleNext = () => {
    // Combina los valores de día, mes y año en un solo dato tipo String en formato "Dia/Mes/Año"
    const birthday = `${day}/${month}/${year}`;
    dispatch({ type: 'ADD_ANSWER', questionId: 'cumpleanos', answer: birthday });
    navigation.navigate('Sex');
  };

  return (
    <View className="flex-1 bg-[#5F6896]">
      <View className="flex-1 justify-center items-center mt-10">
        <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">¿Cuál es su fecha de nacimiento?</Text>

        <TextInput
          className="h-[40] w-2/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
          placeholder="Día"
          placeholderTextColor="#DCDEE898"
          value={day}
          onChangeText={(text) => setDay(text)}
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput
          className="h-[40] w-2/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
          placeholder="Mes"
          placeholderTextColor="#DCDEE898"
          value={month}
          onChangeText={(text) => setMonth(text)}
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput
          className="h-[40] w-2/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
          placeholder="Año"
          placeholderTextColor="#DCDEE898"
          value={year}
          onChangeText={(text) => setYear(text)}
          keyboardType="numeric"
          maxLength={4}
        />
        <View className="flex-row space-x-4">
          <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate('Age')}>
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

export default BirthdaySurveyed;
