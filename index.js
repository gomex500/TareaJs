// 3. Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos los elementos del arreglo.
var addArray  = (arreglo) => {
    let sum = 0;
    // for (let val of arreglo) {
    //     sum += val;
    //   }
    for (let i = 0; i < arreglo.length; i++) {
        sum += arreglo[i];
    }
    return sum;
}

let array = [2,4,5];

console.log(addArray(array));
console.log(addArray([12,5,3]));

// R= 11
// R= 20




// 9. Escribe una función que tome un arreglo como parámetro y devuelva el número de elementos en el arreglo.
var arregloLength = arreglo => {
    let e =0;
    for (let i = 0; i < arreglo.length; i++) {
        e++;
    }
    return e;
}

console.log(arregloLength([12,34,5]));
