export class SalinidadAgua {
    private cantSal_grs: number;
    private cantAgua_lts: number;


    constructor(cantSal_grs: number, cantAgua_lts: number) {
        this.cantSal_grs = cantSal_grs;
        this.cantAgua_lts = cantAgua_lts;
    }

    public getSalinidad(): string {
        let salinidad: string = `${this.cantSal_grs} gramos por cada ${this.cantAgua_lts} litro/s de agua`;
        return salinidad;
    }

    public getCantSal_grs(): number {
        return this.cantSal_grs;
    }

    public setCantSal_grs(cantSal_grs: number): void {
        this.cantSal_grs = cantSal_grs;
    }

    public getCantAgua_lts(): number {
        return this.cantAgua_lts;
    }

    public setCantAgua_lts(cantAgua_lts: number): void {
        this.cantAgua_lts = cantAgua_lts;
    }

}