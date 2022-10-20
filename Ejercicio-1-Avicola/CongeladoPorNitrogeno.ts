import { Congelado } from "./Congelado";

export class CongeladoPorNitrogeno extends Congelado {
    private metodoDeCongelacion: string;
    private segundosDeExposicion: number;

    public constructor(nombre: string, fechaVencimiento: Date, loteNro: number, fechaEnvasado: Date, granjaOrigen: string, codigoAlimentario: string, temperatura: number, metodoDeCongelacion: string, segundosDeExposicion: number) {
        super(nombre,fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen, codigoAlimentario, temperatura);
        this.metodoDeCongelacion = metodoDeCongelacion;
        this.segundosDeExposicion = segundosDeExposicion;
    }

    public getEtiqueta(): string {
        let etiqueta: string = `PRODUCTO CONGELADO POR NITROGENO`;
            etiqueta += `\nNombre: ${this.nombre}`;
            etiqueta += `\nFecha de vencimiento: ${this.fechaVencimiento.toLocaleDateString()}`;
            etiqueta += `\nLote Nro: ${this.loteNro}`;
            etiqueta += `\nFecha de envasado: ${this.fechaEnvasado.toLocaleDateString()}`;
            etiqueta += `\nCódigo alimentario: ${this.codigoAlimentario}`;
            etiqueta += `\nGranja de origen: ${this.granjaOrigen}`;
            etiqueta += `\nTemperatura de conservación: ${this.temperatura}°C`;
            etiqueta += `\nMétodo de congelación: ${this.metodoDeCongelacion}`;
            etiqueta += `\nTiempo de exposición al Nitrogeno (N): ${this.segundosDeExposicion} segundos`;
        return etiqueta;
    }

    public getMetodoDeCongelacion(): string {
        return this.metodoDeCongelacion;
    }

    public setMetodoDeCongelacion(metodoDeCongelacion: string): void {
        this.metodoDeCongelacion = metodoDeCongelacion;
    }

    public getSegundosDeExposicion(): number {
        return this.segundosDeExposicion;
    }

    public setSegundosDeExposicion(segundosDeExposicion: number): void {
        this.segundosDeExposicion = segundosDeExposicion;
    }

}