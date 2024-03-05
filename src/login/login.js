//validar longitud del usuario
const user = document.getElementById('nick');
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
        if (!checkNumbers) document.getElementById("error-num").innerHTML = "La contraseña debe incluir numeros";
        if (!checkCapitals) document.getElementById("error-cap").innerHTML = "La contraseña debe incluir mayusculas";

        if (checkCapitals && checkNumbers) {
            document.getElementById("error-num").innerHTML = " ";
            document.getElementById("error-cap").innerHTML = " ";
            const boton = document.getElementById('btn-registrar');
            boton.addEventListener('click', () => {
                registro();
            })

        }
    });
}

//peticion para registrar usuario
function registro() {
    let backend = 'http://127.0.0.1:3030/usuario';

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
    $.ajax({
        url: backend + '/registro',
        method: 'POST',
        dataType: 'json',
        data: nuevoUsuario,
        contentType: 'application/json',

        success: function (serverResponse) {
            console.log("mensaje: " + serverResponse)
            const form = document.getElementById('sign-form');
            const form2 = document.getElementById('login-form');
            if (form.style.top === '0px' && form.style.opacity === '1') {
                form.style.top = '-690px';
                form.style.opacity = '0';
                form2.style.top = '40px';
                form2.style.left = '-250px';
            }
            form.style.transitionDuration = '.5s';
            form2.style.transitionDuration = '.5s';
        }
    });
}

document.getElementById('show-sign-form').addEventListener('click', () => {
    const form = document.getElementById('sign-form');
    const form2 = document.getElementById('login-form');
    if (form.style.top !== '0px' && form2.style.opacity !== '1') {
        form.style.top = '0px';
        form.style.opacity = '1';
        form2.style.top = '0px';
        form2.style.left = '0px';
    } else {
        form.style.top = '-690px';
        form.style.opacity = '0';
        form2.style.top = '40px';
        form2.style.left = '-250px';
    }
    form.style.transitionDuration = '.5s';
    form2.style.transitionDuration = '.5s';
});

document.getElementById("btn-login").addEventListener('click', () => {
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
        xhrFields: { withCredentials: true },
        success: function (credenciales) {
            console.log(credenciales);
            location.href = credenciales.ruta;
        }
    });


});

function Estado() {
    var backend = 'http://127.0.0.1:3030/auth';

    $.ajax({
        url: backend + '/estado',
        method: 'POST',
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (estado) {
            console.log("Estado Sesion: ");
            if (estado.accesoCorrecto) {
                console.log("Sesion iniciada")
                location.href = estado.ruta;
            } else {
                console.log("Sin sesion")
            }
        }
    });
}


$(function () {
    Estado();
})


