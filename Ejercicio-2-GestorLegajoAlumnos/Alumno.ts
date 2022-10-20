import { Documento } from "./Documento";
import { Materia } from "./Materia";
import { Persona } from "./Persona";

export class Alumno extends Persona {
    private materias: Materia[];

    public constructor(nombre: string, apellido: string, documento: Documento, direccion: string, materias: Materia[]) {
        super(nombre, apellido, documento, direccion);
        this.materias = materias;
    }

    public getMaterias(): Materia[] {
        return this.materias;
    }

    public setMaterias(materias: Materia[]): void {
        this.materias = materias;
    }

}