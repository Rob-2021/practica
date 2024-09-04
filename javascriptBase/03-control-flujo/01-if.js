// let edad = 20;

// if (edad >= 18) {
//     console.log("Eres mayor de edad");
// } else {
//     console.log("Eres menor de edad");
// }

/*
A: 90 - 100
B: 80 - 89
C: 70 - 79
D: 60 - 69
F: 0 - 59
*/

let nota = 90;

if(nota > 100 || nota < 0){
    console.log("Nota no valida");
} else if (nota >= 90 && nota <= 100) {
    console.log("A");
} else if (nota >= 80 && nota <= 89) {
    console.log("B");
} else if (nota >= 70 && nota <= 79) {
    console.log("C");
} else if (nota >= 60 && nota <= 69) {
    console.log("D");
} else {
    console.log("F");
}

function cualEsMayor(a,b){
    if(a > b){
        return a;
    } else {
        return b;
    }
}

console.log(cualEsMayor(10, 20)); // 20

function cualEsMayorTernario(a,b){
    return a > b ? a : b;
}

console.log(cualEsMayorTernario(10, 30)); // 30

// escribe un programa que escriba si un numero es positivo, negativo o cero

let numero = 1;

if(numero >= 1){
    console.log("Positivo");
} else if(numero < 0){
    console.log("Negativo");
} else if(numero === 0){
    console.log("Cero");
} else {
   console.log("no es un numero");
}