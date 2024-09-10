let persona = {
    nombre: 'Juan',
    edad: 25,
    profesion: 'Ingeniero',
};

function actualizarInformacion(nuevaEdad, nuevaProfesion) {
    persona.edad = nuevaEdad;
    persona.profesion = nuevaProfesion;
}

actualizarInformacion(30, 'Doctor');
console.log(persona); 