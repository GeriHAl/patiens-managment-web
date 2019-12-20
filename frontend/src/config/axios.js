import axios from 'axios';

const clienteAxios =axios.create({
    // La proxima vez que importemos este componente
    // clienteAxios ya tendra acceso a la url de 
    //localhost:5000 del backend  API
    // Se podran utilizar las rutas sin tener que escribir el dominio
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export default clienteAxios;
