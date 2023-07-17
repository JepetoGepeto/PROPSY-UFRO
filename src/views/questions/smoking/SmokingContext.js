import React from 'react';
import {View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const SmokingContext = () => {
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-[#5F6896]">
          <View className="flex-1 justify-center items-center mt-10">
          <Text className="text-6xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">A continuación, encontrará una serie de preguntas sobre algunos hábitos que la gente tiene, tales como el consumo de tabaco. Para responder sea lo más honesto/a posible. Recuerde que sus respuestas serán analizadas en conjunto con las de otros/as participantes y que éstas son confidenciales.</Text>
            <View className="flex-row space-x-4">
              <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Sleeping5")}>
                <Icon name="arrow-left" size={50} color="#000000" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-tertiary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Smoking1")}>
                <Icon name="arrow-right" size={50} color="#000000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    


};
export default SmokingContext;