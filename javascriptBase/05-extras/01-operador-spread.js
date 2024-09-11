//objetos
console.log('Objetos');
const persona = {
    id: 1323,
    nombre: 'Juan',
    edad: 25,
};

console.log(persona);

const persona2 = {...persona}
console.log(persona2);

persona2.nombre = 'Carlos';

//Arrays
console.log('Arrays')

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

const numeros2 = [...numeros, 6];
console.log(numeros2);