import React from "react";
import { Text, View, Image, Alert } from 'react-native';
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from 'expo-file-system';
import XLSX from 'xlsx';
import * as Sharing from 'expo-sharing';

export default function App() {
  const navigation = useNavigation();

  const createExcelFile = async () => {
    const folderName = 'Propsy';
    const fileName = 'propsy.xlsx';
    const folderPath = `${FileSystem.documentDirectory}${folderName}`;
    const filePath = `${folderPath}/${fileName}`;

    try {
      // Check if the file already exists
      const fileExists = await FileSystem.getInfoAsync(filePath);

      // If the file doesn't exist, create it and write the headers
      if (!fileExists.exists) {
        // Create the folder if it doesn't exist
        await FileSystem.makeDirectoryAsync(folderPath, { intermediates: true });
        console.log('Folder created:', folderPath);

        const headers = [['nombre', 'edad', 'nacimiento', 'sexo', 'coincide']];
        const worksheet = XLSX.utils.aoa_to_sheet(headers);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelFileContent = XLSX.write(workbook, { type: 'base64' });
        await FileSystem.writeAsStringAsync(filePath, excelFileContent, { encoding: FileSystem.EncodingType.Base64 });
        console.log('File created:', filePath);
      }

      // Share the file with the user
      await Sharing.shareAsync(filePath);

      // Now you can navigate to the next screen
      navigation.navigate("Name");
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Error', 'No se pudo crear el archivo Excel o la carpeta.');
    }
  };

  return (
    <View className="flex-1 bg-[#5F6896]">
      <View className="bg-[#FFFFFF] flex-row justify-center items-center p-20 rounded-b-[35] ">
        <Image source={require('../../assets/images/LabCES.jpg')} className="w-[296] h-[102] rotate-180" />
        <Text className="text-[#3E3E44] text-6xl mx-5 rotate-180">PROPSY</Text>
        <Image source={require('../../assets/images/UFRO.png')} className="w-[296] h-[102] rotate-180" />
      </View>
      <View className="flex-1 justify-center items-center">
        <Button text="INICIAR" onPress={createExcelFile} />
      </View>
    </View>
  );
}
