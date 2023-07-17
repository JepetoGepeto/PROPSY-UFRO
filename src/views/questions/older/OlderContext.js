import React from 'react';
import {View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const OlderContext = () => {
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-[#5F6896]">
          <View className="flex-1 justify-center items-center mt-10">
          <Text className="text-6xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">A continuación, se presentan una serie de afirmaciones relacionadas con la manera en cómo usted podría percibir su propio proceso de envejecimiento, debe indicar el grado de acuerdo o desacuerdo con cada una de ellas con la opción que mejor le identifique. A diferencia de las preguntas anteriores, considere únicamente en su propio proceso de envejecer.</Text>
            <View className="flex-row space-x-4">
              <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Mostly15")}>
                <Icon name="arrow-left" size={50} color="#000000" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-tertiary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Older1")}>
                <Icon name="arrow-right" size={50} color="#000000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    
};
export default OlderContext;