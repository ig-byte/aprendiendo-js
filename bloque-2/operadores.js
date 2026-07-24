// ===================================
// EJERCICIO 1: Clasificador de edad
// ===================================
console.log("EJERCICIO 1: Clasificador de edad")
const edad = 25;

// TODO: Escribe un if/else que imprima:
// - "Niño" si edad < 12
// - "Adolescente" si edad entre 12 y 17
// - "Adulto" si edad entre 18 y 64
// - "Adulto mayor" si edad >= 65

// Escribe tu código aquí ↓
if (edad < 12) {
    console.log("Niño");
}   else if (edad >= 12 && edad <= 17) {
    console.log("Adolecente")
}   else if (edad >=18 && edad <= 64) {
    console.log("Adulto")
}   else if (edad >= 65) {
    console.log("Adulto mayor")
}
    


// ===================================
// EJERCICIO 2: Contador con for
// ===================================
console.log("EJERCICIO 2: Contador con for")
// TODO: Imprime los números del 1 al 10

// Escribe tu código aquí ↓
for (let index = 1; index <= 10; index++) {
    console.log(index);
}


// ===================================
// EJERCICIO 3: Números pares
// ===================================
console.log("EJERCICIO 3: Números pares")
// TODO: Imprime SOLO los números pares del 1 al 20
// Pista: usa el operador % (módulo)

// Escribe tu código aquí ↓
for (let index = 1; index <= 20; index++) {
    if (index % 2 === 0) {
        console.log("numero par es: ",index)
    }
}


// ===================================
// EJERCICIO 4: Recorrer un array
// ===================================
console.log("EJERCICIO 4: Recorrer un array")
const lenguajes = ["JavaScript", "Python", "Java", "Go", "Rust"];

// TODO: Usa for...of para imprimir cada lenguaje precedido por "Me interesa: "
// Ejemplo: "Me interesa: JavaScript"

// Escribe tu código aquí ↓
for (const lenguaje of lenguajes) {
    console.log("Me interesa: ",lenguaje)
}


// ===================================
// EJERCICIO 5: FizzBuzz (clásico de entrevistas)
// ===================================
console.log("EJERCICIO 5: FizzBuzz (clásico de entrevistas)")
// TODO: Del 1 al 30, imprime:
// - "Fizz" si es divisible por 3
// - "Buzz" si es divisible por 5
// - "FizzBuzz" si es divisible por 3 Y 5
// - El número, en otro caso

// Escribe tu código aquí ↓

let Fizz = 3;
let Buzz = 5;


for (let index = 1; index <= 30; index++) {
    if ( index % Fizz === 0 && index % Buzz === 0 ) {
        console.log("FizzBuzz");
    }
    else if ( index % Fizz === 0) {
        console.log("Fizz");
    }
    else if ( index % Buzz === 0) {
        console.log("Buzz");
    }
    else {
        console.log(index);
    }
}
