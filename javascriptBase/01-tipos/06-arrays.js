let animales = ['Perro', 'Gato', 'Pato', 'Conejo', 'Loro'];
console.log(animales);
//console.table(animales);

console.log(animales[0]);

//agregar un elemento
animales[5] = 'Tigre';
console.log(animales);

let copia = [...animales];
console.log(copia);

copia[0] = 'Leon';
console.log(copia);