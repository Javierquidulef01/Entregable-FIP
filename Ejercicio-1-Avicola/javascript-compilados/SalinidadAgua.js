"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalinidadAgua = void 0;
class SalinidadAgua {
    constructor(cantSal_grs, cantAgua_lts) {
        this.cantSal_grs = cantSal_grs;
        this.cantAgua_lts = cantAgua_lts;
    }
    getSalinidad() {
        let salinidad = `${this.cantSal_grs} gramos por cada ${this.cantAgua_lts} litro/s de agua`;
        return salinidad;
    }
    getCantSal_grs() {
        return this.cantSal_grs;
    }
    setCantSal_grs(cantSal_grs) {
        this.cantSal_grs = cantSal_grs;
    }
    getCantAgua_lts() {
        return this.cantAgua_lts;
    }
    setCantAgua_lts(cantAgua_lts) {
        this.cantAgua_lts = cantAgua_lts;
    }
}
exports.SalinidadAgua = SalinidadAgua;
