export class Documento {
    private tipo: string; //DNI, LE, CI, PAS
    private numero: string;

    public constructor(tipo: string, numero: string) {
        this.tipo = tipo;
        this.numero = numero;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setNumero(numero: string): void {
        this.numero = numero;
    }

    public getNumero(): string {
        return this.numero;
    }

}