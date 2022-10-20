"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Materia = void 0;
class Materia {
    constructor(nombre, notaPrimerTrimestre, notaSegundoTrimestre, notaTercerTrimestre) {
        this.nombre = nombre;
        this.notaPrimerTrimestre = notaPrimerTrimestre;
        this.notaSegundoTrimestre = notaSegundoTrimestre;
        this.notaTercerTrimestre = notaTercerTrimestre;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNotaPrimerTrimestre() {
        return this.notaPrimerTrimestre;
    }
    setNotaPrimerTrimestre(nota) {
        this.notaPrimerTrimestre = nota;
    }
    getNotaSegundoTrimestre() {
        return this.notaSegundoTrimestre;
    }
    setNotaSegundoTrimestre(nota) {
        this.notaSegundoTrimestre = nota;
    }
    getNotaTercerTrimestre() {
        return this.notaTercerTrimestre;
    }
    setNotaTercerTrimestre(nota) {
        this.notaTercerTrimestre = nota;
    }
    getNotaFinal() {
        return (this.notaPrimerTrimestre + this.notaSegundoTrimestre + this.notaTercerTrimestre) / 3;
    }
}
exports.Materia = Materia;
