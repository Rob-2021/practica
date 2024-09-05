// devuelva la cantidad de numeros positivos de un array

let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(array){
    let contador = 0;
    for(let numero of array){
        if(numero > 0){
            contador++;
        }
    }
    return contador;
}

console.log(cuantosPositivos(array));