import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const CivilStatusSurveyed = () => {
    const [civilStatus, setCivilStatus] = useState(null);
    const navigation = useNavigation();

    const options = [
        { label: 'Soltera/o', value: '1' },
        { label: 'Separada/o', value: '2' },
        { label: 'En pareja', value: '3' },
        { label: 'Casada/o', value: '4' },
        { label: 'Viuda/o', value: '5' },
        { label: 'Otro', value: '6' },
    ];

    const handleCivilStatusSelect = (value) => {
        setCivilStatus(value);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
        className={`py-4 px-8 rounded-lg my-auto mr-2 ${item.value === civilStatus ? 'bg-primary' : 'bg-white'}`}
        onPress={() => handleCivilStatusSelect(item.value)}
        >
            <Text className="text-[#3E3E44] font-bold">{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-[#5F6896] justify-center">
            <View className="flex-1 mt-12 items-center">
                <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">¿Cuál es su estado civil?</Text>
                <FlatList
                    data={options}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.value}
                    extraData={civilStatus}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View className="flex-row space-x-4">
                    <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Job")}>
                        <Icon name="arrow-left" size={50} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-tertiary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("HealthSurveyed")}>
                        <Icon name="arrow-right" size={50} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CivilStatusSurveyed;