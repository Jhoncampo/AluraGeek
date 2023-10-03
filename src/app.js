import { valida } from "./validacionesForm.js";

const inputs = document.querySelectorAll(".input-select");
inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        valida(input.target)
    })
})

const buscar = document.querySelector(".icono-lupa")
const inputBuscar = document.querySelector(".search-cambio")

buscar.addEventListener("click", ()=>{
    inputBuscar.classList.toggle("search-cambio")
})
