//Numeros
let edad = 23;
let sueldo = 12500000;
const PI = 3.14;

// Con Notación Cientifica
const x = 1000000;
const n_grande = 1e6; // 1 millón
const n_pequeno = 1e-6; // 0.000001

console.log(n_grande);
console.log(n_pequeno);

// BigInt
const bigInt = 1234567891234567891234567891234567890n;
console.log(bigInt);

// ¿Es posible esto?
console.log(4 / 2);

// NaN (Error de Cálculo)
console.log("Hola" / 2); // NaN, tal división es errónea
console.log("Hola" * 4);

// STRINGS
console.log('################ STRINGS ################');
let nombre = "Kathya";
let ciudad = "Ancud";
let capital = "Puerto Montt"
let string1 = "Hola ¿Cómo estás?";
let string2 = '¡Buenas Tardes!';
let frase = `Este es un saludo: ${string1}`; //Backticks
console.log (`${frase}`);

// Utilizando el operador + de concatenación
console.log(ciudad + " y " + capital + " pertenecen a la Región de Los Lagos ");

// Operador con Comas
console.log('Mi nombre es', nombre);
console.log(capital, "es la capital de la Región de Los Lagos");
console.log(`Mi nombre es "${nombre}" y vivo en la ciudad de ${ciudad}`);

//BOOLEANS
// Asignación de booleanos a variables
console.log('################ BOOLEANS ################');
let V = true;
let F = false;
// Ejemplo de un Ciclo:
if (V) {
    //Se ejecuta si el valor es True
    console.log("Es Verdadero");
} else {
    //Se ejecuta si el valor es false
    console.log("Es Falso");
};
// DIFERENCIA ENTRE NULL Y UNDEFINED
let caja = null; // la variable caja esta vacia
let noExiste;

console.log(caja); // null
console.log(noExiste); // undefined

// SYMBOL
console.log('################ SYMBOL ################');
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // Falso, cada símbolo es únic

// Hay 2 formas de crear un objeto
console.log('################ OBJETOS ################')
let user = new Object(); // sintaxis de "constructor de objetos" (No se suele ocupar a menudo)
let usuario = {};  // Objeto literal (Objeto Vacío)

// Objeto Literal
usuario = {          // un objeto
    Nombre: "Kathya",      // En la clave "name" se almacena el valor "Mateo"
    Edad: 23,           // En la clave "age" se almacena el valor 30
    Cuidad: "Ancud",    // En la clave "city" se almacena el valor "Osorno"
    "correo electronico": "kathya@gmail.com"   // Se puede agregar claves con espacios utilizando comillas
};

// Accediendo a una propiedad del objeto (Propiedad Nombre)
console.log(usuario.Nombre);
// Accediendo a una propiedad con más de 2 palabras en su clave (Propiedad Correo)
console.log(usuario["correo electronico"]);

// Agregando nuevas propiedades al Objeto Literal (Notación con Puntos)
usuario.provincia = "Provincia de Ancud";
usuario.estado = true;
usuario.pais = "Chile";
usuario.genero = "Femenino";
// Agregando nuevas propiedades al Objeto Literal (Notación con Corchetes)
usuario["estado_civil"] = "Soltero"
// Eliminando una propiedad del objeto
delete usuario.estado;

// Impresión del Objeto Actualizado
console.log(usuario);