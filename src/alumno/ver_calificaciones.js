let backend = 'http://127.0.0.1:3030';

function getGrades() {
    $.ajax({
        url: backend + "/calificacion/misCalificaciones",
        method: 'GET',
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (data) {
            mostrarMisCalificaciones(data);
        }
    })
}

function mostrarMisCalificaciones(lista) {
    let tabla = document.getElementById("calContainer");
    tabla.innerHTML = "";

    for (let calificacion of lista) {
        let colorFondo;
        if (calificacion.calificacion < 5) {
            colorFondo = "red";
        } else if (calificacion.calificacion >= 5 && calificacion.calificacion < 8) {
            colorFondo = "yellow";
        } else {
            colorFondo = "green";
        }

        tabla.innerHTML += `
        <div class="card" style="background-color: ${colorFondo};">
            <span>Materia: ${calificacion.materia.nombre}</span>
            <span><b>Puntaje Obtenido:</b> ${calificacion.calificacion}</span>
        </div>
        `;
    }

    let eva = document.getElementById("Info");
    eva.innerHTML += `
        <span><b>${lista[0].evaluacion.nombre} Evaluación</b></span>
        <span><b>Grupo: </b> ${lista[0].inscrito.grupo.nombre}</span>
        <span><b>Estado: </b> ${(lista[0].inscrito.alumno.estado == 2) ? `Aprobado` : `Reprobado`}</span>
        <span><b>Profesor Encargado: </b>${lista[0].inscrito.grupo.profesor.nombre} ${lista[0].inscrito.grupo.profesor.apellidoPaterno} ${lista[0].inscrito.grupo.profesor.apellidoMaterno}</span>
    `;
}


$(function () {
    Estado();
})

function Estado() {
    $.ajax({
        url: backend + '/auth/estado',
        method: 'POST',
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (estado) {
            if (estado.accesoCorrecto) {
                let nick = document.getElementById("Info");
                nick.innerHTML += `
                    <span><b>Alumno: </b>${estado.usuario.nombre + " "
                    + estado.usuario.apellidoP + " "
                    + estado.usuario.apellidoM}</span>
                `;
                getGrades();
            } else {
                location.href = "../login/login.html";
            }
        }
    });
}

function Logout() {

    $.ajax({
        url: backend + '/auth/logout',
        method: 'POST',
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function () {
            location.reload();
        }
    });
}
