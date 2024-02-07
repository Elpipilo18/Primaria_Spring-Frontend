//validar longitud del usuario
const user = document.getElementById('nickname');
if (user) {
    user.addEventListener('change', () => {
        //validar longitud
        if (user.value.length > 8) {
            alert("Usuario muy largo")
        }
    });
}

//validar contraseña
const clave = document.getElementById('clave');
if (clave) {
    clave.addEventListener('change', () => {

        const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const mayusculas = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
            'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ];
        let cadena = clave.value;
        let checkNumbers = false;
        let checkCapitals = false;

        for (var i = 0; i < cadena.length; i++) {
            for (var j = 0; j < numeros.length; j++) {
                for (var k = 0; k < mayusculas.length; k++) {
                    if (cadena[i] === numeros[j]) {
                        checkNumbers = true;
                    }
                    if (cadena[i] === mayusculas[k]) {
                        checkCapitals = true;
                    }
                }
            }
        }
        if (!checkNumbers) alert("La contraseña debe incluir numeros");
        if (!checkCapitals) alert("La contraseña debe incluir mayusculas");

        if (checkCapitals && checkNumbers) {
            const boton = document.getElementById('btn-registrar');
            boton.addEventListener('click', () => {
                registro();
            })

        }
    });
}

//peticion para registrar usuario
function registro() {
    var backend = 'http://127.0.0.1:3030/auth';

    var name = document.getElementById('nombre').value;
    var apP = document.getElementById('apellidoP').value;
    var apM = document.getElementById('apellidoM').value;
    var email = document.getElementById('correo').value;
    var key = document.getElementById('clave').value;
    var user = document.getElementById('nick').value;

    var datos = {
        nombre: name,
        nick: user,
        apellidoP: apP,
        apellidoM: apM,
        correo: email,
        clave: key
    };

    var nuevoUsuario = JSON.stringify(datos);

    console.log(nuevoUsuario)

    $.ajax({
        url: backend + '/registro',
        type: 'POST',
        dataType: 'json',
        data: nuevoUsuario,
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (serverResponse) {
            console.log("mensaje: " + serverResponse)
        }
    });

}

function login() {
    var backend = 'http://127.0.0.1:3030/auth';

    var user = document.getElementById('user-login').value;
    var key = document.getElementById('clave-login').value;

    var datos = {
        username: user,
        password: key
    };

    $.ajax({
        url: backend + '/login',
        method: 'POST', 
        data: JSON.stringify(datos),
        contentType: 'application/json',
        success: function (credenciales) {
            console.log(credenciales);
            if(credenciales.ruta === "admin.html"){
                location.href = "../director/dashboard.html";
            }
            else if(credenciales.ruta === "alumno.html"){
                location.href = "../directors/directors.html";
            }
        }
    });

}

function Estado(){
    var backend = 'http://127.0.0.1:3030/auth';

    $.ajax({
        url: backend + '/estado',
        method: 'POST', 
        contentType: 'application/json',
        success: function (estado) {
            console.log("Estado Sesion: " + estado);
        }
    });
}

$(function(){
    Estado();
})


