function CrearGrupo() {
    let nombre = document.getElementById("nombre-grupo").value;
    let profesor = document.getElementById("comboProfesor").value;
    let grado = document.getElementById("comboGrado").value;
    let ciclo = document.getElementById("comboCiclo").value;

    let json = {
        nombre: nombre,
        profesor: {
            id: profesor
        },
        grado: {
            id: grado
        },
        ciclo: {
            id: ciclo
        }
    }

    $.ajax({
        url: backend + '/grupos/CrearGrupo',
        method: 'POST',
        data: JSON.stringify(json),
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (res) {
            console.log(res);
            alert(res);
        }
    })
}


$(function () {
    ListarCiclos();
    ListarProfesores();
    ListarGrados();

    $('#btnCrearGrupo').on('click', function (event) {
        event.preventDefault();
        CrearGrupo();
    });
})


function ListarCiclos() {
    $.ajax({
        url: backend + '/cicloEscolar/ListarCiclos',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (data) {
            console.log(data);
            MostrarCiclos(data);
        }
    });
}

function MostrarCiclos(lista) {
    $.each(lista, function (i, element) {
        $('#comboCiclo').append($('<option>', {
            value: element.id,
            text: element.inicio + " - " + element.fin
        }));
    });
}

function ListarProfesores() {
    $.ajax({
        url: backend + '/profesor/ListarProfesores',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (data) {
            console.log(data);
            MostrarProfesores(data);
        }
    });
}
function MostrarProfesores(lista) {
    $.each(lista, function (i, obj) {
        $('#comboProfesor').append($('<option>', {
            value: obj.id,
            text: obj.nombre
        }));
    });
}

function ListarGrados() {
    $.ajax({
        url: backend + '/grado/ListarGrados',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (data) {
            console.log(data);
            MostrarGrados(data);
        }
    });
}
function MostrarGrados(lista) {
    $.each(lista, function (i, obj) {
        $('#comboGrado').append($('<option>', {
            value: obj.id,
            text: obj.nombre
        }));
    });
}