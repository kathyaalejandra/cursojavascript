//Encapsular metodo y logicas
//Sirve para reutilizar código, es um tipo de dato más

//Faltaría el mostrarMensaje() para que se vea
function mostrarMensaje() {
    console.log('¡Hola a todos!');
}
//Función por declaración
function saludar() {
    return "Hola";
}
saludar();
//Función por expresión
//Para reinvocar una función
const saludo = function saludar(){
    return "Hola!";
}
saludo();