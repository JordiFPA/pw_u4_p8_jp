function obtenerPaginasPermitidas(usuario) {
    let arreglo;
    if (usuario === 'admin') {
        arreglo = ['/home', '/about', '/estudiante', '/notas', '/403'];
    }
    if (usuario === 'estudiante') {
        arreglo = ['/home', '/about', '/estudiante', '/403'];
    }
    return arreglo;
}
export { obtenerPaginasPermitidas };