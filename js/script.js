
// Remueve la ficha y disminuye el contador
function removerConexion(elementoRemover){
    elementoRemover.closest(".aside-request-deny").remove();
    let elementoNumeroConexiones = document.querySelector('#connectionRequestNumber');
    let numeroConexion = Number(elementoNumeroConexiones.textContent);
    numeroConexion --;
    elementoNumeroConexiones.textContent = numeroConexion;
}

// Agregar una conexion nueva
function agregarConexion(elementoAgregar){
    // Selecciona, elimina y agrega contenido
    let conexion = elementoAgregar.closest('.aside-request-useracept').previousElementSibling;
    let listaConexiones = document.querySelector('#myConnections');
    listaConexiones.innerHTML += `
        <div class='aside-request-info'">
            ${conexion.innerHTML}
        </div>`;
    elementoAgregar.closest(".aside-request-useracept").parentNode.remove();
    // Remueve -1 al contador de Connection Request
    let elementoNumeroConexiones = document.querySelector('#connectionRequestNumber');
    let numeroConexion = Number(elementoNumeroConexiones.textContent);
    numeroConexion --;
    elementoNumeroConexiones.textContent = numeroConexion;
    // Aumenta en 1 el contador total de Conexiones
    let elementoNumeroTotalConexiones = document.querySelector('#totalConnections');
    let numeroTotalConexion = Number(elementoNumeroTotalConexiones.textContent);
    console.log(numeroTotalConexion)
    numeroTotalConexion ++;
    elementoNumeroTotalConexiones.textContent = numeroTotalConexion;
}
// Cambiar nombre
function cambiarNombre() {
    let nombre = document.querySelector("#user-name");
    nombre.textContent = "María José"
}