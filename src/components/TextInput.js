import { TextInput as Input } from "react-native";

/**
 * Componente de ingreso de texto
 *
 * Props:
 * - secureTextEntry: define si el input es de tipo password
 * - placeholder: texto del placeholder del input
 * - value: valor del input
 * - onChangeText: funcion que setea el valor del input
 */
export default function TextInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) {
  return (
    <Input
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      className="bg-gray-200 mb-4 py-3 px-4 rounded-lg text-sm"
    />
  );
}