import { Producto } from "./Producto";

export abstract class Congelado extends Producto {
    protected codigoAlimentario: string;
    protected temperatura: number;

    public constructor(nombre: string, fechaVencimiento: Date, loteNro: number, fechaEnvasado: Date, granjaOrigen: string, codigoAlimentario: string, temperatura: number) {
        super(nombre,fechaVencimiento, loteNro, fechaEnvasado, granjaOrigen);
        this.codigoAlimentario = codigoAlimentario;
        this.temperatura = temperatura;
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