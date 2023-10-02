const listaProductos = () =>{
    return fetch("https://my-json-server.typicode.com/Jhoncampo/AluraGeek/productos").then((repuesta) => repuesta.json())
}

const agregarProducto = (imagen, categoria, nombreProducto, precio, descripcion)=>{
    return fetch("https://my-json-server.typicode.com/Jhoncampo/AluraGeek/productos",{
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
    return fetch(`https://my-json-server.typicode.com/Jhoncampo/AluraGeek/productos/${id}`,{
        method: "DELETE"
    })
}

const detalleProducto = (id)=>{
    return fetch(`https://my-json-server.typicode.com/Jhoncampo/AluraGeek/productos/${id}`).then( respuesta => respuesta.json())
}

const actualizarProducto = (categoria, imagen, nombreProducto, precio, descripcion, id) =>{
    return fetch(`https://my-json-server.typicode.com/Jhoncampo/AluraGeek/productos/${id}`, {
        method: "PUT",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({categoria, imagen, nombreProducto, precio, descripcion})
    }).then( respuesta => respuesta).catch( error => console.log(error))
}

const categoriaProducto = (cate)=>{
    return fetch(`https://my-json-server.typicode.com/Jhoncampo/AluraGeek/productos?categoria=${cate}`).then( respuesta => respuesta.json())
}

export  const clientServices = {
    listaProductos,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    categoriaProducto
}


