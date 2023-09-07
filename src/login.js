const btnLogin = document.querySelector(".input-boton");
btnLogin.addEventListener('click', (event) =>{
    event.preventDefault();
    login();
})

const login = () => {
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;

    const emailIngreso = "eduardcamayo13@gmail.com";
    const paswordIngreso = "123456";

    if ( email === emailIngreso && password === paswordIngreso){
        window.location.href = "../screens/products.html";
    }else{
        alert("Correo o contraseña incorrectos");
    }
}
