import { clientServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");


const obtenerInformacion = async ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const categoria = document.querySelector("[data-categoria]")
    const nombreProducto = document.querySelector("[data-nombre-producto]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    const productos = await clientServices.detalleProducto(id)
        categoria.value = productos.categoria
        nombreProducto.value = productos.nombreProducto
        precio.value = productos.precio
        descripcion.value = productos.descripcion
        sessionStorage.setItem("urlImagen", productos.imagen)
}
obtenerInformacion()

formulario.addEventListener("submit", (e) =>{
    e.preventDefault()
    const categoria = document.querySelector(".categoria").value
    const nombreProducto = document.querySelector(".nombre-producto").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    const url = new URL(window.location)
    const id = url.searchParams.get("id")

    const imagen = sessionStorage.getItem("urlImagen")

    clientServices.actualizarProducto(categoria, imagen, nombreProducto, precio, descripcion, id).then((respuesta) =>{
        window.location.href = "../screens/products.html"
    })
})