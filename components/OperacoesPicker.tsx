import React from "react";
import { Picker } from "@react-native-picker/picker";
import { estilos } from "../../calculadora-picker/components/styles/styles";

interface Props {
  operacao: string;
  setOperacao: (value: string) => void;
}

export default function OperacoesPicker({ operacao, setOperacao }: Props) {
  return (
    <Picker
      selectedValue={operacao}
      onValueChange={(itemValue) => setOperacao(itemValue)}
      style={estilos.picker}
    >
      <Picker.Item label="Somar" value="somar" />
      <Picker.Item label="Subtrair" value="subtrair" />
      <Picker.Item label="Multiplicar" value="multiplicar" />
      <Picker.Item label="Dividir" value="dividir" />
    </Picker>
  );
}
