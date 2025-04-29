export function calcular(
  valor1: number,
  valor2: number,
  operacao: string
): number | string {
  switch (operacao) {
    case "somar":
      return valor1 + valor2;
    case "subtrair":
      return valor1 - valor2;
    case "multiplicar":
      return valor1 * valor2;
    case "dividir":
      return valor2 !== 0 ? valor1 / valor2 : "Erro: divisão por zero";
    default:
      return 0;
  }
}
