let cadena = prompt('Ingrese una cadena de texto', '');
cadena = cadena.toLocaleLowerCase();
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

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

console.log('Número de veces de cada vocal: ');
console.log(`Cantidad de a: ${contadorA}`);
console.log(`Cantidad de a: ${contadorE}`);
console.log(`Cantidad de a: ${contadorI}`);
console.log(`Cantidad de a: ${contadorO}`);
console.log(`Cantidad de a: ${contadorU}`);