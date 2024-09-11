//Desestructuracion
//Asignacion desestructurante

// const persona = {
//     nombre: 'Juan',
//     edad: 25,
//     apellido: 'Perez',
//     clave: 12,
// };

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.edad);

console.log('Desestructuracion');
//const {nombre, edad, apellido} = persona;
// console.log(nombre);
// console.log(edad);

// const retornaPersona = (usuario) => {
//     console.log(usuario);
// }
// retornaPersona(persona);

// const retornaPersona1 = (usuario) => {
//     console.log(nombre, edad);
// }
// retornaPersona1(persona);

// const retornaPersona2 = ({nombre, edad, id=32}) =>{
//     console.log(nombre, edad, id);
// }
// retornaPersona2(persona);

const cantantes = {
    nombre: 'Bruno',
    genero: 'Pop',
    albunes: 12,
};

const {nombre, genero} = cantantes;

const retornaCantante = (cantante) =>{
    console.log(nombre, genero);
}
retornaCantante(cantantes);

const useContext = ({nombre, genero}) =>{
    //console.log(nombre, genero);
    return {
        nombreClave: nombre,
        generoArtistico: genero,
        personalArtis:{
            anios: 36,
            altura: 1.80,
        }
    }
}
// const {nombreClave, generoArtistico} = useContext(cantantes);
// console.log(nombreClave, generoArtistico);

const {nombreClave, generoArtistico, personalArtis:{anios, altura}} = useContext(cantantes);
console.log(nombreClave, generoArtistico, anios, altura);