import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const BirthdaySurveyed = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const navigation = useNavigation();

    const handleSubmit = () => {
        // Validar y procesar la fecha de cumpleaños
        const birthday = `${day}/${month}/${year}`;
        console.log('Cumpleaños:', birthday);
        // Resto del código de manejo o navegación
    };

    return (
        <View className="flex-1 bg-[#5F6896]">
            <View className="flex-1 justify-center items-center mt-10">
                <TextInput
                    className="h-[40] w-2/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
                    placeholder="Día"
                    placeholderTextColor="#DCDEE898"
                    value={day}
                    onChangeText={(text) => setDay(text)}
                    keyboardType="numeric"
                    maxLength={2}
                />
                <TextInput
                    className="h-[40] w-2/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
                    placeholder="Mes"
                    placeholderTextColor="#DCDEE898"
                    value={month}
                    onChangeText={(text) => setMonth(text)}
                    keyboardType="numeric"
                    maxLength={2}
                />
                <TextInput
                    className="h-[40] w-2/5 border-[#DCDEE8] text-[#DCDEE8] border rounded-lg px-2 mb-2"
                    placeholder="Año"
                    placeholderTextColor="#DCDEE898"
                    value={year}
                    onChangeText={(text) => setYear(text)}
                    keyboardType="numeric"
                    maxLength={4}
                />
                <View className="flex-row space-x-4">
                    <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Age")}>
                        <Icon name="arrow-left" size={50} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-primary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Sex")}>
                        <Icon name="arrow-right" size={50} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default BirthdaySurveyed;
