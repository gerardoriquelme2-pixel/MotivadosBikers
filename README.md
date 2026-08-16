# Proyecto: Motivados Bikers 🏍️

## Descripción

Proyecto personal de desarrollo web creado desde cero para aprender HTML, CSS y JavaScript.

La página representa al grupo motoquero **Motivados Bikers**.

Objetivo: crear un portafolio visual del grupo mostrando:

* historia;
* integrantes;
* rutas;
* experiencias;
* identidad del grupo.

No es una página comercial ni empresarial.

---

# Forma de trabajo

El proyecto se desarrolla **paso a paso**, con enfoque en aprender y comprender el código.

Metodología:

* Explicar cada concepto antes de utilizarlo.
* Hacer modificaciones pequeñas.
* Probar cada cambio antes de continuar.
* Explicar las líneas importantes.
* Evitar entregar grandes bloques de código sin explicación.
* Cuando aparezcan errores, analizarlos y entender por qué ocurrieron.
* Usar la consola del navegador para comprobar JavaScript.

Objetivo principal: **aprender desarrollo web mientras se construye una página real**.

---

# Tecnologías

* HTML → `index.html`
* CSS → `style.css`
* JavaScript → `script.js`

JavaScript se está aprendiendo desde cero.

---

# Estructura del proyecto

```text
ProyectoMotivadosBikers
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── img
    │
    ├── logo.png
    │
    ├── administradores
    │   ├── elias.jpg
    │   ├── gerardo.jpg
    │   ├── rodrigo.jpg
    │   └── jaime.jpg
    │
    └── rutas
        ├── ruta01.jpg
        ├── ruta02.jpg
        ├── ...
        └── ruta17.jpg
```

---

# Estado de la página

## Portada

✅ Terminada.

## Nuestra Historia

✅ Terminada.

## Administradores

✅ Terminada.

Incluye:

* Rodrigo
* Jaime
* Elias
* Gerardo

## Rutas y Eventos

✅ Galería terminada.

Incluye 17 fotografías:

```text
ruta01.jpg → ruta17.jpg
```

## Responsive

✅ Primera adaptación para celulares realizada.

---

# JavaScript aprendido

Conceptos trabajados:

* `const`
* `document`
* `querySelector()`
* `querySelectorAll()`
* `forEach()`
* `function`
* `addEventListener()`
* evento `click`
* `console.log()`
* `document.createElement()`
* `appendChild()`
* `classList.add()`
* `this`
* `this.src`
* `remove()`
* `setTimeout()`

También se aprendió a utilizar la consola del navegador para comprobar el funcionamiento de JavaScript.

---

# Lightbox 🖼️

Actualmente se está construyendo un Lightbox para las 17 fotografías.

## Funciones ya realizadas

✅ Detectar las imágenes de la galería.

✅ Detectar cuál imagen recibió el clic.

✅ Obtener su dirección mediante:

```javascript
this.src
```

✅ Crear dinámicamente el Lightbox:

```javascript
document.createElement("div")
```

✅ Crear dinámicamente una imagen grande.

✅ Mostrar la fotografía seleccionada.

✅ Mantener las proporciones de las fotografías mediante:

```css
object-fit: contain;
```

✅ Centrar la imagen con Flexbox.

✅ Crear botón `X` mediante JavaScript.

✅ Cerrar el Lightbox mediante:

```javascript
lightbox.remove();
```

✅ Crear transición de aparición utilizando:

```css
opacity
transition
```

y JavaScript con:

```javascript
setTimeout()
```

---

# Estructura actual del Lightbox

JavaScript genera aproximadamente:

```text
lightbox
├── botonCerrar
└── imagenGrande
```

El Lightbox utiliza:

```css
position: fixed;
inset: 0;
display: flex;
justify-content: center;
align-items: center;
```

La imagen utiliza:

```css
width: 90%;
height: 90%;
object-fit: contain;
```

El botón cerrar utiliza la clase:

```text
.cerrar
```

El Lightbox utiliza las clases:

```text
.lightbox
.visible
```

La transición actual utiliza:

```css
opacity: 0;
transition: opacity 0.3s;
```

y:

```css
.lightbox.visible {
    opacity: 1;
}
```

---

# Próximo objetivo

El próximo paso es agregar **navegación entre las 17 fotografías**.

Objetivo:

```text
          X
          
    ❮    FOTO    ❯
          
```

Funciones a desarrollar progresivamente:

1. Botón fotografía anterior.
2. Botón fotografía siguiente.
3. Saber cuál imagen está actualmente abierta.
4. Cambiar `src` de `imagenGrande`.
5. Evitar salir de los límites de las 17 imágenes.
6. Posteriormente agregar transición entre fotografías.
7. Navegación mediante teclado:

   * `Esc` → cerrar
   * `←` → anterior
   * `→` → siguiente
8. Revisar y mejorar adaptación para celulares.

---

# Punto exacto donde continuar

**El Lightbox de apertura, visualización y cierre ya funciona.**

La última función agregada fue la transición de aparición mediante:

```javascript
setTimeout(function() {

    lightbox.classList.add("visible");

}, 10);
```

La transición se comprobó y funciona.

## Próximo paso exacto

**Comenzar a implementar los botones anterior y siguiente**, avanzando como clase práctica:

**Explicar → escribir una pequeña parte → probar → entender → continuar.**

No entregar todo el sistema de navegación de una sola vez.
