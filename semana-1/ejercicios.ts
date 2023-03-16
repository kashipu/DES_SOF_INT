//Escriba un programa con tres variables (a, b y c). Las variables a y b tendrán los valores de los catetos de un triángulo rectángulo; en la variable c se deberá almacenar el valor de la hipotenusa. Use el teorema de Pitágoras para el cálculo.
let a = 3;
let b = 4;
// Raiz cuadrada Math.sqrt()
// Exponente Math.pow()
function pitagoras(a, b) {
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    return c;
}
// Resultado
console.log(pitagoras(a, b));
console.log(`La hipotenusa de un triangulo de lados ${a}, ${b} es ${pitagoras(a, b)}`)

// El riesgo de que una persona sufra enfermedades coronarias depende de su edad y su índice de masa corporal:

// Si edad es < de 45 años 
// IMC < 22.0 riesgo bajo 
// IMC >= 22.0 riesgo medio

// Si edad es => 45 años
// IMC < 22.0 riesgo medio
// IMC >= 22.0 riesgo alto

// El IMC es el cociente entre el peso (en kg) y la altura (en metros) al cuadrado.

// Variables de entrada
let edad = 30;
let peso = 85;
let estatura = 1.73
// Función para calcular el IMC
function calcularIMC(peso, estatura) {
    const imc = peso / Math.pow(estatura, 2);
    return parseInt(imc.toFixed(2));
}
// Condicionales para calcular el riesgo
function calcularRiesgo(edad, peso, estatura) {
    const IMC = calcularIMC(peso, estatura);
    if (edad < 45) {
        if (IMC < 22) {
            return 'riesgo bajo';
        } else {
            return 'riesgo medio';
        }
    } else
        if (IMC < 22) {
            return 'riesgo medio';
        } else {
            return 'riesgo alto';
        }
    }
// Resultado
console.log(`La edad es ${edad}, el peso es ${peso} y la estatura es ${estatura} su IMC es ${calcularIMC(peso, estatura)} y su riesgo es ${calcularRiesgo(edad, peso, estatura)}`);


// Escriba un programa que entregue la suma de los primeros n números naturales.

// Variables de entrada
let n = 3;
// Función para calcular la suma de los primeros n números naturales
function sumaNaturales(n) {
    let suma = 0;
    for (let i = 0; i <= n; i++) {
        suma += i;
    }
    return suma;
}

console.log(`La suma de los primeros ${n} números naturales es ${sumaNaturales(n)}`);