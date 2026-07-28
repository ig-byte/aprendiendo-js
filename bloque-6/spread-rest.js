// ===================================
// Datos base
// ===================================
const numeros = [1, 2, 3];
const masNumeros = [4, 5, 6];

const usuario = {
    nombre: "Gabriel",
    edad: 30,
    ciudad: "Santiago"
};

const trabajo = {
    empresa: "Adentu",
    rol: "Ingeniero"
};

// ===================================
// EJERCICIO 1: Spread para combinar arrays
// ===================================
console.log("EJERCICIO 1: Combinar arrays");

// TODO: Combina "numeros" y "masNumeros" en un array llamado "todos"
// Esperado: [1, 2, 3, 4, 5, 6]

// Escribe tu código aquí ↓
const todos =  [...numeros,...masNumeros]


console.log(todos);


// ===================================
// EJERCICIO 2: Spread para copiar array
// ===================================
console.log("\nEJERCICIO 2: Copiar array");

// TODO:
// 1. Crea una COPIA de "numeros" llamada "copia" usando spread
// 2. Agrégale un 99 al final (con push)
// 3. Imprime AMBOS (numeros y copia) para verificar que el original no cambió

// Escribe tu código aquí ↓
const copia = [...numeros]


copia.push(99);
console.log("Original:", numeros);   // [1, 2, 3]
console.log("Copia:", copia);        // [1, 2, 3, 99]


// ===================================
// EJERCICIO 3: Agregar al inicio y final
// ===================================
console.log("\nEJERCICIO 3: Agregar elementos");

const frutas = ["manzana", "banana"];

// TODO: Crea "expandido" con "kiwi" al INICIO y "uva" al FINAL
// Esperado: ["kiwi", "manzana", "banana", "uva"]

// Escribe tu código aquí ↓
const expandido = ["kiwi",...frutas,"banana"];


console.log(expandido);


// ===================================
// EJERCICIO 4: Spread para combinar objetos
// ===================================
console.log("\nEJERCICIO 4: Combinar objetos");

// TODO: Combina "usuario" y "trabajo" en un objeto llamado "perfil"
// Esperado: { nombre: "Gabriel", edad: 30, ciudad: "Santiago", empresa: "Adentu", rol: "Ingeniero" }

// Escribe tu código aquí ↓
const perfil = {...usuario,...trabajo};


console.log(perfil);


// ===================================
// EJERCICIO 5: Actualizar propiedad (patrón React)
// ===================================
console.log("\nEJERCICIO 5: Actualizar propiedad con spread");

// TODO: Crea "usuarioActualizado" que sea igual a "usuario" pero con
// edad = 31 y agregando email = "gabriel@example.com"
// (usa spread + sobrescritura)
// IMPORTANTE: no modifiques el original

// Escribe tu código aquí ↓
{
    const usuarioActualizado = {...usuario,edad:31,email:"gabriel@example.com"};


    console.log("Original:", usuario);            // no debe cambiar
    console.log("Actualizado:", usuarioActualizado);
}


// ===================================
// EJERCICIO 6: Rest en función (parámetros variables)
// ===================================
console.log("\nEJERCICIO 6: Rest en función");

// TODO: Crea una arrow function "multiplicarTodos" que reciba cualquier
// cantidad de números usando rest, y devuelva el producto de todos.
// Pista: usa reduce con 1 como valor inicial (multiplicar por 1 no altera)

// Escribe tu código aquí ↓
const multiplicarTodos = (...muchosNumeros) => {
    return muchosNumeros.reduce((acc,num) => acc*num,1);    
}


// Pruebas:
console.log(multiplicarTodos(2, 3));           // 6
console.log(multiplicarTodos(2, 3, 4));        // 24
console.log(multiplicarTodos(5, 5, 5, 5));     // 625


// ===================================
// EJERCICIO 7: Rest en destructuring de objeto
// ===================================
console.log("\nEJERCICIO 7: Rest en destructuring");

const persona = {
    id: 1,
    nombre: "Ana",
    edad: 25,
    ciudad: "Valparaíso",
    pais: "Chile",
    email: "ana@test.com"
};

// TODO: Extrae "id" y "nombre" en variables separadas
// Y mete TODO lo demás en una variable llamada "detalles" (usa ...rest)
// Imprime los 3

// Escribe tu código aquí ↓

const {id,nombre,...detalles} = persona;

console.log(`id:${id}`);
console.log(`nombre:${nombre}`);
console.log("detalles:",detalles);


// Esperado:
// id: 1
// nombre: Ana
// detalles: { edad: 25, ciudad: "Valparaíso", pais: "Chile", email: "ana@test.com" }


// ===================================
// EJERCICIO 8: Rest en destructuring de array
// ===================================
{
    console.log("\nEJERCICIO 8: Rest con arrays");

    const listaNumeros = [10, 20, 30, 40, 50];

    // TODO: Destructura los DOS primeros en variables "primero" y "segundo"
    // El resto mételo en "resto"
    // Imprime los 3

    // Escribe tu código aquí ↓

    const [primero,segundo,...resto] = listaNumeros;

    console.log(primero);
    console.log(segundo);
    console.log(resto);

    // Esperado:
    // primero: 10
    // segundo: 20
    // resto: [30, 40, 50]

}

// ===================================
// EJERCICIO 9: Spread en llamada a función
// ===================================
console.log("\nEJERCICIO 9: Spread en llamada");

const valores = [3, 8, 1, 12, 5];

// TODO: Usa Math.max con spread para obtener el número más grande
// Esperado: 12
// Pista: Math.max(...array)

// Escribe tu código aquí ↓
const maximo = Math.max(...valores);


console.log(maximo);


// ===================================
// EJERCICIO 10 (RETO): Todo junto
// ===================================
console.log("\nEJERCICIO 10: Reto final");

const carritoInicial = [
    { id: 1, nombre: "Manzana", precio: 100 },
    { id: 2, nombre: "Pan", precio: 500 }
];

const nuevoProducto = { id: 3, nombre: "Leche", precio: 800 };

// TODO:
// 1. Crea "carritoActualizado" agregando "nuevoProducto" al final del carrito
//    (SIN modificar el original — usa spread)
// 2. Crea "carritoConDescuento" donde el segundo producto (id: 2)
//    tenga precio 400 en vez de 500 (usa map + spread)
//    Pista: dentro del map, si el producto es el que queremos actualizar,
//    devuelve { ...producto, precio: 400 }; si no, devuelve el producto tal cual

// Escribe tu código aquí ↓
const carritoActualizado = [...carritoInicial,nuevoProducto];


const carritoConDescuento = carritoActualizado.map((item) => 
        item.id === 2
            ? { ...item, precio: 400}
            : item
);


console.log("Original:", carritoInicial);
console.log("Con nuevo producto:", carritoActualizado);
console.log("Con descuento:", carritoConDescuento); 