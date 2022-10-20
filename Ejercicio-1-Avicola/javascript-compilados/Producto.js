"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
class Producto {
    constructor(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen) {
        this.nombre = nombre;
        fechaVencimiento.setMinutes(fechaVencimiento.getMinutes() + fechaVencimiento.getTimezoneOffset());
        this.fechaVencimiento = fechaVencimiento;
        this.loteNro = loteNro;
        fechaEnvasado.setMinutes(fechaEnvasado.getMinutes() + fechaEnvasado.getTimezoneOffset());
        this.fechaEnvasado = fechaEnvasado;
        this.granjaOrigen = granjaOrigen;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getFechaVencimiento() {
        return this.fechaVencimiento;
    }
    setFechaVencimiento(fechaVencimiento) {
        fechaVencimiento.setMinutes(fechaVencimiento.getMinutes() + fechaVencimiento.getTimezoneOffset());
        this.fechaVencimiento = fechaVencimiento;
    }
    getLoteNro() {
        return this.loteNro;
    }
    setLoteNro(loteNro) {
        this.loteNro = loteNro;
    }
    getFechaEnvasado() {
        return this.fechaEnvasado;
    }
    setFechaEnvasado(fechaEnvasado) {
        fechaEnvasado.setMinutes(fechaEnvasado.getMinutes() + fechaEnvasado.getTimezoneOffset());
        this.fechaEnvasado = fechaEnvasado;
    }
    getGranjaOrigen() {
        return this.granjaOrigen;
    }
    setGranjaOrigen(granjaOrigen) {
        this.granjaOrigen = granjaOrigen;
    }
}
exports.Producto = Producto;
