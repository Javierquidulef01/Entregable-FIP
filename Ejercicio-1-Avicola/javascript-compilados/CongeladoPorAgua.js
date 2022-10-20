"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CongeladoPorAgua = void 0;
const Congelado_1 = require("./Congelado");
class CongeladoPorAgua extends Congelado_1.Congelado {
    constructor(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen, codigoAlimentario, temperatura, salinidadDelAgua) {
        super(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen, codigoAlimentario, temperatura);
        this.salinidadDelAgua = salinidadDelAgua;
    }
    getEtiqueta() {
        let etiqueta = `PRODUCTO CONGELADO POR AGUA`;
        etiqueta += `\nNombre: ${this.nombre}`;
        etiqueta += `\nFecha de vencimiento: ${this.fechaVencimiento.toLocaleDateString()}`;
        etiqueta += `\nLote Nro: ${this.loteNro}`;
        etiqueta += `\nFecha de envasado: ${this.fechaEnvasado.toLocaleDateString()}`;
        etiqueta += `\nCódigo alimentario: ${this.codigoAlimentario}`;
        etiqueta += `\nGranja de origen: ${this.granjaOrigen}`;
        etiqueta += `\nTemperatura de conservación: ${this.temperatura}°C`;
        etiqueta += `\nSalinidad del agua: ${this.salinidadDelAgua.getSalinidad()}.`;
        return etiqueta;
    }
    getSalinidadDelAgua() {
        return this.salinidadDelAgua;
    }
    setSalinidadDelAgua(salinidadDelAgua) {
        this.salinidadDelAgua = salinidadDelAgua;
    }
}
exports.CongeladoPorAgua = CongeladoPorAgua;
