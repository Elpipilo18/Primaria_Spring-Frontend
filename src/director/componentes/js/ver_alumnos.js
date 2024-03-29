$(function () {
    VerAlumnos()
})

function VerAlumnos() {
    $.ajax({
        url: backend + '/alumnos/ListarAlumnos',
        method: 'GET',
        dataType: "json",
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (res) {
            console.log(res)
            MostrarAlumnos(res);
        }
    })
}

function MostrarAlumnos(lista) {
    let tablaBody = document.getElementById('lista-alumnos');
    tablaBody.innerHTML = '';
    for (let alumno of lista) {
        tablaBody.innerHTML +=
            `
        <tr id='fila'>
            <td>${alumno.nombre}</td>
            <td>${alumno.apellidoPaterno}</td>
            <td>${alumno.apellidoMaterno}</td>
            <td>${alumno.telefono}</td>
            <td>${alumno.curp}</td>
            <td><i class="bi bi-pencil-square"></i></td>
            <td><i class="bi bi-trash"></i></td>
        </tr>
        `

    }
}
