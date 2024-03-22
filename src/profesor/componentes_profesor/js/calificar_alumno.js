
function EvaluarAlumno(id_inscrito) {

    let listaMaterias = document.querySelectorAll('#id_materia');
    let listaCalificaciones = document.querySelectorAll('#calificacion');
    const json = [];

    for (let i = 0; i < listaMaterias.length; i++) {
        let indice = {
            calificacion: listaCalificaciones[i].value,
            materia: {
                id: listaMaterias[i].value
            },
            inscrito: {
                id: id_inscrito
            },
            evaluacion: {
                id: 0,
            }
        }
        json.push(indice);
    }
    console.log(json);

    $.ajax({
        url: backend + "/calificacion/CalificarAlumno",
        method: 'POST',
        data: JSON.stringify(json),
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (res) {
            console.log(res);
            alert('Alumno Evaluado')
        }
    })
}

function getInfoAlumno(id_inscrito) {

    $('#content').load('./componentes_profesor/html/calificar_alumno.html');

    $.ajax({
        url: backend + "/inscrito/getInscritoInfo/" + id_inscrito,
        method: 'GET',
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (res) {
            console.log(res);
            mostrarInscritoInfo(res);
            getMaterias(res.grupo.grado);

        }
    })
}

function mostrarInscritoInfo(inscrito) {
    $('#id_inscrito').val(inscrito.id);
    $('#nombre').val(inscrito.alumno.nombre);
    $('#apellidos').val(inscrito.alumno.apellidoPaterno + ' ' + inscrito.alumno.apellidoMaterno);
}

function getMaterias(grado) {
    console.log(grado);
    $.ajax({
        url: backend + "/materia/mostrarMaterias/" + grado.id,
        method: 'GET',
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (res) {
            console.log(res);
            mostrarMaterias(res);
        }
    });
}

function mostrarMaterias(materias) {
    let formMaterias = document.getElementById('formCals');
    formMaterias.innerHTML = '';
    for (let i = 0; i < materias.length; i++) {
        formMaterias.innerHTML += `
        <label>${materias[i].nombre}</label>
        <input value="${materias[i].id}" id="id_materia" hidden>
        <input type="number" id="calificacion" placeholder="puntaje obtenido">`;
    }
    formMaterias.innerHTML += `<button type="submit" onclick="EvaluarAlumno(${$('#id_inscrito').val()})">Calificar</button>`
}



