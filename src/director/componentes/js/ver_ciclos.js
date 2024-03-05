document.getElementById("ver-ciclos").addEventListener("click", () => {

    $("#content").load("./componentes/html/ver_ciclos.html");

    let backend = 'http://127.0.0.1:3030/cicloEscolar';

    $.ajax({
        url: backend + '/ListarCiclos',
        method: "GET",
        dataType: "json",
        contentType: "application/json",
        xhrFields: { withCredentials: true },
        success: function (data) {
            let lista = data;
            let contenedor = document.getElementById('ciclos-container');
            contenedor.innerHTML = " "
            for (let index of lista) {
                contenedor.innerHTML +=
                    `
                    <div class="indice">
                        <div class="info">
                            <div class="inicio">
                                <span>Inicio: ${index.inicio}</span>
                            </div>
                            <div class="fin">
                                <span>Fin: ${index.fin}</span>
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
})

