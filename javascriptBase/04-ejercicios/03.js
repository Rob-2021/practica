//numero mayor y menor de un array

let array = [2,5,7,15,-100,-55];

function devuelvaMayorMenor(array){
    let mayor = array[0];
    let menor = array[0];
    for(let numero of array){
        if(numero > mayor){
            mayor = numero;
        }
        if(numero < menor){
            menor = numero;
        }
    }
    return [mayor, menor];
}

let numeros = devuelvaMayorMenor(array);
console.log(numeros);