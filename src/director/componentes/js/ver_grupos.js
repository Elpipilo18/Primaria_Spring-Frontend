function VerGrupos(){
    let backend = 'http://127.0.0.1:3030/grupos';

    $.ajax({
        url: backend + '/ListarGrupos',
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        xhrFields: { withCredentials: true },
        success: function (data) {
            let lista = data;
            console.log(lista);
            let contenedor = document.getElementById('Grupos-container');
            contenedor.innerHTML = " "
            for (let index of lista) {
                contenedor.innerHTML +=
                    `
                    <div class="indice">
                        <div class="info">
                            <div class="Nombre">
                                <span>Grupo: ${index.nombre}</span>
                            </div>
                            <div class="Profesor">
                                <span>${index.profesor.nombre+" "+index.profesor.apellidoPaterno+" "+index.profesor.apellidoMaterno}</span>
                            </div>
                            <div class="Ciclo">
                            <span>Ciclo: ${index.ciclo.inicio+"-"+index.ciclo.fin}</span>
                        </div>
                        </div>
                        <div class="acciones">
                            <button onclick="">Accion</button>
                        </div>
                    </div>
                    `
            }
        }
    })
}


$(function() {
    VerGrupos();
})
