function parsePrice(price) {
  if (!price) return "0,00";

  // Convertir el precio a una cadena en caso de que no lo sea
  let stringPrice = price.toString();

  // Verificar si ya tiene una coma o un punto decimal
  let [integerPart, decimalPart] = stringPrice.split(/[.,]/);

  // Asegurarse de que la parte decimal tenga exactamente dos dígitos
  decimalPart = decimalPart ? (decimalPart + "00").slice(0, 2) : "00";

  // Añadir separadores de miles a la parte entera
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Devolver el precio formateado
  return `${integerPart},${decimalPart}`;
}

export default parsePrice;
