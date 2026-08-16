const galeria = document.querySelector(".contenedor-galeria");
console.log(galeria);

const imagenes = galeria.querySelectorAll("img");
console.log(imagenes);

imagenes.forEach(function(imagen, indice) {

imagen.addEventListener("click", function() {

    const rutaImagen = this.src;

    let indiceActual = indice;

const lightbox = document.createElement("div");

const imagenGrande = document.createElement("img");

const botonCerrar = document.createElement("button");
        
const botonAnterior = document.createElement("button");
        
const botonSiguiente = document.createElement("button");

botonAnterior.textContent = "<";

botonSiguiente.textContent = ">";

botonCerrar.textContent = "X";

botonAnterior.classList.add("anterior");

botonSiguiente.classList.add("siguiente");

botonCerrar.classList.add("cerrar");

botonCerrar.addEventListener("click", function() {

    lightbox.remove();

});

botonSiguiente.addEventListener("click", function() {

if (indiceActual === imagenes.length - 1) {

      indiceActual = 0;

 } else {

    indiceActual = indiceActual + 1;

}

 imagenGrande.src = imagenes[indiceActual].src;

});

botonAnterior.addEventListener("click", function() {

if (indiceActual === 0) {

  indiceActual = imagenes.length - 1;

} else {

    indiceActual = indiceActual - 1;

}

imagenGrande.src = imagenes[indiceActual].src;

});
    

imagenGrande.src = rutaImagen;

lightbox.classList.add("lightbox");

setTimeout(function() {

lightbox.classList.add("visible");

}, 10);

lightbox.appendChild(botonAnterior);

lightbox.appendChild(botonSiguiente);

lightbox.appendChild(botonCerrar);

lightbox.appendChild(imagenGrande);

document.body.appendChild(lightbox);

});

});