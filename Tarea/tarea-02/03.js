const nombres =["Ana", "Luis", "Carlos", "Maria"];
let contenedor = [];

for(let i = 0; i < nombres.length; i++){
    contenedor[i] = nombres[i];
}

//console.log(`Ejercicio hecho con for: ${contenedor}`); // Ana,Luis,Carlos,Maria
console.log("Ejercicio hecho con for: ");
console.log(contenedor); // [ 'Ana', 'Luis', 'Carlos', 'Maria' ]

let i = 0;
let contenedorWhile = [];
while(i < nombres.length){
    contenedorWhile[i] = nombres[i];
    i++;
}

console.log("Ejercicio hecho con while: ");
console.log(contenedorWhile);

let j = 0;
let contenedorDoWhile = [];
do{
    contenedorDoWhile[j] = nombres[j];
    //console.log(contenedorDoWhile[j]);
    j++;
} while(j < nombres.length);

console.log("Ejercicio hecho con do while: ");
console.log(contenedorDoWhile);