function concatenarNombres() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    
    // Concatenamos separando por un espacio
    let nombreCompleto = nombre + " " + apellido;
    
    // Modificamos la propiedad .value del tercer input
    document.getElementById("resultadoCompleto").value = nombreCompleto;
}