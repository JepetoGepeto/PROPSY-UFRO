import React, { useState } from 'react';
import {View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const AgeSurveyed = () => {
    const [age, setAge] = useState('');
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-[#5F6896]">
          <View className="flex-1 justify-center items-center mt-10">
            <TextInput
              className="h-[40] w-2/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
              placeholder="Edad del encuestado"
              placeholderTextColor={'#DCDEE898'}
              value={age}
              onChangeText={text => setAge(text)}
            />
            <View className="flex-row space-x-4">
            <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Name")}>
              <Icon name="arrow-left" size={50} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-primary rounded-lg w-24 h-24 justify-center items-center" onPress={() => console.log('Button pressed')}>
              <Icon name="arrow-right" size={50} color="#000000" />
            </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    


};
export default AgeSurveyed;