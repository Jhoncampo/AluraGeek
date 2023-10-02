
import { clientServices } from "../services/client-service.js";


const categoria = document.querySelector("#categoria")
let valorCategoria = ""
categoria.addEventListener("change", ()=>{
    valorCategoria = categoria.value
})
    
const formulario = document.querySelector("[data-form]");
formulario.addEventListener('submit', async (evento)=>{
    evento.preventDefault()
    const imagen = document.querySelector("[data-imagen]").files[0];
    const nombreProducto = document.querySelector("[data-nombre-producto]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;    

    const imgbbApiKey = '4bd16211b513e0e17bec8c430c04d9c6'
    const formData = new FormData
    formData.append("image", imagen)

    const response = await fetch('https://api.imgbb.com/1/upload?key=' + imgbbApiKey, {
        method: 'POST',
        body: formData,
    });

    const imgData = await response.json()
    console.log("--- ", imgData)
    if (imgData.data && imgData.data.url) {
        const imgUrl = imgData.data.url

        if ((valorCategoria ==="Star war") || (valorCategoria ==="Consolas") || (valorCategoria === "Diversos") ) {
            clientServices.agregarProducto(imgUrl, valorCategoria, nombreProducto, precio, descripcion).then(() =>{
                window.location.href = "../screens/products.html"
            })
        }else{
           alert("Error al ingresar la categoria, las categorias son: Star war, Consolas, Diversos.")
        }
        
    }

})