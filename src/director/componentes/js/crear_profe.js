function RegistrarProfesor(){

    let backend = 'http://localhost:3030'
    
    const json = {
        nombre: document.getElementById('nombre').value,
        apellidoPaterno: document.getElementById('ap').value,
        apellidoMaterno: document.getElementById('am').value,
        correo: document.getElementById('email').value,
        curp: document.getElementById('curp').value
    }

    const nuevoUsuario = JSON.stringify(json);

    $.ajax({
        url: backend + "/profesor/registrar",
        method: "POST",
        data: nuevoUsuario,
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function(data){
            console.log(data);
        }
    })

}