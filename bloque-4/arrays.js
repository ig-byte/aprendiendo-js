// ===================================
// Datos base (los usarás en varios ejercicios)
// ===================================
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const productos = [
    { id: 1, nombre: "Manzana", precio: 100, categoria: "fruta" },
    { id: 2, nombre: "Pan", precio: 500, categoria: "panadería" },
    { id: 3, nombre: "Leche", precio: 800, categoria: "lácteo" },
    { id: 4, nombre: "Chocolate", precio: 1500, categoria: "dulce" },
    { id: 5, nombre: "Banana", precio: 200, categoria: "fruta" },
    { id: 6, nombre: "Queso", precio: 3000, categoria: "lácteo" }
];

// ===================================
// EJERCICIO 1: .map() básico
// ===================================
console.log("EJERCICIO 1: Triplicar números");

// TODO: Usa .map() para crear un nuevo array con cada número triplicado
// Ejemplo: [1,2,3] → [3,6,9]

// Escribe tu código aquí ↓
const triplicados = numeros
    .map((n) => n*3);


console.log(triplicados);
// Esperado: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]


// ===================================
// EJERCICIO 2: .map() con objetos
// ===================================

console.log("\nEJERCICIO 2: Extraer nombres de productos");

// TODO: Usa .map() para extraer solo los nombres de todos los productos
// Esperado: ["Manzana", "Pan", "Leche", "Chocolate", "Banana", "Queso"]

// Escribe tu código aquí ↓
const nombresProductos = productos
    .map((n) => n.nombre);


console.log(nombresProductos);


// ===================================
// EJERCICIO 3: .filter() básico
// ===================================

console.log("\nEJERCICIO 3: Filtrar pares");

// TODO: Usa .filter() para obtener solo los números pares
// Esperado: [2, 4, 6, 8, 10]

// Escribe tu código aquí ↓
const pares = numeros
    .filter((n) => n%2 === 0)


console.log(pares);


// ===================================
// EJERCICIO 4: .filter() con objetos
// ===================================
console.log("\nEJERCICIO 4: Productos caros");

// TODO: Filtra los productos con precio mayor a 500
// (deberías obtener 3 productos: Leche, Chocolate, Queso)

// Escribe tu código aquí ↓
const productosCaros = productos
    .filter((n) => n.precio > 500);


console.log(productosCaros);


// ===================================
// EJERCICIO 5: .reduce() para sumar
// ===================================
console.log("\nEJERCICIO 5: Suma total de números");

// TODO: Usa .reduce() para sumar todos los números
// Esperado: 55

// Escribe tu código aquí ↓
const sumaTotal = numeros
    .reduce((acc,n) => acc+n,0)

console.log(sumaTotal);


// ===================================
// EJERCICIO 6: .reduce() con objetos
// ===================================
console.log("\nEJERCICIO 6: Costo total del carrito");

// TODO: Calcula el precio total sumando todos los productos
// Esperado: 6100 (100 + 500 + 800 + 1500 + 200 + 3000)

// Escribe tu código aquí ↓
const costoTotal = productos
    //.map((n) => n.precio)
    .reduce((acc,p) => acc + p.precio,0);


console.log(costoTotal);


// ===================================
// EJERCICIO 7: .find()
// ===================================
console.log("\nEJERCICIO 7: Encontrar producto por id");

// TODO: Encuentra el producto con id === 4
// Esperado: { id: 4, nombre: "Chocolate", precio: 1500, categoria: "dulce" }

// Escribe tu código aquí ↓
const producto = productos
    .find((n) => n.id ===4)


console.log(producto);


// ===================================
// EJERCICIO 8: Chaining (filter + map)
// ===================================
console.log("\nEJERCICIO 8: Nombres de productos baratos");

// TODO: Obtén un array con los NOMBRES de los productos que cuestan menos de 600
// Esperado: ["Manzana", "Pan", "Banana"]
// Pista: primero .filter() (por precio), luego .map() (para extraer nombres)

// Escribe tu código aquí ↓
const nombresBaratos = productos
    .filter((n) => n.precio < 600)
    .map((n) => n.nombre);

console.log(nombresBaratos);


// ===================================
// EJERCICIO 9: Chaining (filter + reduce)
// ===================================
console.log("\nEJERCICIO 9: Total de lácteos");

// TODO: Calcula el precio total SOLO de productos de categoría "lácteo"
// Esperado: 3800 (800 + 3000)

// Escribe tu código aquí ↓
const totalLacteos = productos
    .filter((n) => n.categoria === "lácteo")
    .reduce((acc,n) => acc+n.precio,0);


console.log(totalLacteos);


// ===================================
// EJERCICIO 10 (RETO): Chaining completo
// ===================================
console.log("\nEJERCICIO 10: Reto final");

// TODO: Obtén los nombres de productos con precio > 400, en MAYÚSCULAS
// Esperado: ["PAN", "LECHE", "CHOCOLATE", "QUESO"]
// Pista: filter → map (usa nombre.toUpperCase())

// Escribe tu código aquí ↓
const productosCarosMayusculas = productos
    .filter((producto) => producto.precio > 400)
    .map((producto) => producto.nombre.toUpperCase());


console.log(productosCarosMayusculas); 