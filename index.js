// 1. Escribe una función que tome dos números como parámetros y devuelva la suma de ambos números.
var add  = (x,y) => {
    return x + y;
}

console.log(add(12,12));

// R= 24


// 2. Escribe una función que tome una cadena de texto como parámetro y devuelva la longitud de la cadena.


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


// 4. Escribe una función que tome una cadena como parámetro y devuelva la cadena con las palabras en orden inverso.


// 5. Escribe una función que tome un arreglo como parámetro y devuelva el primer elemento del arreglo.


// 6. Escribe una función que tome un número como parámetro y devuelva true si el número es par, o false si es impar.


// 7. Escribe una función que tome dos números como parámetros y devuelva el número mayor.


// 8. Escribe una función que tome una cadena como parámetro y devuelva true si la cadena es un palíndromo, es decir, si se lee igual de adelante hacia atrás que de atrás hacia adelante.


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


// 10.Escribe una función que tome un número como parámetro y devuelva true si el número es positivo, o false si es negativo.


// 11.Escribe una función que tome dos cadenas de texto como parámetros y devuelva la concatenación de ambas cadenas.


// 12.Escribe una función que tome un arreglo como parámetro y devuelva el último elemento del arreglo.


// 13.Escribe una función que tome una cadena de texto como parámetro y devuelva true si la cadena contiene la letra "a", o false si no la contiene.


// 14.Escribe una función que tome dos cadenas como parámetros y devuelva true si ambas cadenas son anagramas, es decir, si tienen las mismas letras en un orden diferente.


// 15.Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos los números en el arreglo.


// 16.Escribe una función que tome dos números como parámetros y devuelva el número menor.


// 17.Escribe una función que tome una cadena de texto como parámetro y devuelva la cadena en mayúsculas.


// 18.Escribe una función que tome una cadena de texto como parámetro y devuelva la cadena en minúsculas.


// 19.Escribe una función que tome un número como parámetro y devuelva true si el número es divisible por 3 y 5, o false si no lo es.


// 20.Escribe una función que tome un arreglo como parámetro y devuelva una copia del arreglo invertido.


// 21.Escribe una función que tome un arreglo como parámetro y devuelva el último elemento del arreglo.


// 22.Escribe una función que tome un número como parámetro y devuelva el cubo de su valor si el número es negativo, o el doble del valor si no lo es.


// 23.Escribe una función que tome una cadena como parámetro y devuelva la cadena en orden inverso. Debe emplear el ciclo for.


// 24.Escribe una función que tome dos números como parámetros y devuelva el resultado de la división del primero por el segundo.


// 25.Escribe una función que tome tres números como parámetros y devuelva el resultado de la suma de los dos primeros, multiplicado por el tercero.


// 26.Escribe una función que tome cuatro números como parámetros y devuelva el resultado de la resta del primer número por el segundo, multiplicado por la división del tercer número entre el cuarto.


// 27.Escribe una función que tome dos números y un booleano como parámetros. Si el booleano es verdadero, la función debe devolver la multiplicación de los dos números; de lo contrario, debe devolver su diferencia.


// 28.Escribe una función que tome tres parámetros booleanos y devuelva verdadero si al menos uno de los tres parámetros es verdadero, de lo contrario, debe devolver falso.


// 29.Escribe una función que tome dos parámetros numéricos y un parámetro booleano. Si el tercer parámetro es verdadero, la función debe devolver el resultado de elevar el primer parámetro a la potencia del segundo parámetro, de lo contrario, debe devolver la raíz cuadrada del primer parámetro.


// 30.Escribe una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo con todas las palabras en minúscula.


// 31.Escribe una función en JavaScript que reciba un arreglo de números y retorne el promedio de todos los elementos del arreglo.


// 32.Dado un arreglo de números, escribe una función que devuelva la suma de todos los números pares. Si el arreglo está vacío o no contiene números pares, la función deberá devolver 0.