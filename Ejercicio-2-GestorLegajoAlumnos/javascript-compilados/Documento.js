"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documento = void 0;
class Documento {
    constructor(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getTipo() {
        return this.tipo;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getNumero() {
        return this.numero;
    }
}
exports.Documento = Documento;
