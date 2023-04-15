// 1. Escribe una función que tome dos números como parámetros y devuelva la suma de ambos números.
var add  = (x,y) => {
    return x + y;
}

console.log(add(12,12));

// R= 24

// ____________________________________________________________________________________________________________
// 2. Escribe una función que tome una cadena de texto como parámetro y devuelva la longitud de la cadena.
var size = (cadena) => {
    let e =0, arreglo = cadena.split("");
    // for (const value of arreglo) {
    //     e++;
    //   }
    for (let i = 0; i < arreglo.length; i++) {
        e++;
    }
    return e;
    // return cadena.length;
}

let cadena = "Max"

console.log(size(cadena));
console.log(size("Freddy"));

// R= 3
// R= 6

// ____________________________________________________________________________________________________________
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

// ____________________________________________________________________________________________________________
// 4. Escribe una función que tome una cadena como parámetro y devuelva la cadena con las palabras en orden inverso.
var invertir = (cadena) =>{
    var arreglo1 = [], e = 0, arreglo = cadena.split("");
    for (let i = arreglo.length; i >= 0; i--) {
        arreglo1[e] = arreglo[i];
        e++;
    }
    cadena = arreglo1.join("");
    return cadena;
}

console.log(invertir("max"));


// ____________________________________________________________________________________________________________
// 5. Escribe una función que tome un arreglo como parámetro y devuelva el primer elemento del arreglo.
var firts = arreglo => {return arreglo[0]}

console.log(firts([12,45,34]));

//R 12

// ____________________________________________________________________________________________________________
// 6. Escribe una función que tome un número como parámetro y devuelva true si el número es par, o false si es impar.
var par = num => {
    if (num%2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(par(30));
console.log(par(57));

//R true
//R false

// 7. Escribe una función que tome dos números como parámetros y devuelva el número mayor.
var max = (n1, n2) => {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

console.log(max(12,5));
//R 12


// 8. Escribe una función que tome una cadena como parámetro y devuelva true si la cadena es un palíndromo, es decir, si se lee igual de adelante hacia atrás que de atrás hacia adelante.
var palindromo = cadena => {
    cadena = cadena.toLowerCase().replace(/\s/g,'');
    var cadenaI = cadena.split('').reverse().join('');
    if (cadena === cadenaI) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo("roma amor"));
console.log(palindromo("hola mundo"));

//R true
//R false

// 9. Escribe una función que tome un arreglo como parámetro y devuelva el número de elementos en el arreglo.
var arregloLength = arreglo => {
    let e =0;
    for (let i = 0; i < arreglo.length; i++) {
        e++;
    }
    return e;
}

let arr = [2,4,5,6,12];

console.log(arregloLength(arr));
console.log(arregloLength([12,34,5]));

//5
//3


// 10.Escribe una función que tome un número como parámetro y devuelva true si el número es positivo, o false si es negativo.
var positivo = num =>{
    if (num >= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(positivo(12));
console.log(positivo(-5));

//R true
//R false

// 11.Escribe una función que tome dos cadenas de texto como parámetros y devuelva la concatenación de ambas cadenas.
var join = (cadena1, cadena2) =>{
    return cadena1 + cadena2;
}

console.log(join('hola','freddy'));

//R holafreddy

// 12.Escribe una función que tome un arreglo como parámetro y devuelva el último elemento del arreglo.
var end = arreglo => {return arreglo[arreglo.length-1]}

console.log(end([12,45,34]));

//R 34


// 13.Escribe una función que tome una cadena de texto como parámetro y devuelva true si la cadena contiene la letra "a", o false si no la contiene.
var a = cadena => {
    let cadena1 = cadena.split("");
    console.log(cadena1);
    for (let i = 0; i < cadena1.length; i++) {
        if (cadena1[i] === 'a') {
            return true;
        }
    }
    return false;
}

console.log(a("max"));
//R true


// 14.Escribe una función que tome dos cadenas como parámetros y devuelva true si ambas cadenas son anagramas, es decir, si tienen las mismas letras en un orden diferente.



// 15.Escribe una función que tome un arreglo de números como parámetro y devuelva la suma de todos los números en el arreglo.
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

let arrey = [2,4,5];

console.log(addArray(arrey));
console.log(addArray([12,5,3]));

// R= 11
// R= 20

// 16.Escribe una función que tome dos números como parámetros y devuelva el número menor.
var max = (n1, n2) => {
    if (n1 < n2) {
        return n1;
    } else {
        return n2;
    }
}

console.log(max(12,5));
//R 5

// 17.Escribe una función que tome una cadena de texto como parámetro y devuelva la cadena en mayúsculas.
var mayusculas = cadena => {return cadena.toUpperCase()}

console.log(mayusculas('freddy'));

//R FREDDY

// 18.Escribe una función que tome una cadena de texto como parámetro y devuelva la cadena en minúsculas.
var mayusculas = cadena => {return cadena.toLowerCase()}

console.log(mayusculas('FREDDY'));

//R freddy

// 19.Escribe una función que tome un número como parámetro y devuelva true si el número es divisible por 3 y 5, o false si no lo es.
var div = num => {
    if (num%5 == 0 && num%3 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(div(15));
console.log(div(55));

//R true
//R false


// 20.Escribe una función que tome un arreglo como parámetro y devuelva una copia del arreglo invertido.
var invertido = arreglo => {
    let arreglo1 = [];
    for (let i = arreglo.length; i > 0; i--) {
        arreglo1[i] = arreglo[i];
    }

    return arreglo1;
}

console.log([12,45,67]);

// 21.Escribe una función que tome un arreglo como parámetro y devuelva el último elemento del arreglo.
var invertido = (arreglo) => {
    let arreglo1 = [], e = 0;
    for (let i = arreglo.length-1; i >= 0; i--) {
        arreglo1[e] = arreglo[i];
        e++;
    }

    return arreglo1;
}

console.log(invertido([12,45,67]));

//R [67,45,12]

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