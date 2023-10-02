


const btnLogin = document.querySelector(".input-boton");
btnLogin.addEventListener('click', (event) =>{
    event.preventDefault();
    login();
})

const login = async () => {
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const validarIngreso = document.querySelector(".error-ingresar")

    let dato = await fetch("https://my-json-server.typicode.com/Jhoncampo/AluraGeek/users")
    let dat = await dato.json()

    const emailIngreso = dat[0].user;
    const paswordIngreso = dat[0].password;

    if ( email === emailIngreso && password === paswordIngreso){
        window.location.href = "../screens/products.html";
    }else{
        validarIngreso.innerHTML = "contraseña o correo incorrectos"
    }
}
