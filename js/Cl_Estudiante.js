export default class Cl_Estudiante {
    constructor(c, n) {
        this.cedula = c;
        this.nota = n;
    }

    //metodos
    set cedula(c) {
        this._cedula = c;
    }

    get cedula() {
        return this._cedula;
    }

    set nota(n) {
        this._nota = n;
    }

    get nota() {
        return this._nota;
    }
}