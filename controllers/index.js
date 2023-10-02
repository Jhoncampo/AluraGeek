import { clientServices } from "../services/client-service.js";

const mostraProductos = (categoria, imagen, nombre, precio, id) =>{
    const categorias = document.createElement("div")
    categorias.classList.add("product-box")
    const producto = `
            
                <img src="${imagen}" alt="">
                <h3>${nombre}</h3>
                <h4>$ ${precio}</h4>
                <a href="./screens/productDetails.html?id=${id}&categoria=${categoria}"> Ver producto</a>
            `
    categorias.innerHTML = producto
    return categorias;
}

const categoriaStarWars = document.querySelector(".categoria-starWar")
const categoriaConsolas = document.querySelector(".categoria-consolas")
const categoriaDiversos = document.querySelector(".categoria-diversos")

clientServices.listaProductos().then((datos)=>{
    datos.forEach(({categoria, imagen, nombreProducto, precio, id}) => {
        if (categoria === "Star war") {
            const newProduct = mostraProductos(categoria, imagen, nombreProducto, precio, id)
            categoriaStarWars.appendChild(newProduct)
        }else if(categoria === "Consolas"){
            const newProduct = mostraProductos(categoria, imagen, nombreProducto, precio, id)
            categoriaConsolas.appendChild(newProduct)
        }else if (categoria === "Diversos"){
            const newProduct = mostraProductos(categoria, imagen, nombreProducto, precio, id)
            categoriaDiversos.appendChild(newProduct)
        }
    });
})
