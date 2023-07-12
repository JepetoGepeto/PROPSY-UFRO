import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../views/Landing";

const Stack = createStackNavigator();

export default function NavigationStack() {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Landing"
      >
        <Stack.Screen name="Landing" component={Landing} />
      </Stack.Navigator>
    );
  }