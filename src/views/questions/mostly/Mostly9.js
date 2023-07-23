// Mostly9.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useSurveyContext } from '../../../SurveyContext';

const Mostly9 = () => {
  const [answer, setAnswer] = useState(null);
  const navigation = useNavigation();
  const { dispatch } = useSurveyContext(); // Acceder al dispatch del contexto

  const options = [
    { label: 'Totalmente en desacuerdo', value: '1' },
    { label: 'En desacuerdo', value: '2' },
    { label: 'De acuerdo', value: '3' },
    { label: 'Totalmente de acuerdo', value: '4' },
  ];

  const handleAnswerSelect = (value) => {
    setAnswer(value);
  };

  const renderItem = ({ item }) => {
    const isSelected = answer === item.value;

    return (
      <TouchableOpacity
        style={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 8,
          marginHorizontal: 8,
          backgroundColor: isSelected ? '#3E3E44' : '#FFFFFF',
        }}
        onPress={() => handleAnswerSelect(item.value)}
      >
        <Text style={{ color: isSelected ? '#FFFFFF' : '#3E3E44', fontWeight: 'bold' }}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const handleNext = () => {
    // Verificar si se ha seleccionado alguna opción
    if (answer !== null) {
      // Enviar la opción seleccionada al contexto
      dispatch({ type: 'ADD_ANSWER', questionId: 'mostly9', answer });
      navigation.navigate('Mostly10');
    } else {
      // Si no se ha seleccionado ninguna opción, mostrar una alerta o mensaje al usuario para que seleccione una opción
      alert('Por favor, seleccione una opción antes de continuar.');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#5F6896', justifyContent: 'center' }}>
      <View style={{ flex: 1, marginTop: 48, alignItems: 'center' }}>
        <Text style={{ fontSize: 48, color: '#3E3E44', backgroundColor: '#3E3E44', marginBottom: 16, padding: 16, borderRadius: 8, fontWeight: 'bold', transform: [{ rotate: '180deg' }] }}>La gran mayoría de las personas de 60 años o más tienen una serie de discapacidades que les hace depender de los demás.</Text>
        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={(item) => item.value}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, marginBottom: 32 }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
          <TouchableOpacity style={{ backgroundColor: '#3E3E44', borderRadius: 8, width: 64, height: 64, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Mostly8')}>
            <Icon name="arrow-left" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#3E3E44', borderRadius: 8, width: 64, height: 64, justifyContent: 'center', alignItems: 'center' }} onPress={handleNext}>
            <Icon name="arrow-right" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Mostly9;
