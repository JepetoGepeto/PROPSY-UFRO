import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useSurveyContext } from '../SurveyContext';
import XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';

const LandingFinal = () => {
  const { surveyData } = useSurveyContext(); // Acceder a los datos del contexto

  useEffect(() => {
    saveDataToExcel();
  }, []);

  const saveDataToExcel = async () => {
    try {
      const filePath = `${FileSystem.documentDirectory}/Propsy.xlsx`;

      // Leer el archivo existente (si existe)
      let existingData = null;
      if (await FileSystem.getInfoAsync(filePath)) {
        const data = await FileSystem.readAsStringAsync(filePath, {
          encoding: FileSystem.EncodingType.Base64,
        });
        existingData = XLSX.read(data, { type: 'base64' });
      }

      // Obtener los datos existentes como una matriz
      const existingDataArray = existingData
        ? XLSX.utils.sheet_to_json(existingData.Sheets['Encuestas'], { header: 1 }).filter(row => row && row.length > 0)
        : [];

        
      // Encontrar la última fila no vacía (la última fila que contiene datos)
      const lastRowIndex = existingDataArray.length;
      const nextRowIndex = lastRowIndex;

      // Crear un arreglo con los datos de la encuesta en el orden deseado
      const dataRow = [
        surveyData.nombre,
        surveyData.edad,
        surveyData.cumpleanos,
        surveyData.sexo,
        surveyData.coincide,
        surveyData.nivel_estudios,
        surveyData.nivelCursado,
        surveyData.ocupacion,
        surveyData.trabajo,
        surveyData.ocupacionActual,
        surveyData.estadoCivil,
        surveyData.salud,
        surveyData.ingresos,
        surveyData.personas_que_viven,
        surveyData.agrupacion,
        surveyData.diagnostico,
        surveyData.otroEnfermedades,
        surveyData.medicamentos,
        surveyData.otrosMedicamentos,
        surveyData.dementia,
        surveyData.licencia,
        surveyData.renovacion,
        surveyData.idioma,
        surveyData.idiomaExtra,
        surveyData.nivel_socioeconomico,
        surveyData.horas_sueno,
        surveyData.sleeping1,
        surveyData.sleeping2,
        surveyData.sleeping3,
        surveyData.sleeping4,
        surveyData.sleeping5,
        surveyData.consumo_tabaco,
        surveyData.cigarrillosSemana,
        surveyData.edadFumador,
        surveyData.anos_fumo,
        surveyData.aniosDejoDeFumar,
        surveyData.cigarrillos,
        surveyData.consumoAlcohol,
        surveyData.tragosSemana,
        surveyData.tragosFinDeSemana,
        surveyData.edadInicioBeber,
        surveyData.edadDejarBeber,
        surveyData.anosBebio,
        surveyData.tragos_semanales,
        surveyData.mostly1,
        surveyData.mostly2,
        surveyData.mostly3,
        surveyData.mostly4,
        surveyData.mostly5,
        surveyData.mostly6,
        surveyData.mostly7,
        surveyData.mostly8,
        surveyData.mostly9,
        surveyData.mostly10,
        surveyData.mostly11,
        surveyData.mostly12,
        surveyData.mostly13,
        surveyData.mostly14,
        surveyData.mostly15,
        surveyData.older1,
        surveyData.older2,
        surveyData.older3,
        surveyData.older4,
        surveyData.older5,
        surveyData.older6,
        surveyData.older7,
        surveyData.older8,
        surveyData.older9,
        surveyData.older10,
        surveyData.older11,
        surveyData.older12,
        surveyData.older13,
        surveyData.feeling1,
        surveyData.feeling2,
        surveyData.feeling3,
        surveyData.feeling4,
        surveyData.feeling5,
        surveyData.feeling6,
        surveyData.feeling7,
        surveyData.process1,
        surveyData.process2,
        surveyData.process3,
        surveyData.process4,
        surveyData.process5,
        surveyData.process6,
        surveyData.process7,
        surveyData.process8,
        surveyData.process9,
        surveyData.process10,
        surveyData.process11,
        surveyData.process12,
        surveyData.process13,
        surveyData.process14,
        surveyData.process15,
        surveyData.process16,
        surveyData.process17,
        surveyData.process18,
        surveyData.process19,
        surveyData.process20,
        surveyData.process21,
        surveyData.process22,
        surveyData.process23,
        surveyData.frequency1,
        surveyData.frequency2,
        surveyData.frequency3,
        surveyData.frequency4,
        surveyData.frequency5,
        surveyData.frequency6,
        surveyData.frequency7,
        surveyData.frequency8,
        surveyData.frequency9,
        surveyData.frequency10,
        surveyData.firstOne,
        surveyData.secondOne,
        surveyData.thirdOne,
        surveyData.fourthOne,
        surveyData.situations1,
        surveyData.situations2,
        surveyData.situations3,
        surveyData.situations4,
        surveyData.situations5,
        surveyData.situations6,
        surveyData.situations7,
        surveyData.situations8,
        surveyData.situations9,
        surveyData.situations10,
        surveyData.situations11,
        surveyData.situations12,
        surveyData.situations13,
        surveyData.situations14,
        surveyData.situations15,
        surveyData.situations16,
        surveyData.situations17,
        surveyData.situations18,
        surveyData.situations19,
        surveyData.situationsTwo1,
        surveyData.situationsTwo2,
        surveyData.situationsTwo3,
        surveyData.situationsTwo4,
        surveyData.situationsTwo5,
        surveyData.situationsTwo6,
        surveyData.family1,
        surveyData.family2,
        surveyData.family3,
        surveyData.grade1,
        surveyData.grade2,
        surveyData.grade3,
        surveyData.familyTwo1,
        surveyData.familyTwo2,
        surveyData.familyTwo3,
        surveyData.friends1,
        surveyData.friends2,
        surveyData.friends3,
        surveyData.someone1,
        surveyData.someone2,
        surveyData.someone3,
        surveyData.someone4,
        surveyData.someone5,
        surveyData.someone6,
        surveyData.memory1,
        surveyData.memory2,
        surveyData.memory3,
        surveyData.memory4,
        surveyData.memory5,
        surveyData.memory6,
        surveyData.memory7,
        surveyData.memory8,
        surveyData.memory9,
        surveyData.memory10,
        surveyData.memory11,
        surveyData.memory12,
        surveyData.daily1,
        surveyData.daily2,
        surveyData.daily3,
        surveyData.daily4,
        surveyData.daily5,
        surveyData.daily6,
        surveyData.daily7,
        surveyData.daily8,
        surveyData.daily9,
        surveyData.daily10,
        surveyData.daily11,
        surveyData.daily12,
        surveyData.daily13,
        surveyData.daily14,
        surveyData.daily15,
        surveyData.daily16,
        surveyData.daily17,
      ];

      // Agregar los datos de la encuesta a la hoja de cálculo, comenzando desde la siguiente fila vacía
      const worksheet = XLSX.utils.aoa_to_sheet(existingDataArray);
      XLSX.utils.sheet_add_aoa(worksheet, [dataRow], { origin: nextRowIndex });

      // Crear el archivo Excel con los nuevos datos
      const workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook, worksheet, 'Encuestas');

      // Guardar el archivo en el sistema de archivos local
      const excelFileContent = XLSX.write(workBook, { type: 'base64' });
      await FileSystem.writeAsStringAsync(filePath, excelFileContent, {
        encoding: FileSystem.EncodingType.Base64,
      });
    } catch (error) {
      console.log('Error al guardar los datos en el archivo Excel:', error);
    }
  };

  return (
    <View className="flex-1 bg-[#5F6896]">
      <View className="bg-[#FFFFFF] flex-row justify-center items-center p-20 rounded-b-[35]">
        <Image
          source={require('../../assets/images/LabCES.jpg')}
          className="w-[296] h-[102] rotate-180"
        />
        <Text className="text-[#3E3E44] text-6xl mx-5 rotate-180">Gracias por participar</Text>
        <Image
          source={require('../../assets/images/UFRO.png')}
          className="w-[296] h-[102] rotate-180"
        />
      </View>
      <View className="flex-1 justify-center items-center">
        <Text className="text-[#ffffff] text-6xl mx-5">Datos guardados</Text>
      </View>
    </View>
  );
};

export default LandingFinal;