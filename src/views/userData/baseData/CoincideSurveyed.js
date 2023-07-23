// CoincideSurveyed.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { useSurveyContext } from '../../../SurveyContext';

const CoincideSurveyed = () => {
  const [coincide, setCoincide] = useState(null);
  const navigation = useNavigation();
  const { dispatch } = useSurveyContext(); // Acceder al dispatch del contexto


  const options = [
    { label: 'Si', value: '1' },
    { label: 'No', value: '0' },
  ];

  const handleCoincideSelect = (value) => {
    setCoincide(value);
  };

  const renderItem = ({ item }) => {
    // Verificar si la opción está seleccionada
    const isSelected = coincide === item.value;

    return (
      <TouchableOpacity
        className={`py-4 px-8 rounded-lg my-auto mr-2 ${isSelected ? 'bg-primary' : 'bg-white'}`}
        onPress={() => handleCoincideSelect(item.value)}
      >
        <Text className={`text-[#3E3E44] font-bold ${isSelected ? 'text-white' : 'text-black'}`}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const handleNext = () => {
    // Enviar la opción seleccionada al contexto
    dispatch({ type: 'ADD_ANSWER', questionId: 'coincide', answer: coincide });
    navigation.navigate('EducationalLevel');
  };

  return (
    <View className="flex-1 bg-[#5F6896] justify-center">
      <View className="flex-1 mt-12 items-center">
        <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">¿Este coincide con el que le asignaron al nacer?</Text>
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={(item) => item.value}
          extraData={coincide}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View className="flex-row space-x-4">
          <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate('Sex')}>
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

export default CoincideSurveyed;
