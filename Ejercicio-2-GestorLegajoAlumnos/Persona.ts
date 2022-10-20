import { Documento } from "./Documento";

export abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected documento: Documento;
    protected direccion: string;

    public constructor(nombre: string, apellido: string, documento: Documento, direccion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.direccion = direccion;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getDocumento(): Documento {
        return this.documento;
    }

    public setDocumento(documento: Documento): void {
        this.documento = documento;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

}