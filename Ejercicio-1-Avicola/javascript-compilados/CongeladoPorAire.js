"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CongeladoPorAire = void 0;
const Congelado_1 = require("./Congelado");
class CongeladoPorAire extends Congelado_1.Congelado {
    constructor(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen, codigoAlimentario, temperatura, composicionDelAire) {
        super(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen, codigoAlimentario, temperatura);
        this.composicionDelAire = composicionDelAire;
    }
    getEtiqueta() {
        let etiqueta = `PRODUCTO CONGELADO POR AIRE`;
        etiqueta += `\nNombre: ${this.nombre}`;
        etiqueta += `\nFecha de vencimiento: ${this.fechaVencimiento.toLocaleDateString()}`;
        etiqueta += `\nLote Nro: ${this.loteNro}`;
        etiqueta += `\nFecha de envasado: ${this.fechaEnvasado.toLocaleDateString()}`;
        etiqueta += `\nCódigo alimentario: ${this.codigoAlimentario}`;
        etiqueta += `\nGranja de origen: ${this.granjaOrigen}`;
        etiqueta += `\nTemperatura de conservación: ${this.temperatura}°C`;
        etiqueta += `\nComposición del aire: ${this.composicionDelAire.getComposicionDelAire()}`;
        return etiqueta;
    }
    getComposicionDelAire() {
        return this.composicionDelAire;
    }
    setComposicionDelAire(composicionDelAire) {
        this.composicionDelAire = composicionDelAire;
    }
}
exports.CongeladoPorAire = CongeladoPorAire;
