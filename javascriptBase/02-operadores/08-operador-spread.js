const persona = {
    nombre: 'Juan',
    edad: 25,
    profesion: 'Ingeniero',
};

let persona2 = {...persona};
persona2.nombre = 'Pedro';

console.log(persona);
console.log(persona2);

let numeros = [1,2,3,4,5];
let numeros2=[...numeros, 6];

console.log(numeros);
console.log(numeros2);