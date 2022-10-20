"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComposicionAire = void 0;
class ComposicionAire {
    constructor(porcentaje_N, porcentaje_O2, porcentaje_CO2, porcentaje_vaporDeAgua) {
        this.porcentaje_N = porcentaje_N;
        this.porcentaje_O2 = porcentaje_O2;
        this.porcentaje_CO2 = porcentaje_CO2;
        this.porcentaje_vaporDeAgua = porcentaje_vaporDeAgua;
    }
    getComposicionDelAire() {
        let composicion = `${this.porcentaje_N}% de nitrógeno, `;
        composicion += `${this.porcentaje_O2}% de oxígeno, `;
        composicion += `${this.porcentaje_CO2}% de dióxido de carbono y `;
        composicion += `${this.porcentaje_vaporDeAgua}% de vapor de agua.`;
        return composicion;
    }
    getPorcentaje_N() {
        return this.porcentaje_N;
    }
    setPorcentaje_N(porcentaje_N) {
        this.porcentaje_N = porcentaje_N;
    }
    getPorcentaje_O2() {
        return this.porcentaje_O2;
    }
    setPorcentaje_O2(porcentaje_O2) {
        this.porcentaje_O2 = porcentaje_O2;
    }
    getPorcentaje_CO2() {
        return this.porcentaje_CO2;
    }
    setPorcentaje_CO2(porcentaje_CO2) {
        this.porcentaje_CO2 = porcentaje_CO2;
    }
    getPorcentaje_vaporDeAgua() {
        return this.porcentaje_vaporDeAgua;
    }
    setPorcentaje_vaporDeAgua(porcentaje_vaporDeAgua) {
        this.porcentaje_vaporDeAgua = porcentaje_vaporDeAgua;
    }
}
exports.ComposicionAire = ComposicionAire;
