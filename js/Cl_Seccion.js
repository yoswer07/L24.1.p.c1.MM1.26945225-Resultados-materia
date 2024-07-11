export default class Cl_TodoPersona {
    constructor(){
        this.contAprobados = 0;
        this.contReprobados = 0;
        this.acumNotas = 0;
        this.contEstudiantes = 0;
    }

    //metodos
    procesarEstudiante(est) {
        if(est.nota >= 48) {
            this.contAprobados++;
        } else {
            this.contReprobados++;
        }
        this.acumNotas += est.nota;
        this.contEstudiantes++;
    }
    devolverAprobados(){
        return this.contAprobados;
    }
    devolverReprobados() {
        return this.contReprobados;
    }
    promedioNotas() {
        return this.acumNotas / this.contEstudiantes;
    }
}