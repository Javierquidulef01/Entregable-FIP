import { GestorDiciconario } from "./GestorDiccionario";
import { Palabra } from './Palabra';

export class Diccionario implements GestorDiciconario {
    private palabras: Palabra[];

    public constructor(palabras: Palabra[]) {
        this.palabras = palabras;
        this.ordenarPalabras(this.palabras);
    }

    agregar(palabra: Palabra): boolean {
        if (this.buscarPosicionDePalabra(palabra) < 0) {
            this.palabras.push(palabra);
            this.ordenarPalabras(this.palabras);
            return true;
        }
        return false
    }

    modificar(palabra: Palabra): boolean {
        let pos: number = this.buscarPosicionDePalabra(palabra);
        if (pos >= 0) {
            this.palabras[pos] = palabra;
            return true;
        }
        return false
    }

    eliminar(palabra: Palabra): boolean {
        let pos: number = this.buscarPosicionDePalabra(palabra);
        if (pos >= 0) {
            this.palabras.splice(pos, 1);
            return true;
        }
        return false
    }

    private buscarPosicionDePalabra(palabra: Palabra): number {
        let nombre: string = palabra.getNombre();
        for (let i: number = 0; i < this.palabras.length; i++) {
            if (this.palabras[i].getNombre() == nombre) {
                return i;
            }
        }
        return -1;
    }

    public getSinonimos(palabra: Palabra): string[] {
        return palabra.getSinonimos();
    }

    public getAntonimos(palabra: Palabra): string[] {
        return palabra.getAntonimos();
    }

    public getDefiniciones(palabra: Palabra): string[] {
        return palabra.getDefiniciones();
    }

    public getPalabrasEntre(palabra1: Palabra, palabra2: Palabra): Palabra[] {
        let posPalabra1: number = this.buscarPosicionDePalabra(palabra1);
        let posPalabra2: number = this.buscarPosicionDePalabra(palabra2);

        if (posPalabra1 >= 0 && posPalabra2 >= 0) {
            if (posPalabra1 < posPalabra2) {
                return this.palabras.slice(posPalabra1, posPalabra2 + 1);
            } else {
                return this.palabras.slice(posPalabra2, posPalabra1 + 1);
            }
        }
        return [];
    }

    private ordenarPalabras(palabras: Palabra[]): void {
        //ordenamiento Burbuja
        for (let i: number = 0; i < palabras.length; i++) {
            for (let j: number = 0; j < palabras.length - 1; j++) {
                if (palabras[j].getNombre() > palabras[j + 1].getNombre()) {
                    let pAux: Palabra = palabras[j];
                    palabras[j] = palabras[j + 1];
                    palabras[j + 1] = pAux;
                }
            }
        }
    }

}