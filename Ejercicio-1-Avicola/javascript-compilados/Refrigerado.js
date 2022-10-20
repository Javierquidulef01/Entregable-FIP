"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refrigerado = void 0;
const Producto_1 = require("./Producto");
class Refrigerado extends Producto_1.Producto {
    constructor(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen, codigoAlimentario, temperatura) {
        super(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen);
        this.codigoAlimentario = codigoAlimentario;
        this.temperatura = temperatura;
    }
    getEtiqueta() {
        let etiqueta = `PRODUCTO REFRIGERADO`;
        etiqueta += `\nNombre: ${this.nombre}`;
        etiqueta += `\nFecha de vencimiento: ${this.fechaVencimiento.toLocaleDateString()}`;
        etiqueta += `\nLote Nro: ${this.loteNro}`;
        etiqueta += `\nFecha de envasado: ${this.fechaEnvasado.toLocaleDateString()}`;
        etiqueta += `\nCódigo alimentario: ${this.codigoAlimentario}`;
        etiqueta += `\nTemperatura de conservación: ${this.temperatura}°C`;
        etiqueta += `\nGranja de origen: ${this.granjaOrigen}`;
        return etiqueta;
    }
    getCodigoAlimentario() {
        return this.codigoAlimentario;
    }
    setCodigoAlimentario(codigoAlimentario) {
        this.codigoAlimentario = codigoAlimentario;
    }
    getTemperatura() {
        return this.temperatura;
    }
    setTemperatura(temperatura) {
        this.temperatura = temperatura;
    }
}
exports.Refrigerado = Refrigerado;
