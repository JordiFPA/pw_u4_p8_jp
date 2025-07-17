import axios from "axios";
//guardar 

let URL_API = 'http://localhost:8081/api/matricula/v1/profesores';
const guardar = async (body) => {
    axios.post(URL_API, body).then(r => r.data);
}

export const guardarFachada = async (body) => {
    guardar(body);
}
//Actualizar
const actualizar = async (body, id) => {
    axios.put(`${URL_API}/${id}`, body).then(r => r.data);
}
export const actualizarFachada = async (body, id) => {
    actualizar(body, id);
}

//Actualizar Parcial
const actualizarParcial = async (body, id) => {
    axios.patch(`${URL_API}/${id}`, body).then(r => r.data);
}
export const actualizarParcialFachada = async (body, id) => {
    actualizarParcial(body, id);
}

//Eliminar 
const eliminar = async (id) => {
    axios.delete(`${URL_API}/${id}`).then(r => r.data);
}
export const eliminarFachada = async (id) => {
    eliminar(id);
}

