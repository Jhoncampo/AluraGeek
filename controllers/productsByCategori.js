import { clientServices } from "../services/client-service.js";

const productoCategoria = ( imagen, nombreProducto, precio, id) =>{

    const producto = document.createElement("div")
    producto.classList.add("producto")
    const detalle = `
        <img src="${imagen}" alt="">
        <h3>${nombreProducto}</h3>
        <h4>$ ${precio}</h4>
        <a href="">Ver todo</a>
    `
    producto.innerHTML = detalle
    return producto

}
const cajaProductos = document.querySelector(".caja-productos")
const byCategori = document.querySelector(".by-categori")

const url = new URL(window.location)
const categoria = url.searchParams.get("categoria")



clientServices.categoriaProducto(categoria).then((datos) =>{
    if (categoria === "Star war") {
        byCategori.innerHTML = categoria

        datos.forEach(({imagen, nombreProducto, precio, id}) => {
            const productoCompleto = productoCategoria(imagen, nombreProducto, precio, id)
            cajaProductos.append(productoCompleto)
        });
    }else if(categoria === "Consolas"){
        byCategori.innerHTML = categoria

        datos.forEach(({imagen, nombreProducto, precio, id, categoria}) => {
            const productoCompleto = productoCategoria(imagen, nombreProducto, precio, id)
            cajaProductos.append(productoCompleto)
        });
    }else if(categoria === "Diversos"){
        byCategori.innerHTML = categoria

        datos.forEach(({imagen, nombreProducto, precio, id, categoria}) => {
            const productoCompleto = productoCategoria(imagen, nombreProducto, precio, id)
            cajaProductos.append(productoCompleto)
        });
    }
})