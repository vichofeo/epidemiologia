export default class CountryService {

    getCountries() {
        return fetch('data/datos.json').then(res => res.json()).then(d => d.data);
    }
}
