const iconoBuscar = document.querySelector(".icono-buscar")
const inputBuscar = document.querySelector(".input-buscar")
const inputBuscarMobile = document.querySelector(".input-search-mobile")

iconoBuscar.addEventListener("click", ()=>{
    const textBuscar = inputBuscar.value.toLowerCase() 
    window.location.href =`../screens/buscador.html?buscar=${textBuscar}`
    inputBuscar.value = ""
})

inputBuscar.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        const textBuscar = inputBuscar.value.toLowerCase() 
        window.location.href =`../screens/buscador.html?buscar=${textBuscar}`
        inputBuscar.value = ""
    }
})
inputBuscarMobile.addEventListener("keypress", (e)=>{
    if (e.key === "Enter") {
        const textBuscar = inputBuscarMobile.value.toLowerCase() 
        window.location.href =`../screens/buscador.html?buscar=${textBuscar}`
        inputBuscar.value = ""
    }
})
