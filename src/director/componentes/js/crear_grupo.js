/*var json = {
        nombre: n,
        profesor: p,
        grado: g,
        ciclo: c
    }

    $.ajax({
        url: backend + '/grupo/CreaGrupo',
        method: 'POST',
        data: JSON.stringify(json),
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (credenciales) {
            console.log(credenciales);
            location.href = credenciales.ruta;
        }
    })*/


    $(function (){
        ListarCiclos();
        ListarProfesores();
        ListarGrados();
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
        $.each(lista, function (i, element){
            $('#comboCiclo').append($('<option>',{
                value:element.id,
                text:element.inicio + " - " + element.fin
            }));
        });
    }

    function ListarProfesores(){
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
    function MostrarProfesores(lista){
        $.each(lista, function (i, obj){
            $('#comboProfesor').append($('<option>', {
                value: obj.uuid,
                text: obj.nombre
            }));
        });
    }

    function ListarGrados(){
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
    function MostrarGrados(lista){
        $.each(lista, function (i, obj){
            $('#comboGrado').append($('<option>', {
                value: obj.uuid,
                text: obj.nombre
            }));
        });
    }