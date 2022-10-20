"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CongeladoPorNitrogeno = void 0;
const Congelado_1 = require("./Congelado");
class CongeladoPorNitrogeno extends Congelado_1.Congelado {
    constructor(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen, codigoAlimentario, temperatura, metodoDeCongelacion, segundosDeExposicion) {
        super(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen, codigoAlimentario, temperatura);
        this.metodoDeCongelacion = metodoDeCongelacion;
        this.segundosDeExposicion = segundosDeExposicion;
    }
    getEtiqueta() {
        let etiqueta = `PRODUCTO CONGELADO POR NITROGENO`;
        etiqueta += `\nNombre: ${this.nombre}`;
        etiqueta += `\nFecha de vencimiento: ${this.fechaVencimiento.toLocaleDateString()}`;
        etiqueta += `\nLote Nro: ${this.loteNro}`;
        etiqueta += `\nFecha de envasado: ${this.fechaEnvasado.toLocaleDateString()}`;
        etiqueta += `\nCódigo alimentario: ${this.codigoAlimentario}`;
        etiqueta += `\nGranja de origen: ${this.granjaOrigen}`;
        etiqueta += `\nTemperatura de conservación: ${this.temperatura}°C`;
        etiqueta += `\nMétodo de congelación: ${this.metodoDeCongelacion}`;
        etiqueta += `\nTiempo de exposición al Nitrogeno (N): ${this.segundosDeExposicion} segundos`;
        return etiqueta;
    }
    getMetodoDeCongelacion() {
        return this.metodoDeCongelacion;
    }
    setMetodoDeCongelacion(metodoDeCongelacion) {
        this.metodoDeCongelacion = metodoDeCongelacion;
    }
    getSegundosDeExposicion() {
        return this.segundosDeExposicion;
    }
    setSegundosDeExposicion(segundosDeExposicion) {
        this.segundosDeExposicion = segundosDeExposicion;
    }
}
exports.CongeladoPorNitrogeno = CongeladoPorNitrogeno;
