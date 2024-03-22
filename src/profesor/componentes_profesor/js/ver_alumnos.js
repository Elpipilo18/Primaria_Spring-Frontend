document.getElementById("ver-alumnos").addEventListener("click", () => {
    let backend = 'http://127.0.0.1:3030';

    $('#content').load('./componentes_profesor/html/ver_alumnos.html');

    $.ajax({
        url: backend + '/inscrito/verMisAlumnos',
        method: 'GET',
        dataType: "json",
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (res) {
            console.log(res)
            let grupo = res[0].grupo.nombre;
            console.log(grupo);
            MostrarAlumnos(res, grupo);
        }
    })
})

function MostrarAlumnos(lista, nombre_grupo) {
    let cajatitulo = document.getElementById('nombreGrupo');
    if (cajatitulo) {
        let titulo = document.createElement('h3');
        titulo.innerHTML = "Grupo : "+nombre_grupo;
        cajatitulo.appendChild(titulo);
    }
    let tablaBody = document.getElementById('tabla-alumnos');
    tablaBody.innerHTML = '';
    for (let inscrito of lista) {
        tablaBody.innerHTML +=
            `
        <tr id='fila'>
            <td>${inscrito.alumno.nombre}</td>
            <td>${inscrito.alumno.apellidoPaterno}</td>
            <td>${inscrito.alumno.apellidoMaterno}</td>
            <td>${inscrito.alumno.curp}</td>
            <td>${inscrito.alumno.telefono}</td>
            <td>${inscrito.alumno.estadoCadena}</td>
            <td>${(inscrito.alumno.estado != 1) ? `Evaluado` : `<button onclick="getInfoAlumno(${inscrito.id})">Evaluar</button>`}</td>
            <td>${(inscrito.alumno.estado != 1) ? `<button onclick="verCalificaciones(${inscrito.id})">Ver calificaciones</button>` : ``}</td>
        </tr>
        `

    }
}
