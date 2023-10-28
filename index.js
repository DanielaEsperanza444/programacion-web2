function suma(a, b) {
    return a + b
}

const resta = function(a, b) {
    return a - b
}

const producto = (a, b) => a * b

const nombreCompleto = (nombre) => `Hola, cómo estas ${nombre}`

const resultado_suma = suma(2, 8)
const resultado_resta = resta(1, 5)
const resultado_producto = producto(3, 6)

console.log(resultado_suma)
console.log(resultado_resta)
console.log(resultado_producto)
console.log(nombreCompleto('Carlos'));


const saludo = (nombre) => `Hola, ${nombre} como estás?, yo bien`
console.log(saludo('Daniela!'));


//programas
//n1. numeros del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

  //2. num par o impar
  let numero = 7;
if (numero % 2 === 0) {
  console.log(numero + " es un número par.");
} else {
  console.log(numero + " es un número impar.");
}

//area circulo
function calcularAreaCirculo(radio) {
    let area = Math.PI * Math.pow(radio, 2);
    return area;
  }
  
  let radio = 4;
  console.log("El área del círculo es: " + calcularAreaCirculo(radio));

  //
  let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad, ya te pueden arrestar");
} else {
  console.log("Eres menor de edad");
}

