"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fresco = void 0;
const Producto_1 = require("./Producto");
class Fresco extends Producto_1.Producto {
    constructor(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen) {
        super(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen);
    }
    getEtiqueta() {
        let etiqueta = `PRODUCTO FRESCO`;
        etiqueta += `\nNombre: ${this.nombre}`;
        etiqueta += `\nFecha de Vencimiento: ${this.fechaVencimiento.toLocaleDateString()}`;
        etiqueta += `\nLote Nro: ${this.loteNro}`;
        etiqueta += `\nFecha de Envasado: ${this.fechaEnvasado.toLocaleDateString()}`;
        etiqueta += `\nGranja de origen: ${this.granjaOrigen}`;
        return etiqueta;
    }
}
exports.Fresco = Fresco;
