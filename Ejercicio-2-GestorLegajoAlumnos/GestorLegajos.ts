import { Alumno } from "./Alumno";

export class GestorLegajos {
    private alumnos: Alumno[];

    public constructor(alumnos: Alumno[]) {
        this.alumnos = alumnos;
    }

    public getNotaPromedioDeUnAlumno(alumno: Alumno): number {
        let sumatoriaNotas: number = 0;
        alumno.getMaterias().forEach(materia => {
            sumatoriaNotas += materia.getNotaFinal();
        })
        return Number((sumatoriaNotas / alumno.getMaterias().length).toFixed(1));
    }

    public getNotaPromedioDeLosAlumnos(): number {
        let sumatoriaNotas: number = 0;
        this.alumnos.forEach(alumno => {
            sumatoriaNotas += this.getNotaPromedioDeUnAlumno(alumno);
        })
        return Number((sumatoriaNotas / this.alumnos.length).toFixed(1));
    }

    public getAlumnos(): Alumno[] {
        return this.alumnos;
    }

    public inscribir(alumno: Alumno): void {
        if (this.validarAlumno(alumno)) {
            this.alumnos.push(alumno);
        }
    }

    private validarAlumno(alumno: Alumno): boolean {
        let mismoNro: boolean;
        this.alumnos.forEach(alumnoExistente => {
            mismoNro = alumnoExistente.getDocumento().getNumero() == alumno.getDocumento().getNumero();
            if (mismoNro) {
                let mismoTipo: boolean = alumnoExistente.getDocumento().getTipo() == alumno.getDocumento().getTipo();
                if (mismoTipo) {
                    return true;
                }
            }
        })
        return false;
    }

}