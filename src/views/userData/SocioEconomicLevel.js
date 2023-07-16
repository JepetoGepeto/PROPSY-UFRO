import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const SocioEconomicLevel = () => {
    const [socioeconomic, setSocioeconomic] = useState(null);
    const navigation = useNavigation();

    const options = [
        { label: 'Bajo', value: '1' },
        { label: 'Medio bajo', value: '2' },
        { label: 'Medio', value: '3' },
        { label: 'Medio alto', value: '4' },
        { label: 'Alto', value: '5' },
        { label: 'Muy alto', value: '6' },
    ];

    const handleSocioeconomicSelect = (value) => {
        setSocioeconomic(value);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
        className={`py-4 px-8 rounded-lg my-auto mr-2 ${item.value === socioeconomic ? 'bg-primary' : 'bg-white'}`}
        onPress={() => handleSocioeconomicSelect(item.value)}
        >
            <Text className="text-[#3E3E44] font-bold">{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-[#5F6896] justify-center">
            <View className="flex-1 mt-12 items-center">
                <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">Considerando una escala socioeconomica de valor bajo, medio bajo, medio, medio alto, alto y muy alto, ¿En cual considera que se encuentra?</Text>
                <FlatList
                    data={options}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.value}
                    extraData={socioeconomic}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View className="flex-row space-x-4">
                    <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("LanguageExtra")}>
                        <Icon name="arrow-left" size={50} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-tertiary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("SleepingHours")}>
                        <Icon name="arrow-right" size={50} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SocioEconomicLevel;