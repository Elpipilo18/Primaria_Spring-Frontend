function CrearCiclo(){
    var backend = "http://127.0.0.1:3030/cicloEscolar"

    var inicio = document.getElementById('inicio').value;
    var fin = document.getElementById('fin').value;

    var json = {
        inicio: inicio,
        fin: fin,
        status: 1,
    }
    
    $.ajax({
        url: backend + "/nuevoCicloEscolar",
        method: "POST",
        data: JSON.stringify(json),
        contentType: 'application/json',
        success: function(data){
            console.log(data);
            alert(data)
        }
    })
}