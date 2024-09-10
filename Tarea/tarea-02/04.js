let persona = {
    nombre: 'Juan',
    edad: 25,
    profesion: 'Ingeniero',
};

// console.log(persona);

// function actualizarInformacion(nuevaEdad, nuevaProfesion) {
//     persona.edad = nuevaEdad;
//     persona.profesion = nuevaProfesion;
// }

// actualizarInformacion(30, 'Doctor');
// console.log(persona); 

function actualizarInformacion(nuevaEdad, nuevaProfesion) {
    return {
        ...persona,
        edad: nuevaEdad,
        profesion: nuevaProfesion,
    };
}

let personaActualizada = actualizarInformacion(30, 'Doctor');
console.log(persona);
console.log(personaActualizada);