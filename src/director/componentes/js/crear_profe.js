function RegistrarProfesor(){
    
    const json = {
        nombre: document.getElementById('nombre').value,
        apellidoPaterno: document.getElementById('ap').value,
        apellidoMaterno: document.getElementById('am').value,
        correo: document.getElementById('email').value,
        curp: document.getElementById('curp').value
    }

    const nuevoUsuario = JSON.stringify(json);

    $.ajax({
        url: backend + "/nuevoUsuario",
        type: "POST",
        data: nuevoUsuario,
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function(data){
            console.log(data);
        }
    })

}