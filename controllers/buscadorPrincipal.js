import { clientServices } from "../services/client-service.js"

const resultado = (categoria, imagen, nombre, precio, id) =>{
    const producto = document.createElement("div")
    producto.classList.add("product-box")
    const detalle = `
            
                <img src="${imagen}" alt="">
                <h3>${nombre}</h3>
                <h4>R$ ${precio}</h4>
                <a href="../screens/productDetails.html?id=${id}&categoria=${categoria}"> Ver producto</a>
            `
    producto.innerHTML = detalle
    return producto;
}

const contenedorResultados = document.querySelector(".caja")
const tituloResultado = document.querySelector(".titulo-resultado")
const url = new URL(window.location)
const buscar = url.searchParams.get("buscar")
console.log(buscar)

clientServices.listaProductos().then((datos)=>{
    let contador = 0
    datos.forEach(({categoria, imagen, nombreProducto, precio, id}) => {
        const categoriaAPI = nombreProducto.toLowerCase()
        const verificar = categoriaAPI.includes(buscar)

        if (verificar) {
            const newProduct = resultado(categoria, imagen, nombreProducto, precio, id)
            contenedorResultados.appendChild(newProduct)
            contador++
        }    
    });
    if (contador === 0) {
        tituloResultado.innerHTML = "No se encontradon resultados"
    }
})

