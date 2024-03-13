function toggleDropdown(className) {
    const contedores = document.querySelectorAll(className);
    contedores.forEach(element => {
        element.style.display = (element.style.display === '') ? 'block' : '';
    });
}

function options(index) {
    switch (index) {
        case 1:
            toggleDropdown('.alumno-dropdown');
            break;
        case 2:
            toggleDropdown('.materia-dropdown');
            break;
        default:
    }
}


$(function Rowscolor() {
    let rows = document.querySelectorAll('#tr-body');

    rows.forEach((row, index) => {
        if (index % 2 == 0) {
            row.style.backgroundColor = 'lightblue';
        } else {
            row.style.backgroundColor = 'white';
        }
    });
});

var backend = 'http://127.0.0.1:3030';

function Estado() {
    $.ajax({
        url: backend + '/auth/estado',
        method: 'POST',
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function (estado) {
            console.log("Estado Sesion: ");
            if (estado.accesoCorrecto) {
                console.log("Sesion iniciada")
                console.log(estado);
            } else {
                console.log("Sin sesion")
                console.log(estado);
                location.href = "../login/login.html";
            }
        }
    });
}

function Logout() {

    $.ajax({
        url: backend + '/auth/logout',
        method: 'POST',
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        success: function () {
            location.reload();
        }
    });
}


$(function () {
    Estado();
})

