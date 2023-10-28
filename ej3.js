//area circulo
function calcularAreaCirculo(radio) {
    let area = Math.PI * Math.pow(radio, 2);
    return area;
  }
  let radio = 6;
  console.log("El área del círculo es: " + calcularAreaCirculo(radio));