"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Diccionario = void 0;
class Diccionario {
    constructor(palabras) {
        this.palabras = palabras;
        this.ordenarPalabrasAlfabeticamente(this.palabras);
    }
    agregar(palabra) {
        if (this.buscarPosicionDePalabra(palabra) < 0) {
            this.palabras.push(palabra);
            this.ordenarPalabrasAlfabeticamente(this.palabras);
            return true;
        }
        return false;
    }
    modificar(palabra) {
        let pos = this.buscarPosicionDePalabra(palabra);
        if (pos >= 0) {
            this.palabras[pos] = palabra;
            return true;
        }
        return false;
    }
    eliminar(palabra) {
        let pos = this.buscarPosicionDePalabra(palabra);
        if (pos >= 0) {
            this.palabras.splice(pos, 1);
            return true;
        }
        return false;
    }
    buscarPosicionDePalabra(palabra) {
        let nombre = palabra.getNombre();
        for (let i = 0; i < this.palabras.length; i++) {
            if (this.palabras[i].getNombre() == nombre) {
                return i;
            }
        }
        return -1;
    }
    getSinonimos(palabra) {
        return palabra.getSinonimos();
    }
    getAntonimos(palabra) {
        return palabra.getAntonimos();
    }
    getDefiniciones(palabra) {
        return palabra.getDefiniciones();
    }
    getPalabrasEntre(palabra1, palabra2) {
        let posPalabra1 = this.buscarPosicionDePalabra(palabra1);
        let posPalabra2 = this.buscarPosicionDePalabra(palabra2);
        if (posPalabra1 >= 0 && posPalabra2 >= 0) {
            if (posPalabra1 < posPalabra2) {
                return this.palabras.slice(posPalabra1, posPalabra2 + 1);
            }
            else {
                return this.palabras.slice(posPalabra2, posPalabra1 + 1);
            }
        }
        return [];
    }
    ordenarPalabrasAlfabeticamente(palabras) {
        //ordenamiento Burbuja
        for (let i = 0; i < palabras.length; i++) {
            for (let j = 0; j < palabras.length - 1; j++) {
                if (palabras[j].getNombre() > palabras[j + 1].getNombre()) {
                    let pAux = palabras[j];
                    palabras[j] = palabras[j + 1];
                    palabras[j + 1] = pAux;
                }
            }
        }
    }
}
exports.Diccionario = Diccionario;
