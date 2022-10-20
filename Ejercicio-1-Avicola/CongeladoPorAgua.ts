import { Congelado } from "./Congelado";
import { SalinidadAgua } from "./SalinidadAgua";

export class CongeladoPorAgua extends Congelado {
    private salinidadDelAgua: SalinidadAgua;

    public constructor(nombre: string, fechaVencimiento: Date, loteNro: number, fechaEnvasado: Date, granjaOrigen: string, codigoAlimentario: string, temperatura: number, salinidadDelAgua: SalinidadAgua) {
        super(nombre,fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen, codigoAlimentario, temperatura);
        this.salinidadDelAgua = salinidadDelAgua;
    }

    public getEtiqueta(): string {
        let etiqueta: string = `PRODUCTO CONGELADO POR AGUA`;
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

    public getSalinidadDelAgua(): SalinidadAgua {
        return this.salinidadDelAgua;
    }

    public setSalinidadDelAgua(salinidadDelAgua: SalinidadAgua): void {
        this.salinidadDelAgua = salinidadDelAgua;
    }

}