import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const Feeling7 = () => {
    const [answer, setAnswer] = useState(null);
    const navigation = useNavigation();

    const options = [
        { label: 'Muy en desacuerdo', value: '1' },
        { label: 'En desacuerdo', value: '2' },
        { label: 'Ni de acuerdo ni en desacuerdo', value: '3' },
        { label: 'De acuerdo', value: '4' },
        { label: 'Muy de acuerdo', value: '5' },
    ];

    const handleAnswerSelect = (value) => {
        setAnswer(value);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
        className={`py-4 px-8 rounded-lg my-auto mr-2 ${item.value === answer ? 'bg-primary' : 'bg-white'}`}
        onPress={() => handleAnswerSelect(item.value)}
        >
            <Text className="text-[#3E3E44] font-bold">{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-[#5F6896] justify-center">
            <View className="flex-1 mt-12 items-center">
                <Text className="text-7xl rotate-180 text-[#3E3E44] bg-primary mb-4 p-4 rounded-lg font-bold">Me preocupa no tener amistades con quienes hablar a medida que me hago mayor</Text>
                <FlatList
                    data={options}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.value}
                    extraData={answer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View className="flex-row space-x-4">
                    <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Feeling6")}>
                        <Icon name="arrow-left" size={50} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-tertiary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("ProcessContext")}>
                        <Icon name="arrow-right" size={50} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Feeling7;