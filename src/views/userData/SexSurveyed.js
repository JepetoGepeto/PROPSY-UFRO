import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';


const SexSurveyed = () => {
    const [sex, setSex] = useState('');
    const navigation = useNavigation();

    const handleSexChange = (itemValue) => {
        setSex(itemValue);
    };

    return (
        <View className="flex-1 bg-[#5F6896]">
            <View className="flex-1 justify-center items-center mt-10">
                



                
                <View className="flex-row space-x-4">
                    <TouchableOpacity className="bg-secondary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("Birthday")}>
                        <Icon name="arrow-left" size={50} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-primary rounded-lg w-24 h-24 justify-center items-center" onPress={() => navigation.navigate("")}>
                        <Icon name="arrow-right" size={50} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );



};
export default SexSurveyed;