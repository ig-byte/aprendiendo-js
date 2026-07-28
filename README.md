# Aprendiendo JavaScript

Mi ruta de aprendizaje de JavaScript desde cero hasta React.

## Estructura

- `bloque-1/` — Variables, tipos y primeros pasos
- `bloque-2/` — Operadores, condicionales y loops
- `bloque-3/` — Funciones (arrow functions, callbacks)
- `bloque-4/` — Arrays y sus métodos (`map`, `filter`, `reduce`, `find`) + chaining
- `bloque-5/` — Objetos, destructuring y template literals
- `bloque-6/` — Spread y Rest operator (`...`)
- `bloque-7/` — 

## Progreso

- [x] Bloque 1: Fundamentos (variables, tipos, `console.log`)
- [x] Bloque 2: Operadores, condicionales y loops
- [x] Bloque 3: Funciones y callbacks
- [x] Bloque 4: Arrays y métodos + chaining
- [x] Bloque 5: Objetos y destructuring
- [x] Bloque 6: Spread / Rest operator 
- [x] Bloque 7: Async / Promises (async/await) (en curso)
- [ ] Bloque 8: Módulos (import / export)
- [ ] Bloque 9: DOM básico
- [ ] Ruta React

## Cómo ejecutar

Cada bloque tiene sus propios archivos `.js`. Para ejecutar uno:

```bash
node bloque-N/archivo.js
```

Ejemplo:
```bash
node bloque-6/spread-rest.js
```

## Flujo de trabajo (Git)

Cada bloque se desarrolla en una branch propia:

```bash
git checkout main
git pull origin main
git checkout -b feature/bloque-N-tema

# ... trabajar los ejercicios ...

git add .
git