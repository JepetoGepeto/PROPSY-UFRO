import React from "react";
import { Text, View, Image, Alert } from 'react-native';
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from 'expo-file-system';
import XLSX from 'xlsx';
import * as Permissions from 'expo-permissions'; // Add this import
import * as MediaLibrary from 'expo-media-library'; // Add this import

export default function App() {
  const navigation = useNavigation();

  const createExcelFile = async () => {
    const folderName = 'Propsy';
    const fileName = 'data.xlsx';
    const folderPath = `${FileSystem.documentDirectory}${folderName}`;
    const filePath = `${folderPath}/${fileName}`;

    try {
      // Create the folder if it doesn't exist
      await FileSystem.makeDirectoryAsync(folderPath, { intermediates: true });

      // Check if the file already exists
      const fileExists = await FileSystem.getInfoAsync(filePath);

      // If the file doesn't exist, create it and write the headers
      if (!fileExists.exists) {
        const headers = [['Nombre', 'Edad']];
        const worksheet = XLSX.utils.aoa_to_sheet(headers);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelFileContent = XLSX.write(workbook, { type: 'base64' });
        await FileSystem.writeAsStringAsync(filePath, excelFileContent, { encoding: FileSystem.EncodingType.Base64 });
        Alert.alert('Archivo creado', `Se ha creado el archivo Excel en ${filePath}`);

        // Now move the file to a publicly accessible folder (Download)
        const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (perm.status === 'granted') {
          const asset = await MediaLibrary.createAssetAsync(filePath);
          const album = await MediaLibrary.getAlbumAsync('Download');
          if (album == null) {
            await MediaLibrary.createAlbumAsync('Download', asset, false);
          } else {
            await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
          }
        } else {
          console.log('Permission not granted for Media Library.');
        }
      }

      // Now you can navigate to the next screen
      navigation.navigate("Name");
    } catch (error) {
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
