import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../views/Landing";
import Name from "../views/userData/baseData/NameSurveyed";
import Age from "../views/userData/baseData/AgeSurveyed";
import Birthday from "../views/userData/baseData/BirthdaySurveyed";
import Sex from "../views/userData/baseData/SexSurveyed";
import Coincide from "../views/userData/baseData/CoincideSurveyed";
import EducationalLevel from "../views/userData/workData/EducationalLevelSurveyed";
import EducationIncomplete from "../views/userData/workData/EducationIncomplete";
import Ocupation from "../views/userData/workData/OcupationSurveyed";
import Work from "../views/userData/workData/WorkingSurveyed";
import Job from "../views/userData/workData/CurrentJob";
import CivilStatus from "../views/userData/CivilStatusSurveyed";
import HealthSurveyed from "../views/userData/HealthSurveyed";
import Income from "../views/userData/IncomeSurveyed";
import Living from "../views/userData/LivingWithSurveyed";
import Agrupation from "../views/userData/AgrupationSurveyed";
import Medical from "../views/userData/MedicalDataSurveyed";
import MedicalOther from "../views/userData/MedicalOther";
import Medicine from "../views/userData/MedicineSurveyed";
import MedicineOther from "../views/userData/MedicineOther";
import Dementia from "../views/userData/DementiaSurveyed";
import Driving from "../views/userData/DrivingSurveyed";
import DrivingExtra from "../views/userData/DrivingExtra";
import Language from "../views/userData/LanguageSurveyed";
import LanguageExtra from "../views/userData/LanguageExtra";
import SocioEconomicLevel from "../views/userData/SocioEconomicLevel";
import SleepingHours from "../views/userData/SleepingHours";

const Stack = createStackNavigator();

export default function NavigationStack() {
  
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LanguageExtra"
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="Age" component={Age} />
        <Stack.Screen name="Birthday" component={Birthday} />
        <Stack.Screen name="Sex" component={Sex} />
        <Stack.Screen name="Coincide" component={Coincide} />
        <Stack.Screen name="EducationalLevel" component={EducationalLevel} />
        <Stack.Screen name="EducationIncomplete" component={EducationIncomplete} />
        <Stack.Screen name="Ocupation" component={Ocupation} />
        <Stack.Screen name="Work" component={Work} />
        <Stack.Screen name="Job" component={Job} />
        <Stack.Screen name="CivilStatus" component={CivilStatus} />
        <Stack.Screen name="HealthSurveyed" component={HealthSurveyed} />
        <Stack.Screen name="Income" component={Income} />
        <Stack.Screen name="Living" component={Living} />
        <Stack.Screen name="Agrupation" component={Agrupation} />
        <Stack.Screen name="Medical" component={Medical} />
        <Stack.Screen name="MedicalOther" component={MedicalOther} />
        <Stack.Screen name="Medicine" component={Medicine} />
        <Stack.Screen name="MedicineOther" component={MedicineOther} />
        <Stack.Screen name="Dementia" component={Dementia} />
        <Stack.Screen name="Driving" component={Driving} />
        <Stack.Screen name="DrivingExtra" component={DrivingExtra} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="LanguageExtra" component={LanguageExtra} />
        <Stack.Screen name="SocioEconomicLevel" component={SocioEconomicLevel} />
        <Stack.Screen name="SleepingHours" component={SleepingHours} />

      </Stack.Navigator>
    );
  }