import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export default function App() {
  const navigation = useNavigation();

  const generateExcelIfNotExists = async () => {
    const filePath = FileSystem.documentDirectory + 'PropsyPrototype.xlsx';

    // Verificar si el archivo ya existe
    const fileExists = await FileSystem.getInfoAsync(filePath);

    if (!fileExists.exists) {
      // Crear el archivo Excel con una hoja de cálculo
      const data = [['nombre', 'edad', 'nacimiento', 'sexo', 'coincide']];
      const workSheet = XLSX.utils.aoa_to_sheet(data);
      const workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook, workSheet, 'Encuestas');

      // Generar el contenido del archivo Excel
      const excelFileContent = XLSX.write(workBook, { type: 'base64' });

      // Guardar el archivo en el sistema de archivos
      await FileSystem.writeAsStringAsync(filePath, excelFileContent, {
        encoding: FileSystem.EncodingType.Base64,
      });
    }
  };

  useEffect(() => {
    generateExcelIfNotExists();
  }, []);

  const shareExcelFile = async () => {
    const filePath = FileSystem.documentDirectory + 'PropsyPrototype.xlsx';
    
    // Comprobar si el archivo existe antes de compartirlo
    const fileExists = await FileSystem.getInfoAsync(filePath);
    if (fileExists.exists) {
      await Sharing.shareAsync(filePath, {
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        dialogTitle: 'Crear archivo Excel',
      });
    } else {
      // Mostrar un mensaje si el archivo no existe
      console.log('El archivo no se encuentra.');
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
        <Button text="INICIAR" onPress={() => navigation.navigate("Name")} />
        <View className="my-1"/>
        <Button text="CREAR EXCEL" onPress={shareExcelFile} />
        </View>
    </View>

  );
}