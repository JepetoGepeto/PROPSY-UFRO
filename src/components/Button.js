import { TouchableOpacity, Text } from "react-native";

/**
 * Componente que muestra un boton con texto
 *
 * Props
 * - text: texto del boton
 * - onPress: funcion que se ejecuta al presionar el boton
 */
export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-primary h-12 items-center justify-center rounded-full w-1/6"
    >
      <Text className="text-[#3E3E44] font-bold">{text}</Text>
    </TouchableOpacity>
  );
}