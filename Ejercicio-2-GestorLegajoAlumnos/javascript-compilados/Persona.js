"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellido, documento, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.direccion = direccion;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getDocumento() {
        return this.documento;
    }
    setDocumento(documento) {
        this.documento = documento;
    }
    getDireccion() {
        return this.direccion;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
}
exports.Persona = Persona;
