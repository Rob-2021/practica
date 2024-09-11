const personajes = ['Goku', 'Vegeta', 'Trunks'];
console.log(personajes);

console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

console.log('!---------------------!')

const [p1,p2,p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


//ternario
const activo = true;
let mensaje = '';

const mensaje2 = activo && 'Activo';