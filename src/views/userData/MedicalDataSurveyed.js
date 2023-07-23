import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { useSurveyContext } from '../../../SurveyContext';

const MedicalDataSurveyed = () => {
  const [selectedMedical, setSelectedMedical] = useState(null);
  const navigation = useNavigation();
  const { dispatch } = useSurveyContext(); // Acceder al dispatch del contexto

  const options = [
    { label: 'Diabetes', value: '1' },
    { label: 'Hipertensión', value: '2' },
    { label: 'Enfermedades Coronarias', value: '3' },
    { label: 'Enfermedades tiroideas', value: '4' },
    { label: 'Otro', value: '5' },
  ];

  const handleMedicalSelect = (value) => {
    setSelectedMedical(value);
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedMedical === item.value;

    return (
      <TouchableOpacity
        className={`py-4 px-8 rounded-lg my-auto mr-2 ${isSelected ? 'bg-primary' : 'bg-white'}`}
        onPress={() => handleMedicalSelect(item.value)}
      >
        <Text className={`text-[#3E3E44] font-bold ${isSelected ? 'text-white' : 'text-black'}`}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const handleNext = () => {
    // Verificar si se ha seleccionado alguna opción
    if (selectedMedical !== null) {
      // Enviar la opción seleccionada al contexto
      dispatch({ type: 'ADD_ANSWER', questionId: 'diagnostico', answer: selectedMedical });
      navigation.navigate('MedicalOther');
    } else {
      // Si no se ha seleccionado ninguna opción, mostrar una alerta o mensaje al usuario para que seleccione una opción
      alert('Por favor, seleccione una opción antes de continuar.');
    }
  };

  return (
    <View className="flex-1 bg-[#5F6896] justify-center">
      <View className="flex-1 mt-12 items-center">
        <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">¿Tiene alguno de los siguientes diagnósticos médicos?</Text>
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={(item) => item.value}
          extraData={selectedMedical}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View className="flex-row space-x-4">
          <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate('Agrupation')}>
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

export default MedicalDataSurveyed;
