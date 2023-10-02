import { clientServices } from "../services/client-service.js";

const crearProducto = (nombre, imagen, precio, id) =>{
    const div = document.createElement("div")
    div.classList.add("product-box")

    const contenido =  `
        <img src="${imagen}" alt="">
        <h3>${nombre}</h3>
        <h4>R$ ${precio}</h4>
        <p>#11111111</p>
        <i class="fa-solid fa-trash" id="${id}" style="color: #ffffff;"></i>
        <i class="fa-solid fa-pencil"  id="${id}" style="color: #ffffff;"></i>
    `
    div.innerHTML = contenido;

    const btnEliminar = div.querySelector(".fa-trash")
    btnEliminar.addEventListener("click", ()=>{
        const id = btnEliminar.id
        clientServices.eliminarProducto(id).then((respuesta) => console.log(respuesta)).catch(error => console.log(error))
    })

    const btnEditar = div.querySelector(".fa-pencil")
    btnEditar.addEventListener("click", ()=>{
        window.location.href = `../screens/updateProduct.html?id=${id}`
    })

    return div
};

const productoss = document.querySelector("[data-productos]")


clientServices.listaProductos().then((data)=>{
    data.forEach(({nombreProducto, imagen, precio, id}) => {
        const nuevoProducto = crearProducto(nombreProducto, imagen, precio, id)
        productoss.append(nuevoProducto)
    })
})
