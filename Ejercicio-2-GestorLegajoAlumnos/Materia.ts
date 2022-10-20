
export class Materia {
    private nombre: string;
    private notaPrimerTrimestre: number;
    private notaSegundoTrimestre: number;
    private notaTercerTrimestre: number;

    public constructor(nombre: string, notaPrimerTrimestre: number, notaSegundoTrimestre: number, notaTercerTrimestre: number) {
        this.nombre = nombre
        this.notaPrimerTrimestre = notaPrimerTrimestre
        this.notaSegundoTrimestre = notaSegundoTrimestre
        this.notaTercerTrimestre = notaTercerTrimestre
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getNotaPrimerTrimestre(): number {
        return this.notaPrimerTrimestre;
    }

    public setNotaPrimerTrimestre(nota: number): void {
        this.notaPrimerTrimestre = nota;
    }

    public getNotaSegundoTrimestre(): number {
        return this.notaSegundoTrimestre;
    }

    public setNotaSegundoTrimestre(nota: number): void {
            this.notaSegundoTrimestre = nota;
    }

    public getNotaTercerTrimestre(): number {
        return this.notaTercerTrimestre;
    }

    public setNotaTercerTrimestre(nota: number): void {
        this.notaTercerTrimestre = nota;
    }

    public getNotaFinal(): number {
        return (this.notaPrimerTrimestre + this.notaSegundoTrimestre + this.notaTercerTrimestre) / 3;
    }


}