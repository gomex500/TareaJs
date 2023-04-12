// 3. Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos los elementos del arreglo.
var add  = (x,y) => {
    return x + y;
}

console.log(add(12,12));

// R= 24




// 9. Escribe una función que tome un arreglo como parámetro y devuelva el número de elementos en el arreglo.
var size = (cadena) => {
    let e =0, arreglo = cadena.split("");
    for (let i = 0; i < arreglo.length; i++) {
        e++;
    }
    return e;
    // return cadena.length;
}

console.log(size("Freddy"));

// R= 6
