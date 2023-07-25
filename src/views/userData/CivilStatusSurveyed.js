// CivilStatusSurveyed.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSurveyContext } from '../../SurveyContext';

const CivilStatusSurveyed = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const navigation = useNavigation();
  const { dispatch } = useSurveyContext(); // Acceder al dispatch del contexto

  const options = [
    { label: 'Soltera/o', value: '1' },
    { label: 'Separada/o', value: '2' },
    { label: 'En pareja', value: '3' },
    { label: 'Casada/o', value: '4' },
    { label: 'Viuda/o', value: '5' },
    { label: 'Otro', value: '6' },
  ];

  const handleCivilStatusSelect = (value) => {
    setSelectedStatus(value);
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedStatus === item.value;

    return (
      <TouchableOpacity
        className={`py-4 px-8 rounded-lg my-auto mr-2 ${isSelected ? 'bg-primary' : 'bg-white'}`}
        onPress={() => handleCivilStatusSelect(item.value)}
      >
        <Text className={`text-[#3E3E44] font-bold ${isSelected ? 'text-white' : 'text-black'}`}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const handleNext = () => {
    if (selectedStatus !== null) {
      dispatch({ type: 'ADD_ANSWER', questionId: 'estadoCivil', answer: selectedStatus });
    }
    navigation.navigate('HealthSurveyed');
  };

  return (
    <View className="flex-1 bg-[#5F6896] justify-center">
      <View className="flex-1 mt-12 items-center">
        <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">¿Cuál es su estado civil?</Text>
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={(item) => item.value}
          extraData={selectedStatus}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View className="flex-row space-x-4">
          <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate('Job')}>
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

export default CivilStatusSurveyed;
