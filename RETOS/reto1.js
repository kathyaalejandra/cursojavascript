//Pidiendo al usuario ingresar una oración
let cadena = prompt('Ingrese una cadena de texto', '');
cadena = cadena.toLocaleLowerCase(); //Poner todos los caracteres en minúscula 
//Comenzando los contadores de vocales desde 0

let contadorA = 0;                   
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

//Comienza el proceso para contar y sumar las vocales
for (let i = 0; i < cadena.length; i++){
    let caracter = cadena[i];

    if (caracter === 'a'){
        contadorA++;
    } else if (caracter === 'e'){
        contadorE++;
    } else if (caracter === 'i'){
        contadorI++;
    } else if (caracter === 'o'){
        contadorO++;
    } else if (caracter === 'u'){
        contadorU++;
    }
}
//Mostrando las cantidades de cada vocal
console.log('Número de veces de cada vocal: ');
console.log(`Cantidad de a: ${contadorA}`);
console.log(`Cantidad de e: ${contadorE}`);
console.log(`Cantidad de i: ${contadorI}`);
console.log(`Cantidad de o: ${contadorO}`);
console.log(`Cantidad de u: ${contadorU}`);