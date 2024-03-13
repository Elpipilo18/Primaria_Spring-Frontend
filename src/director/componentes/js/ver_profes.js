document.getElementById("ver-profes").addEventListener("click", () => {
    let backend = 'http://127.0.0.1:3030';

    $('#content').load('./componentes/html/ver_profes.html');

    $.ajax({
        url: backend + '/profesor/ListarProfesores',
        method: 'GET',
        dataType: "json",
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (res) {
            console.log(res)
            MostrarProfes(res);
        }
    })
})

function MostrarProfes(lista) {
    let tablaBody = document.getElementById('tabla-profes');
    if (tablaBody) {
        tablaBody.innerHTML = '';
        for (let profe of lista) {
            tablaBody.innerHTML +=
                `
            <tr id='fila'>
                <td>${profe.nombre}</td>
                <td>${profe.apellidoPaterno + " " + profe.apellidoMaterno}</td>
                <td>${profe.correo}</td>
                <td>${profe.curp}</td>
                <td><button>Editar</button></td>
                <td><button>Eliminar</button></td>
            </tr>
            `
        }
    }
}
