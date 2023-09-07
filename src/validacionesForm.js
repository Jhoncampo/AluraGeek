export function valida(input){
    
    const tipoInput = input.dataset.tipo;

    console.log(input.parentElement)
    if(input.validity.valid === true){
        input.parentElement.classList.remove("input-vacio");
        input.parentElement.querySelector(".mensaje-error").innerHTML = ""
        
    }else{
        input.parentElement.classList.add("input-vacio")
        input.parentElement.querySelector(".mensaje-error").innerHTML = mostrarMensajeError(tipoInput, input)

    }

}

const mensajesError = {
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password:{
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "hola"
    },
    nombre:{
        valueMissing: "Este campo no puede estar vaciooooo",
    },
    mensaje:{
        valueMissing: "Este campo no puede estar vaciooooo",
    }
}

const tiposErrores = [
    "valueMissing",
    "typeMismatch"
]
function mostrarMensajeError(tipoInput, input){
    
    let mensaje = ""
    tiposErrores.forEach((error) => {
        console.log("-------",error)
        if (input.validity[error]){
        mensaje = mensajesError[tipoInput][error]
        }
    })
    return mensaje

}