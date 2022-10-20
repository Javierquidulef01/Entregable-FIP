import { ComposicionAire } from "./ComposicionAire";
import { Congelado } from "./Congelado";

export class CongeladoPorAire extends Congelado {
    private composicionDelAire: ComposicionAire;

    public constructor(nombre: string, fechaVencimiento: Date, loteNro: number, fechaEnvasado: Date, granjaOrigen: string, codigoAlimentario: string, temperatura: number, composicionDelAire: ComposicionAire) {
        super(nombre,fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen, codigoAlimentario, temperatura);
        this.composicionDelAire = composicionDelAire;
    }

    public getEtiqueta(): string {
        let etiqueta: string = `PRODUCTO CONGELADO POR AIRE`;
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

    public getComposicionDelAire(): ComposicionAire {
        return this.composicionDelAire;
    }

    public setComposicionDelAire(composicionDelAire: ComposicionAire): void {
        this.composicionDelAire = composicionDelAire;
    }
}