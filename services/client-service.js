const crearProducto = (nombre, imagen, precio,) =>{
    const div = document.createElement("div")
    div.classList.add("product-box")

    const contenido =  `<div class="product-box">
        <img src="${imagen}" alt="">
        <h3>${nombre}</h3>
        <h4>R$ ${precio}</h4>
        <p>#11111111</p>
        <i class="fa-solid fa-trash" style="color: #ffffff;"></i>
        <i class="fa-solid fa-pencil" style="color: #ffffff;"></i>
    </div>`
    div.innerHTML = contenido;
    return div
};

const productoss = document.querySelector("[data-productos]")


const listaProductos = () =>{
    return fetch("http://localhost:3000/productos").then(respuesta=> respuesta.json())
}
listaProductos().then((data) =>{
    data.forEach( (productos) => {
        const nuevoProducto = crearProducto(productos.nombre, productos.imagen, productos.precio)
        productoss.appendChild(nuevoProducto)
    });
    
}).catch((error)=>{
    alert("Ocurrio un error")
}) 

