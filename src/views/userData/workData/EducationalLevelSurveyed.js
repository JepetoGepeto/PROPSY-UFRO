// EducationalLevelSurveyed.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSurveyContext } from '../../../SurveyContext';

const EducationalLevelSurveyed = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();
  const { dispatch } = useSurveyContext(); // Acceder al dispatch del contexto

  const options = [
    { label: 'Básica Incompleta', value: '1' },
    { label: 'Básica Completa', value: '2' },
    { label: 'Media Incompleta', value: '3' },
    { label: 'Media Completa', value: '4' },
    { label: 'Universitaria Incompleta', value: '5' },
    { label: 'Universitaria Completa', value: '6' },
    { label: 'Maestría', value: '7' },
    { label: 'Doctorado', value: '8' },
  ];

  const handleEducationalLevelSelect = (value) => {
    setSelectedOption(value);
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedOption === item.value;

    return (
      <TouchableOpacity
        className={`py-4 px-8 rounded-lg my-auto mr-2 ${isSelected ? 'bg-primary' : 'bg-white'}`}
        onPress={() => handleEducationalLevelSelect(item.value)}
      >
        <Text className={`text-[#3E3E44] font-bold ${isSelected ? 'text-white' : 'text-black'}`}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      dispatch({ type: 'ADD_ANSWER', questionId: 'nivel_estudios', answer: selectedOption });
    }
    navigation.navigate('EducationIncomplete');
  };

  return (
    <View className="flex-1 bg-[#5F6896] justify-center">
      <View className="flex-1 mt-12 items-center">
        <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">¿Cuál es su nivel de estudios?</Text>
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={(item) => item.value}
          extraData={selectedOption}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View className="flex-row space-x-4">
          <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate('Coincide')}>
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

export default EducationalLevelSurveyed;