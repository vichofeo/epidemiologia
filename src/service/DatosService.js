export default class DatosService {

    getDatos() {
        return fetch('data/datos.json').then(res => res.json()).then(d => d.data);
    }
}
