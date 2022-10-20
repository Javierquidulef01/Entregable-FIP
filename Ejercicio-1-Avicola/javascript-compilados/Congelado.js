"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Congelado = void 0;
const Producto_1 = require("./Producto");
class Congelado extends Producto_1.Producto {
    constructor(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen, codigoAlimentario, temperatura) {
        super(nombre, fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen);
        this.codigoAlimentario = codigoAlimentario;
        this.temperatura = temperatura;
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
exports.Congelado = Congelado;
