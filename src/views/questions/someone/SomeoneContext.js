import React from 'react';
import {View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const SomeoneContext = () => {
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-[#5F6896]">
          <View className="flex-1 justify-center items-center mt-10">
          <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">Lea con atención las siguientes afirmaciones e indique con qué frecuencia le han ocurrido. Marque con una X debajo de la opción de respuesta que mejor le represente.</Text>
            <View className="flex-row space-x-4">
              <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Friends3")}>
                <Icon name="arrow-left" size={50} color="#000000" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-tertiary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Someone1")}>
                <Icon name="arrow-right" size={50} color="#000000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    
};
export default SomeoneContext;