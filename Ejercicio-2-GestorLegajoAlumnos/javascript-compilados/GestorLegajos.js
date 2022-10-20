"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorLegajos = void 0;
class GestorLegajos {
    constructor(alumnos) {
        this.alumnos = alumnos;
    }
    getNotaPromedioDeUnAlumno(alumno) {
        let sumatoriaNotas = 0;
        alumno.getMaterias().forEach(materia => {
            sumatoriaNotas += materia.getNotaFinal();
        });
        return Number((sumatoriaNotas / alumno.getMaterias().length).toFixed(1));
    }
    getNotaPromedioDeLosAlumnos() {
        let sumatoriaNotas = 0;
        this.alumnos.forEach(alumno => {
            sumatoriaNotas += this.getNotaPromedioDeUnAlumno(alumno);
        });
        return Number((sumatoriaNotas / this.alumnos.length).toFixed(1));
    }
    getAlumnos() {
        return this.alumnos;
    }
    inscribir(alumno) {
        if (this.validarAlumno(alumno)) {
            this.alumnos.push(alumno);
        }
    }
    validarAlumno(alumno) {
        let mismoNro;
        this.alumnos.forEach(alumnoExistente => {
            mismoNro = alumnoExistente.getDocumento().getNumero() == alumno.getDocumento().getNumero();
            if (mismoNro) {
                let mismoTipo = alumnoExistente.getDocumento().getTipo() == alumno.getDocumento().getTipo();
                if (mismoTipo) {
                    return true;
                }
            }
        });
        return false;
    }
}
exports.GestorLegajos = GestorLegajos;
