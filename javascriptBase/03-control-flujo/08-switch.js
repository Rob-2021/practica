let accion = "crear";

switch(accion){
    case "actualizar":
        console.log("Actualizando usuario");
        break;
    case "crear":
        console.log("Creando usuario");
        break;
    default:
        console.log("No se reconoce la acción");
        break;
}