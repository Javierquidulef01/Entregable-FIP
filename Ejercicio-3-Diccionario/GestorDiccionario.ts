import { Palabra } from "./Palabra";

export interface GestorDiciconario {

    agregar(palabra: Palabra): boolean;

    modificar(palabra: Palabra): boolean;
    
    eliminar(palabra: Palabra): boolean;
}