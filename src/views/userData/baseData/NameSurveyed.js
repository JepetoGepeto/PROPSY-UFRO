import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'; // Import the useDispatch and useSelector hooks
import { addAnswer } from './surveyReducer'; // Import the addAnswer action

const NombreEncuestado = () => {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch(); // Create a dispatch function to use the action

  const surveyData = useSelector((state) => state.survey.surveyData); // Extract the surveyData array from the Redux store

  const handleNextScreen = () => {
    // Dispatch the addAnswer action to add the name to the surveyData array
    dispatch(addAnswer(inputText));
    navigation.navigate('Age');
  };

  console.log('Survey Data:', surveyData); // Log the surveyData array to the console

  return (
    <View className="flex-1 bg-[#5F6896]">
      <View className="flex-1 justify-center items-center mt-10">
        <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">
          ¿Cual es su nombre?
        </Text>
        <TextInput
          className="h-[40] w-3/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
          placeholder="Nombre completo del encuestado"
          placeholderTextColor={'#DCDEE898'}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity
          className="bg-tertiary rounded-lg w-24 h-24 justify-center items-center"
          onPress={handleNextScreen}
        >
          <Icon name="arrow-right" size={50} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NombreEncuestado;
