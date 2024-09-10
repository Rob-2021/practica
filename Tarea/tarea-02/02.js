const numeros = [1,2,3,4,5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
console.log("Ejercicio hecho con for: " + suma); // 15

let i = 0;
let sumaWhile = 0;
while(i < numeros.length){
    sumaWhile += numeros[i];
    i++;
}

console.log("Ejercicio hecho con while: " + sumaWhile); // 15