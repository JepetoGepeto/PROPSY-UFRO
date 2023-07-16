import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const IncomeSurveyed = () => {
    const [income, setIncome] = useState(null);
    const navigation = useNavigation();

    const options = [
        { label: '300.000$ - 500.000$', value: '1' },
        { label: '500.000$ - 750.000$', value: '2' },
        { label: '750.000$ - 1.000.000$', value: '3' },
        { label: '1.000.000$ - 1.500.000$', value: '4' },
        { label: '1.500.000$ o más', value: '5' },
    ];

    const handleIncomeSelect = (value) => {
        setIncome(value);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
        className={`py-4 px-8 rounded-lg my-auto mr-2 ${item.value === income ? 'bg-primary' : 'bg-white'}`}
        onPress={() => handleIncomeSelect(item.value)}
        >
            <Text className="text-[#3E3E44] font-bold">{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-[#5F6896] justify-center">
            <View className="flex-1 mt-12 items-center">
                <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">¿En cuál de los siguientes tramos se encuentra su nivel de ingresos actual?</Text>
                <FlatList
                    data={options}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.value}
                    extraData={income}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View className="flex-row space-x-4">
                    <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("HealthSurveyed")}>
                        <Icon name="arrow-left" size={50} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-tertiary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Living")}>
                        <Icon name="arrow-right" size={50} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default IncomeSurveyed;