const btnContacto = document.querySelector("[form-btn-contacto]")
const nombre = document.querySelector(".nombre-contacto")
const mensaje = document.querySelector(".mensaje-contacto")

btnContacto.addEventListener("click", (e)=>{
    e.preventDefault()
    nombre.value = ""
    mensaje.value = ""
})