document.getElementById("ver-ciclos").addEventListener("click", () => {

        $("#content").load("./componentes/html/ver_ciclos.html");

        var backend = 'http://127.0.0.1:3030/cicloEscolar';
    
        $.ajax({
            url: backend + "/verCiclos",
            method: "GET",
            dataType: "json",
            contentType: "application/json",
            success: function(data){    
                let lista = data;
                let contenedor = document.getElementById('ciclos-container');
                contenedor.innerHTML = " "
                for(let index of lista){
                    contenedor.innerHTML += 
                    `
                    <div class="indice">
                        <div class="info">
                            <div class="inicio">
                                <span>${index.inicio}</span>
                            </div>
                            <div class="fin">
                                <span>${index.inicio}</span>
                            </div>
                            <div class="acciones">
                                <button onclick="ShowGrados(${index.id})">Grados</button>
                            </div>
                        </div>
                        <div id="grados-container" class = "grupos-${index.id}"> 
                            <button onclick="verGrupos()">Primero</button>
                            <button onclick="verGrupos()">Segundo</button>
                            <button onclick="verGrupos()">Tercero</button>
                            <button onclick="verGrupos()">Cuarto</button>
                            <button onclick="verGrupos()">Quinto</button>
                            <button onclick="verGrupos()">Sexto</button>
                        </div>
                        <div id="grupos-container">
    
                        </div>
                    </div>
                    `
                }
            }
        })
})
    

function ShowGrados(indice){
    box = document.getElementsByClassName('.grupos-'+indice);
    box.style.display = (box.style.display === '') ? 'flex' : ''; 
}

function verGrupos(){
    box = document.getElementById('grupos-container');
    box.style.display = (box.style.display === '')? 'flex' : '';
}

