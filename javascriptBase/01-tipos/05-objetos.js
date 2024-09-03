// let nombre = 'Juan';
// let apellido = 'Perez';

// console.log(nombre + ' ' + apellido);
// console.log(`${nombre} ${apellido}`);

let usuario = {
    nombre: "Juan",
    edad: 25,
};

// console.log(usuario);
// console.table(usuario);

//forma para clonar un objeto sin alterar al original
let usuario2 = { ...usuario };

usuario2.nombre = "Carlos";
console.log(usuario);
console.log(usuario2);
