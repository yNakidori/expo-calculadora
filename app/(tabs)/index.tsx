import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import OperacoesPicker from "../../components/OperacoesPicker";
import { estilos } from "../../components/styles/styles";
import { calcular } from "../../components/utils/calcular";

export default function HomeScreen() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [operacao, setOperacao] = useState("somar");
  const [resultado, setResultado] = useState<null | number | string>(null);

  const calcularResultado = () => {
    const res = calcular(parseFloat(valor1), parseFloat(valor2), operacao);
    setResultado(res);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Calculadora - Picker</Text>

      <TextInput
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        style={estilos.input}
        value={valor1}
        onChangeText={setValor1}
      />

      <TextInput
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        style={estilos.input}
        value={valor2}
        onChangeText={setValor2}
      />

      <OperacoesPicker operacao={operacao} setOperacao={setOperacao} />

      <Button title="Calcular" onPress={calcularResultado} />

      {resultado !== null && (
        <Text style={estilos.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}
