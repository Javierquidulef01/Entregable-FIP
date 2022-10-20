"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Palabra = void 0;
class Palabra {
    constructor(nombre, funcionGramatical, definiciones, sinonimos, antonimos) {
        this.nombre = nombre;
        this.funcionGramatical = funcionGramatical;
        this.definiciones = definiciones;
        this.sinonimos = sinonimos;
        this.antonimos = antonimos;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getFuncionGramatical() {
        return this.funcionGramatical;
    }
    setFuncionGramatical(funcionGramatical) {
        this.funcionGramatical = funcionGramatical;
    }
    getDefiniciones() {
        return this.definiciones;
    }
    setDefiniciones(definiciones) {
        this.definiciones = definiciones;
    }
    getSinonimos() {
        return this.sinonimos;
    }
    setSinonimos(sinonimos) {
        this.sinonimos = sinonimos;
    }
    getAntonimos() {
        return this.antonimos;
    }
    setAntonimos(antonimos) {
        this.antonimos = antonimos;
    }
}
exports.Palabra = Palabra;
