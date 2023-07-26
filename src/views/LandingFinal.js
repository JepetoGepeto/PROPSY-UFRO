import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { useSurveyContext } from '../SurveyContext';
import * as FileSystem from 'expo-file-system';
import XLSX from 'xlsx';
import * as Sharing from 'expo-sharing';



const LandingFinal = () => {
  const { surveyData } = useSurveyContext();

  useEffect(() => {
    createAndExportExcelFile();
  }, []);

  const createAndExportExcelFile = async () => {
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

        const headers = ['nombre', 'edad', 'nacimiento', 'sexo', 'coincide'];
        const worksheet = XLSX.utils.aoa_to_sheet([headers]);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelFileContent = XLSX.write(workbook, { type: 'base64' });
        await FileSystem.writeAsStringAsync(filePath, excelFileContent, { encoding: FileSystem.EncodingType.Base64 });
        console.log('File created:', filePath);
      }

      // Load the existing workbook and worksheet
      const fileContent = await FileSystem.readAsStringAsync(filePath, { encoding: FileSystem.EncodingType.Base64 });
      const workbook = XLSX.read(fileContent, { type: 'base64' });
      const worksheet = workbook.Sheets['Sheet1'];

      // Find the first empty row to add the survey data
      const range = XLSX.utils.decode_range(worksheet['!ref']);
      const firstEmptyRow = range.e.r + 1;

      // Get the survey data from the context
      const surveyData = useSurveyContext().surveyData;
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
        surveyData.daily17
      ];
      // Add the data to the first empty row
      XLSX.utils.sheet_add_aoa(worksheet, [dataRow], { origin: firstEmptyRow, skipHeader: true });

      // Update the range to include the new data
      worksheet['!ref'] = XLSX.utils.encode_range(range.s, { c: range.e.c, r: firstEmptyRow });

      // Write the updated workbook back to the file
      const updatedExcelFileContent = XLSX.write(workbook, { type: 'base64' });
      await FileSystem.writeAsStringAsync(filePath, updatedExcelFileContent, { encoding: FileSystem.EncodingType.Base64 });
      console.log('Data added to Excel file.');

      // Share the file with the user
      await Sharing.shareAsync(filePath);

    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Error', 'No se pudo crear el archivo Excel o la carpeta.');
    }
  };


  console.log('Nombre del encuestado:', surveyData.nombre);
  console.log('Edad del encuestado:', surveyData.edad);
  console.log('Cumpleaños del encuestado:', surveyData.cumpleanos);
  console.log('Sexo del encuestado:', surveyData.sexo);
  console.log('¿Coincide?:', surveyData.coincide);
  console.log('Nivel educacional:', surveyData.nivel_estudios);
  console.log('Nivel incompleto:', surveyData.nivelCursado);
  console.log('Jubilado, trabajador activo o ambas:', surveyData.ocupacion);
  console.log('Dependiente o independiente:', surveyData.trabajo);
  console.log('Trabajo actual:', surveyData.ocupacionActual);
  console.log('Estado civil:', surveyData.estadoCivil);
  console.log('Previsión de salud:', surveyData.salud);
  console.log('Tramos de ingresos:', surveyData.ingresos);
  console.log('Con cuantos vive:', surveyData.personas_que_viven);
  console.log('Agrupacion:', surveyData.agrupacion);
  console.log('Diagnóstico médico:', surveyData.diagnostico);
  console.log('Otro diagnóstico médico:', surveyData.otroEnfermedades);
  console.log('Toma los medicamentos:', surveyData.medicamentos);
  console.log('Otros medicamentos:', surveyData.otrosMedicamentos);
  console.log('Diagnóstico demencia:', surveyData.dementia);
  console.log('Licencia de conducir:', surveyData.licencia);
  console.log('Tiempo de licencia:', surveyData.renovacion);
  console.log('¿Sabe otro idioma?:', surveyData.idioma);
  console.log('Otros idiomas:', surveyData.idiomaExtra);
  console.log('Nivel socioeconómico:', surveyData.nivel_socioeconomico);
  console.log('Horas de sueño:', surveyData.horas_sueno);
  console.log('Sueño 1:', surveyData.sleeping1);
  console.log('Sueño 2:', surveyData.sleeping2);
  console.log('Sueño 3:', surveyData.sleeping3);
  console.log('Sueño 4:', surveyData.sleeping4);
  console.log('Sueño 5:', surveyData.sleeping5);
  console.log('Consumo tabaco:', surveyData.consumo_tabaco);
  console.log('Cuánto fuma:', surveyData.cigarrillosSemana);
  console.log('Empezó a fumar:', surveyData.edadFumador);
  console.log('Cuántos años fumó:', surveyData.anos_fumo);
  console.log('Cuántos años dejó de fumar:', surveyData.aniosDejoDeFumar);
  console.log('Cuántos cigarrillos fumaba:', surveyData.cigarrillos);
  console.log('Consumo alcohol:', surveyData.consumoAlcohol);
  console.log('Tragos bebidos semana:', surveyData.tragosSemana);
  console.log('Tragos bebidos fin de semana:', surveyData.tragosFinDeSemana);
  console.log('Edad comenzó a beber:', surveyData.edadInicioBeber);
  console.log('Edad dejó de beber:', surveyData.edadDejarBeber);
  console.log('Años que bebió:', surveyData.anosBebio);
  console.log('Cuanto solía beber:', surveyData.tragos_semanales);
  console.log('Mostly 1:', surveyData.mostly1);
  console.log('Mostly 2:', surveyData.mostly2);
  console.log('Mostly 3:', surveyData.mostly3);
  console.log('Mostly 4:', surveyData.mostly4);
  console.log('Mostly 5:', surveyData.mostly5);
  console.log('Mostly 6:', surveyData.mostly6);
  console.log('Mostly 7:', surveyData.mostly7);
  console.log('Mostly 8:', surveyData.mostly8);
  console.log('Mostly 9:', surveyData.mostly9);
  console.log('Mostly 10:', surveyData.mostly10);
  console.log('Mostly 11:', surveyData.mostly11);
  console.log('Mostly 12:', surveyData.mostly12);
  console.log('Mostly 13:', surveyData.mostly13);
  console.log('Mostly 14:', surveyData.mostly14);
  console.log('Mostly 15:', surveyData.mostly15);
  console.log('Older 1:', surveyData.older1);
  console.log('Older 2:', surveyData.older2);
  console.log('Older 3:', surveyData.older3);
  console.log('Older 4:', surveyData.older4);
  console.log('Older 5:', surveyData.older5);
  console.log('Older 6:', surveyData.older6);
  console.log('Older 7:', surveyData.older7);
  console.log('Older 8:', surveyData.older8);
  console.log('Older 9:', surveyData.older9);
  console.log('Older 10:', surveyData.older10);
  console.log('Older 11:', surveyData.older11);
  console.log('Older 12:', surveyData.older12);
  console.log('Older 13:', surveyData.older13);
  console.log('Feeling 1:', surveyData.feeling1);
  console.log('Feeling 2:', surveyData.feeling2);
  console.log('Feeling 3:', surveyData.feeling3);
  console.log('Feeling 4:', surveyData.feeling4);
  console.log('Feeling 5:', surveyData.feeling5);
  console.log('Feeling 6:', surveyData.feeling6);
  console.log('Feeling 7:', surveyData.feeling7);
  console.log('Process 1:', surveyData.process1);
  console.log('Process 2:', surveyData.process2);
  console.log('Process 3:', surveyData.process3);
  console.log('Process 4:', surveyData.process4);
  console.log('Process 5:', surveyData.process5);
  console.log('Process 6:', surveyData.process6);
  console.log('Process 7:', surveyData.process7);
  console.log('Process 8:', surveyData.process8);
  console.log('Process 9:', surveyData.process9);
  console.log('Process 10:', surveyData.process10);
  console.log('Process 11:', surveyData.process11);
  console.log('Process 12:', surveyData.process12);
  console.log('Process 13:', surveyData.process13);
  console.log('Process 14:', surveyData.process14);
  console.log('Process 15:', surveyData.process15);
  console.log('Process 16:', surveyData.process16);
  console.log('Process 17:', surveyData.process17);
  console.log('Process 18:', surveyData.process18);
  console.log('Process 19:', surveyData.process19);
  console.log('Process 20:', surveyData.process20);
  console.log('Process 21:', surveyData.process21);
  console.log('Process 22:', surveyData.process22);
  console.log('Process 23:', surveyData.process23);
  console.log('Frequency 1:', surveyData.frequency1);
  console.log('Frequency 2:', surveyData.frequency2);
  console.log('Frequency 3:', surveyData.frequency3);
  console.log('Frequency 4:', surveyData.frequency4);
  console.log('Frequency 5:', surveyData.frequency5);
  console.log('Frequency 6:', surveyData.frequency6);
  console.log('Frequency 7:', surveyData.frequency7);
  console.log('Frequency 8:', surveyData.frequency8);
  console.log('Frequency 9:', surveyData.frequency9);
  console.log('Frequency 10:', surveyData.frequency10);
  console.log('First One:', surveyData.firstOne);
  console.log('Second One:', surveyData.secondOne);
  console.log('Third One:', surveyData.thirdOne);
  console.log('Fourth One:', surveyData.fourthOne);
  console.log('Situations 1:', surveyData.situations1);
  console.log('Situations 2:', surveyData.situations2);
  console.log('Situations 3:', surveyData.situations3);
  console.log('Situations 4:', surveyData.situations4);
  console.log('Situations 5:', surveyData.situations5);
  console.log('Situations 6:', surveyData.situations6);
  console.log('Situations 7:', surveyData.situations7);
  console.log('Situations 8:', surveyData.situations8);
  console.log('Situations 9:', surveyData.situations9);
  console.log('Situations 10:', surveyData.situations10);
  console.log('Situations 11:', surveyData.situations11);
  console.log('Situations 12:', surveyData.situations12);
  console.log('Situations 13:', surveyData.situations13);
  console.log('Situations 14:', surveyData.situations14);
  console.log('Situations 15:', surveyData.situations15);
  console.log('Situations 16:', surveyData.situations16);
  console.log('Situations 17:', surveyData.situations17);
  console.log('Situations 18:', surveyData.situations18);
  console.log('Situations 19:', surveyData.situations19);
  console.log('Situations Two 1:', surveyData.situationsTwo1);
  console.log('Situations Two 2:', surveyData.situationsTwo2);
  console.log('Situations Two 3:', surveyData.situationsTwo3);
  console.log('Situations Two 4:', surveyData.situationsTwo4);
  console.log('Situations Two 5:', surveyData.situationsTwo5);
  console.log('Situations Two 6:', surveyData.situationsTwo6);
  console.log('Family 1:', surveyData.family1);
  console.log('Family 2:', surveyData.family2);
  console.log('Family 3:', surveyData.family3);
  console.log('Grade 1:', surveyData.grade1);
  console.log('Grade 2:', surveyData.grade2);
  console.log('Grade 3:', surveyData.grade3);
  console.log('Family Two 1:', surveyData.familyTwo1);
  console.log('Family Two 2:', surveyData.familyTwo2);
  console.log('Family Two 3:', surveyData.familyTwo3);
  console.log('Friends 1:', surveyData.friends1);
  console.log('Friends 2:', surveyData.friends2);
  console.log('Friends 3:', surveyData.friends3);
  console.log('Someone 1:', surveyData.someone1);
  console.log('Someone 2:', surveyData.someone2);
  console.log('Someone 3:', surveyData.someone3);
  console.log('Someone 4:', surveyData.someone4);
  console.log('Someone 5:', surveyData.someone5);
  console.log('Someone 6:', surveyData.someone6);
  console.log('Memory 1:', surveyData.memory1);
  console.log('Memory 2:', surveyData.memory2);
  console.log('Memory 3:', surveyData.memory3);
  console.log('Memory 4:', surveyData.memory4);
  console.log('Memory 5:', surveyData.memory5);
  console.log('Memory 6:', surveyData.memory6);
  console.log('Memory 7:', surveyData.memory7);
  console.log('Memory 8:', surveyData.memory8);
  console.log('Memory 9:', surveyData.memory9);
  console.log('Memory 10:', surveyData.memory10);
  console.log('Memory 11:', surveyData.memory11);
  console.log('Memory 12:', surveyData.memory12);
  console.log('Daily 1:', surveyData.daily1);
  console.log('Daily 2:', surveyData.daily2);
  console.log('Daily 3:', surveyData.daily3);
  console.log('Daily 4:', surveyData.daily4);
  console.log('Daily 5:', surveyData.daily5);
  console.log('Daily 6:', surveyData.daily6);
  console.log('Daily 7:', surveyData.daily7);
  console.log('Daily 8:', surveyData.daily8);
  console.log('Daily 9:', surveyData.daily9);
  console.log('Daily 10:', surveyData.daily10);
  console.log('Daily 11:', surveyData.daily11);
  console.log('Daily 12:', surveyData.daily12);
  console.log('Daily 13:', surveyData.daily13);
  console.log('Daily 14:', surveyData.daily14);
  console.log('Daily 15:', surveyData.daily15);
  console.log('Daily 16:', surveyData.daily16);
  console.log('Daily 17:', surveyData.daily17);

  return (
    <View className="flex-1 bg-[#5F6896]">
      <View className="bg-[#FFFFFF] flex-row justify-center items-center p-20 rounded-b-[35]">
        <Image source={require('../../assets/images/LabCES.jpg')} className="w-[296] h-[102] rotate-180" />
        <Text className="text-[#3E3E44] text-6xl mx-5 rotate-180">Gracias por participar</Text>
        <Image source={require('../../assets/images/UFRO.png')} className="w-[296] h-[102] rotate-180" />
      </View>
      <View className="flex-1 justify-center items-center">
        <Text className="text-[#ffffff] text-6xl mx-5">Datos guardados</Text>
      </View>
    </View>

  );
}

export default LandingFinal; 