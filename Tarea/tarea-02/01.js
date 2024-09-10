let valorEntero = 5;
let contenedor = [];

for(let i = 0; i <= valorEntero; i++){
    contenedor += i +",";
}

console.log("Ejercicio hecho con for: "+ contenedor); // 0,1,2,3,4,5,

let i = 0;
let contenedorWhile = [];
while(i <= valorEntero){
    contenedorWhile += i +",";
    i++;
}

console.log("Ejercicio hecho con while: "+ contenedorWhile); // 0,1,2,3,4,5,