let usuario = {
    id: 1,
    nombre: 'Juan',
    edad: 25,
}

console.log(usuario)

for(let key in usuario) {
    console.log(key, usuario[key]);
}
