import { Producto } from "./Producto";

export class Refrigerado extends Producto {
    private codigoAlimentario: string;
    private temperatura: number;


    constructor(nombre: string, fechaVencimiento: Date, loteNro: number, fechaEnvasado: Date, granjaOrigen: string, codigoAlimentario: string, temperatura: number) {
        super(nombre,fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen);
        this.codigoAlimentario = codigoAlimentario;
        this.temperatura = temperatura;
    }

    public getEtiqueta(): string {
        let etiqueta: string = `PRODUCTO REFRIGERADO`;
            etiqueta += `\nNombre: ${this.nombre}`;
            etiqueta += `\nFecha de vencimiento: ${this.fechaVencimiento.toLocaleDateString()}`;
            etiqueta += `\nLote Nro: ${this.loteNro}`;
            etiqueta += `\nFecha de envasado: ${this.fechaEnvasado.toLocaleDateString()}`;
            etiqueta += `\nCódigo alimentario: ${this.codigoAlimentario}`;
            etiqueta += `\nTemperatura de conservación: ${this.temperatura}°C`;
            etiqueta += `\nGranja de origen: ${this.granjaOrigen}`;

        return etiqueta;
    }

    public getCodigoAlimentario(): string {
        return this.codigoAlimentario;
    }

    public setCodigoAlimentario(codigoAlimentario: string): void {
        this.codigoAlimentario = codigoAlimentario;
    }

    public getTemperatura(): number {
        return this.temperatura;
    }

    public setTemperatura(temperatura: number): void {
        this.temperatura = temperatura;
    }

}