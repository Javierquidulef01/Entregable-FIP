export class Palabra {
    private nombre: string;
    private funcionGramatical: string;
    private definiciones: string[];
    private sinonimos: string[];
    private antonimos: string[];

    public constructor(nombre: string, funcionGramatical: string, definiciones: string[], sinonimos: string[], antonimos: string[]) {
        this.nombre = nombre;
        this.funcionGramatical = funcionGramatical;
        this.definiciones = definiciones;
        this.sinonimos = sinonimos;
        this.antonimos = antonimos;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getFuncionGramatical(): string {
        return this.funcionGramatical;
    }

    public setFuncionGramatical(funcionGramatical: string): void {
        this.funcionGramatical = funcionGramatical;
    }

    public getDefiniciones(): string[] {
        return this.definiciones;
    }

    public setDefiniciones(definiciones: string[]): void {
        this.definiciones = definiciones;
    }

    public getSinonimos(): string[] {
        return this.sinonimos;
    }

    public setSinonimos(sinonimos: string[]): void {
        this.sinonimos = sinonimos;
    }

    public getAntonimos(): string[] {
        return this.antonimos;
    }

    public setAntonimos(antonimos: string[]): void {
        this.antonimos = antonimos;
    }

}
