//funcion estandar
function saludar(nombre){
    return `Hola, ${nombre}`;
}
console.log(saludar('Juan'));

//funcion anonima
const saludar1 = function(nombre){
    return `Hola, ${nombre}`;
}
console.log(saludar1('Pedro'));

//funcion flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log(saludar2('Carlos'));

const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3('Luis'));

const getUser = () => {
    return {
        id: 123,
        nombre: 'Freed',
    }
};

console.log(getUser());