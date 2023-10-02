import { clientServices } from "../services/client-service.js";

const detalleProducto = (imagen, nombreProducto, precio, descripcion)=>{
    const producto = document.createElement("div");
    producto.classList.add("info")
    const detalle = `
        <img src="${imagen}" alt="">
        <div class="detalle">
            <h2>${nombreProducto}</h2>
            <h3>$ ${precio}</h3>
            <p>${descripcion}</p>
        </div>
    `
    producto.innerHTML = detalle
    return producto
}
const productoSimilar = (imagen, nombreProducto, precio, categoria, id) =>{
    const cajaProducto = document.createElement("div")
    cajaProducto.classList.add("producto")

    const producto = `
        <img src="${imagen}" alt="">
        <h3>${nombreProducto}</h3>
        <h4>$ ${precio}</h4>
        <a href="../screens/productDetails.html?id=${id}&categoria=${categoria}">Ver producto</a>
    `
    cajaProducto.innerHTML = producto
    return cajaProducto
}

const seccionDetalle = document.querySelector(".descripcion-producto")
const productoSimilares = document.querySelector(".caja-productos-similares")

const url = new URL(window.location)
const id = url.searchParams.get("id")
const cate = url.searchParams.get("categoria")


clientServices.detalleProducto(id).then((repuesta)=>{
    const nuevoDetalle = detalleProducto(repuesta.imagen, repuesta.nombreProducto, repuesta.precio, repuesta.descripcion)
    seccionDetalle.appendChild(nuevoDetalle)
})

clientServices.categoriaProducto(cate).then((repuesta) =>{
    repuesta.forEach(({imagen, nombreProducto, precio, categoria,id}) => {
        const nuevo = productoSimilar(imagen, nombreProducto, precio, categoria, id)
        productoSimilares.append(nuevo)
    });
})
