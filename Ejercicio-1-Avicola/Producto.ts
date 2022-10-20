export abstract class Producto {
    protected nombre: string;
    protected fechaVencimiento: Date;
    protected loteNro: number;
    protected fechaEnvasado: Date;
    protected granjaOrigen: string;

    public constructor(
        nombre: string,
        fechaVencimiento: Date,
        loteNro: number,
        fechaEnvasado: Date,
        granjaOrigen: string
    ) {
        this.nombre = nombre;
        fechaVencimiento.setMinutes(fechaVencimiento.getMinutes() + fechaVencimiento.getTimezoneOffset());
        this.fechaVencimiento = fechaVencimiento;
        this.loteNro = loteNro;
        fechaEnvasado.setMinutes(fechaEnvasado.getMinutes() + fechaEnvasado.getTimezoneOffset());
        this.fechaEnvasado = fechaEnvasado;
        this.granjaOrigen = granjaOrigen;
    }

    public abstract getEtiqueta(): string;

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getFechaVencimiento(): Date {
        return this.fechaVencimiento;
    }

    public setFechaVencimiento(fechaVencimiento: Date): void {
        fechaVencimiento.setMinutes(fechaVencimiento.getMinutes() + fechaVencimiento.getTimezoneOffset());
        this.fechaVencimiento = fechaVencimiento;
    }

    public getLoteNro(): number {
        return this.loteNro;
    }

    public setLoteNro(loteNro: number): void {
        this.loteNro = loteNro;
    }

    public getFechaEnvasado(): Date {
        return this.fechaEnvasado;
    }

    public setFechaEnvasado(fechaEnvasado: Date): void {
        fechaEnvasado.setMinutes(fechaEnvasado.getMinutes() + fechaEnvasado.getTimezoneOffset());
        this.fechaEnvasado = fechaEnvasado;
    }

    public getGranjaOrigen(): string {
        return this.granjaOrigen;
    }

    public setGranjaOrigen(granjaOrigen: string): void {
        this.granjaOrigen = granjaOrigen;
    }

}