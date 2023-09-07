import { valida } from "./validacionesForm.js";

const inputs = document.querySelectorAll(".input-select");
inputs.forEach( input => {
    input.addEventListener('blur', (input) => {
        valida(input.target)
    })
})