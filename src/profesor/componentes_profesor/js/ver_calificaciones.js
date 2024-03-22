function verCalificaciones(inscrito) {
    let backend = 'http://127.0.0.1:3030';

    $('#content').load('./componentes_profesor/html/ver_calificaciones.html');

    $.ajax({
        url: backend + '/inscrito/getInscritoInfoList/' + inscrito,
        method: 'GET',
        dataType: "json",
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (res) {
            console.log(res)
            MostrarCalificaciones(res);
        }
    })
}

function MostrarCalificaciones(lista) {
    let mostrarInfo = document.getElementById('calificaciones-alumno');
    let calFinal = 0;
    mostrarInfo.innerHTML = '';
    if (mostrarInfo) {
        mostrarInfo.innerHTML +=
            `
            <div id="indiceMateria">
                <legend id="nombre">Materia</legend>
                <span id="puntaje">Calificacion</span>
            </div>
        `
        for (let calificacion of lista) {
            calFinal += parseFloat(calificacion.calificacion);
            mostrarInfo.innerHTML +=
                `
            <div id="indiceMateria">
                <legend id="nombre">${calificacion.materia.nombre}</legend>
                <span id="puntaje">${calificacion.calificacion}</span>
            </div>
            `
        }
        calFinal /= lista.length;
        var FinalPromedio = Math.round(calFinal);
    }

    //mostrar los datos del alumno
    let nombre = document.getElementById('nombre');
    let grado = document.getElementById('grado');
    let grupo = document.getElementById('grupo');
    let evaluacion = document.getElementById('evaluacion');
    let promedio = document.getElementById('cal-final');

    nombre.innerHTML = lista[0].inscrito.alumno.nombre;
    nombre.innerHTML += ' ' + lista[0].inscrito.alumno.apellidoPaterno + ' ' + lista[0].inscrito.alumno.apellidoMaterno;
    grado.innerHTML = "<b>Grado: </b>" + lista[0].inscrito.grupo.grado.nombre;
    grupo.innerHTML = "<b>Grupo: </b>" + lista[0].inscrito.grupo.nombre;
    evaluacion.innerHTML = "<b>" + lista[0].evaluacion.nombre + " Evaluacion</b>";
    promedio.innerHTML = "<b>Promedio: </b>" + FinalPromedio;

}