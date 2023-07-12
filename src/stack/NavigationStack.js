import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../views/Landing";
import Name from "../views/userData/NameSurveyed"
import Age from "../views/userData/AgeSurveyed"

const Stack = createStackNavigator();

export default function NavigationStack() {
  
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Landing"
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="Age" component={Age} />
      </Stack.Navigator>
    );
  }