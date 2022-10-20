import { Producto } from "./Producto";

export class Fresco extends Producto {

    public constructor(nombre: string, fechaVencimiento: Date, loteNro: number, fechaEnvasado: Date, granjaOrigen: string) {
        super(nombre,fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen);
    }

    public getEtiqueta(): string {
        let etiqueta: string = `PRODUCTO FRESCO`;
            etiqueta += `\nNombre: ${this.nombre}`;
            etiqueta += `\nFecha de Vencimiento: ${this.fechaVencimiento.toLocaleDateString()}`;
            etiqueta += `\nLote Nro: ${this.loteNro}`;
            etiqueta += `\nFecha de Envasado: ${this.fechaEnvasado.toLocaleDateString()}`;
            etiqueta += `\nGranja de origen: ${this.granjaOrigen}`;
        return etiqueta;
    }
    
}