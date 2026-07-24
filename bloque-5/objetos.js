// ===================================
// Datos base
// ===================================
const usuario = {
    id: 42,
    nombre: "Gabriel",
    email: "gabriel@example.com",
    edad: 30,
    ciudad: "Santiago",
    pais: "Chile",
    hobbies: ["gaming", "programación", "surveys"],
    trabajo: {
        empresa: "Adentu",
        rol: "Ingeniero Geoespacial",
        años: 3
    }
};

const productos = [
    { id: 1, nombre: "Notebook", precio: 850000, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 15000, stock: 20 },
    { id: 3, nombre: "Teclado", precio: 45000, stock: 0 },
    { id: 4, nombre: "Monitor", precio: 320000, stock: 3 }
];

// ===================================
// EJERCICIO 1: Acceso básico
// ===================================
{
    console.log("EJERCICIO 1: Acceso a propiedades");

// TODO: Imprime el nombre, email y edad del usuario (con notación de punto)

// Escribe tu código aquí ↓

const nombre = usuario.nombre;
const email = usuario.email;
const edad = usuario.edad;

console.log(nombre, email, edad);
}

// ===================================
// EJERCICIO 2: Acceso anidado
// ===================================
{
    console.log("\nEJERCICIO 2: Acceso anidado");

// TODO: Imprime la empresa y el rol del usuario
// (están dentro de usuario.trabajo)

// Escribe tu código aquí ↓

const {trabajo:{empresa,rol}} = usuario;

console.log(empresa,rol);
}

// ===================================
// EJERCICIO 3: Modificar y agregar
// ===================================
{
    console.log("\nEJERCICIO 3: Modificar propiedades");

// TODO:
// 1. Cambia la edad del usuario a 31
// 2. Agrega la propiedad "telefono" con valor "+56912345678"
// 3. Imprime el objeto completo

// Escribe tu código aquí ↓

usuario.edad = 31;
usuario.telefono="+56912345678";

console.log(Object.entries(usuario));
}

// ===================================
// EJERCICIO 4: Destructuring básico
// ===================================
{
    console.log("\nEJERCICIO 4: Destructuring básico");

// TODO: Usa destructuring para extraer nombre, ciudad y pais del usuario
// en UNA sola línea, y luego imprímelos

// Escribe tu código aquí ↓

const {nombre, ciudad, pais} = usuario;

console.log(nombre,ciudad,pais);
}

// ===================================
// EJERCICIO 5: Destructuring anidado
// ===================================
console.log("\nEJERCICIO 5: Destructuring anidado");

// TODO: Usa destructuring para extraer, en UNA sola línea:
// - nombre (del usuario)
// - empresa y rol (que están dentro de usuario.trabajo)
// Luego imprímelos

// Escribe tu código aquí ↓
{
    const {nombre,trabajo:{empresa,rol}} = usuario;
    console.log(nombre,empresa,rol);
}


// ===================================
// EJERCICIO 6: Destructuring con default
// ===================================
console.log("\nEJERCICIO 6: Destructuring con valor por defecto");

// TODO: Del usuario, destructura "nombre" y "profesion"
// Como "profesion" NO existe en el objeto, ponle un default de "Sin profesión"
// Imprime ambos

// Escribe tu código aquí ↓
{
    const {nombre,profesion="Sin Profesión"} = usuario;
    console.log(nombre,profesion);

}


// ===================================
// EJERCICIO 7: Destructuring en función
// ===================================
console.log("\nEJERCICIO 7: Destructuring en parámetros");

// TODO: Crea una arrow function "presentarUsuario" que reciba UN objeto
// y usando destructuring EN EL PARÁMETRO extraiga { nombre, ciudad, pais }
// Debe devolver: "Soy {nombre}, vivo en {ciudad}, {pais}"

// Escribe tu código aquí ↓
const presentarUsuario = ({nombre,ciudad,pais}) => {
    return `Soy ${nombre} vivo en ${ciudad}, ${pais}`;
}


// Prueba:
console.log(presentarUsuario(usuario));
// Esperado: "Soy Gabriel, vivo en Santiago, Chile"


// ===================================
// EJERCICIO 8: Recorrer objeto
// ===================================
console.log("\nEJERCICIO 8: Recorrer propiedades");

// TODO: Usa Object.keys() para obtener todas las claves del usuario
// y luego con .forEach() imprime "clave: valor" por cada propiedad
// (usa `${clave}: ${usuario[clave]}` con template literal)
// NOTA: para valores que son objetos/arrays, imprimirán [object Object] o similar
// eso está bien, es esperado.

// Escribe tu código aquí ↓
{
    const claves = Object.keys(usuario)
    claves.forEach((clave) => {
        console.log(`${clave}: $${usuario[clave]}`)
    });
}


// ===================================
// EJERCICIO 9: Destructuring con .map() 🔥
// ===================================
console.log("\nEJERCICIO 9: Destructuring dentro de .map()");

// TODO: Del array "productos", usa .map() para crear un array con strings así:
// "Notebook - $850000"
// Dentro del callback del .map(), usa destructuring del parámetro para
// extraer { nombre, precio }
// Luego usa template literals

// Escribe tu código aquí ↓
{
    const listadoProductos = productos
        .map(({nombre,precio}) => `${nombre} - $${precio}`)

    console.log(listadoProductos);
}
// Esperado: ["Notebook - $850000", "Mouse - $15000", "Teclado - $45000", "Monitor - $320000"]


// ===================================
// EJERCICIO 10 (RETO): Todo junto
// ===================================
console.log("\nEJERCICIO 10: Chaining + destructuring + template");

// TODO: De los productos:
// 1. Filtra los que tienen stock > 0
// 2. Mapea a strings con formato "✅ {nombre}: {stock} unidades a ${precio}"
// Usa destructuring en los callbacks y template literals

// Escribe tu código aquí ↓
{
    const disponibles = productos
        .filter(({ stock}) => stock >0)
        .map(({nombre, stock, precio}) => `✅ ${nombre} : ${stock} unidades a ${precio}`);

    console.log(disponibles);
}

// Esperado (aprox):
// [
//   "✅ Notebook: 5 unidades a $850000",
//   "✅ Mouse: 20 unidades a $15000",
//   "✅ Monitor: 3 unidades a $320000"
// ]