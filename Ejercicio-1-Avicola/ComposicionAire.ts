export class ComposicionAire {
    private porcentaje_N: number;
    private porcentaje_O2: number;
    private porcentaje_CO2: number;
    private porcentaje_vaporDeAgua: number;

    public constructor(porcentaje_N: number, porcentaje_O2: number, porcentaje_CO2: number, porcentaje_vaporDeAgua: number) {
        this.porcentaje_N = porcentaje_N;
        this.porcentaje_O2 = porcentaje_O2;
        this.porcentaje_CO2 = porcentaje_CO2;
        this.porcentaje_vaporDeAgua = porcentaje_vaporDeAgua;
    }

    public getComposicionDelAire(): string {
        let composicion: string = `${this.porcentaje_N}% de nitrógeno, `;
            composicion += `${this.porcentaje_O2}% de oxígeno, `;
            composicion += `${this.porcentaje_CO2}% de dióxido de carbono y `;
            composicion += `${this.porcentaje_vaporDeAgua}% de vapor de agua.`;
        return composicion;
    }

    public getPorcentaje_N(): number {
        return this.porcentaje_N;
    }

    public setPorcentaje_N(porcentaje_N: number): void {
        this.porcentaje_N = porcentaje_N;
    }

    public getPorcentaje_O2(): number {
        return this.porcentaje_O2;
    }

    public setPorcentaje_O2(porcentaje_O2: number): void {
        this.porcentaje_O2 = porcentaje_O2;
    }

    public getPorcentaje_CO2(): number {
        return this.porcentaje_CO2;
    }

    public setPorcentaje_CO2(porcentaje_CO2: number): void {
        this.porcentaje_CO2 = porcentaje_CO2;
    }

    public getPorcentaje_vaporDeAgua(): number {
        return this.porcentaje_vaporDeAgua;
    }

    public setPorcentaje_vaporDeAgua(porcentaje_vaporDeAgua: number): void {
        this.porcentaje_vaporDeAgua = porcentaje_vaporDeAgua;
    }

}