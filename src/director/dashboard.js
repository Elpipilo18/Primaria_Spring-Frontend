function toggleDropdown(className) {
    const contedores = document.querySelectorAll(className);
    contedores.forEach(element => {
        element.style.display = (element.style.display === '') ? 'block' : '';
    });
}

function options(index) {
    switch (index) {
        case 1:
            toggleDropdown('.ciclo-dropdown');
            break;
        case 2:
            toggleDropdown('.maestro-dropdown');
            break;
        case 3:
            toggleDropdown('.alumno-dropdown');
            break;
        case 4:
            toggleDropdown('.materias-dropdown');
            break;
        default:
            break;
    }
}