"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
const Persona_1 = require("./Persona");
class Alumno extends Persona_1.Persona {
    constructor(nombre, apellido, documento, direccion, materias) {
        super(nombre, apellido, documento, direccion);
        this.materias = materias;
    }
    getMaterias() {
        return this.materias;
    }
    setMaterias(materias) {
        this.materias = materias;
    }
}
exports.Alumno = Alumno;
