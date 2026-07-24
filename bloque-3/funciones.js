// ===================================
// EJERCICIO 1: Función básica
// ===================================
console.log("EJERCICIO 1: Función básica");

// TODO: Crea una arrow function llamada "cuadrado" que reciba un número
// y devuelva su cuadrado (número * número)
// Ejemplo: cuadrado(4) → 16

// Escribe tu código aquí ↓

const cuadrado = (numero) => {
    const resultado = numero * numero;
    return resultado;
}

// Prueba:
console.log(cuadrado(4));   // debería imprimir 16
console.log(cuadrado(10));  // debería imprimir 100

// ===================================
// EJERCICIO 2: Función con varios parámetros
// ===================================
console.log("\nEJERCICIO 2: Función con varios parámetros");

// TODO: Crea una arrow function "calcularPrecioFinal" que reciba:
// - precio (número)
// - descuento (número entre 0 y 100, representa porcentaje)
// Y devuelva el precio final aplicando el descuento
// Ejemplo: calcularPrecioFinal(100, 20) → 80

// Escribe tu código aquí ↓

const calcularPrecioFinal = (precio,descuento) => {
    const precioFinal = precio-(precio * (descuento/100)); 
    return precioFinal;
}

// Prueba:
console.log(calcularPrecioFinal(100, 20));  // 80
console.log(calcularPrecioFinal(50, 10));   // 45


// ===================================
// EJERCICIO 3: Parámetros por defecto
// ===================================
console.log("\nEJERCICIO 3: Parámetros por defecto");

// TODO: Crea una función "presentarse" que reciba nombre y profesión
// Si no se pasa profesión, use "estudiante" por defecto
// Debe devolver: "Soy {nombre} y trabajo como {profesión}"

// Escribe tu código aquí ↓

const presentarse = (nombre,profesion="estudiante") => {    
    return "Soy ${nombre} y trabajo como ${profesion}"
}

// Prueba:
console.log(presentarse("Gabriel", "ingeniero"));  // "Soy Gabriel y trabajo como ingeniero"
console.log(presentarse("Ana"));                    // "Soy Ana y trabajo como estudiante"


// ===================================
// EJERCICIO 4: Función que decide (usa if)
// ===================================
console.log("\nEJERCICIO 4: Función con lógica");

// TODO: Crea una función "esMayorDeEdad" que reciba una edad
// y devuelva true si es >= 18, false si no
// Ejemplo: esMayorDeEdad(20) → true

// Escribe tu código aquí ↓

const esMayorDeEdad = (edad) => {
    return edad >= 18 ? true : false;
}
// Prueba:
console.log(esMayorDeEdad(20));  // true
console.log(esMayorDeEdad(15));  // false
console.log(esMayorDeEdad(18));  // true


// ===================================
// EJERCICIO 5: Callback (importante)
// ===================================
console.log("\nEJERCICIO 5: Callback");

// Ya te doy esta función:
//const aplicarOperacion = (numero, operacion) => {
//    return operacion(numero);
//};

// TODO: Crea 3 funciones:
// 1. "duplicar" → recibe n y devuelve n * 2
// 2. "triplicar" → recibe n y devuelve n * 3
// 3. "alCuadrado" → recibe n y devuelve n * n

// Escribe tus 3 funciones aquí ↓

const duplicar = (numero) => numero *2 ;
const triplicar = (numero) => numero *3 ;
const alCuadrado = (numero) => numero **2 ;

const aplicarOperacion = (numero, operacion) => {
    return operacion(numero);
};

// Prueba (NO cambies estas líneas):
console.log(aplicarOperacion(5, duplicar));    // 10
console.log(aplicarOperacion(5, triplicar));   // 15
console.log(aplicarOperacion(5, alCuadrado));  // 25


// ===================================
// EJERCICIO 6: Combinación (usa lo aprendido)
// ===================================
console.log("\nEJERCICIO 6: Combinación");

// TODO: Crea una función "clasificarNota" que reciba una nota (0-100)
// y devuelva:
// - "Excelente" si >= 90
// - "Aprobado" si >= 70
// - "Regular" si >= 50
// - "Reprobado" en otro caso

// Escribe tu código aquí ↓

const clasificarNota = (nota) => {
    if (nota >= 90) return "Excelente";
    else if (nota >= 70) return "Aprobado";
    else if (nota >= 50) return "Regular";
    return "Reprobado";
};

// Prueba:
console.log(clasificarNota(95));  // "Excelente"
console.log(clasificarNota(75));  // "Aprobado"
console.log(clasificarNota(55));  // "Regular"
console.log(clasificarNota(30));  // "Reprobado"