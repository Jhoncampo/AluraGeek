const listaProductos = () =>{
    return fetch(" http://localhost:3000/productos").then((repuesta) => repuesta.json())
}

const agregarProducto = (imagen, categoria, nombreProducto, precio, descripcion)=>{
    return fetch("http://localhost:3000/productos",{
        method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            imagen,
            categoria,
            nombreProducto,
            precio,
            descripcion,
            id: uuid.v4()
        })
    })
}

const eliminarProducto = (id) =>{
    return fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE"
    })
}

const detalleProducto = (id)=>{
    return fetch(`http://localhost:3000/productos/${id}`).then( respuesta => respuesta.json())
}

const actualizarProducto = (categoria, imagen, nombreProducto, precio, descripcion, id) =>{
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({categoria, imagen, nombreProducto, precio, descripcion})
    }).then( respuesta => respuesta).catch( error => console.log(error))
}

const categoriaProducto = (cate)=>{
    return fetch(`http://localhost:3000/productos?categoria=${cate}`).then( respuesta => respuesta.json())
}

export  const clientServices = {
    listaProductos,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    categoriaProducto
}


