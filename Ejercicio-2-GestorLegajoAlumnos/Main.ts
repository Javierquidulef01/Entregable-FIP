import { Alumno } from './Alumno';
import { Documento } from './Documento';
import { GestorLegajos } from './GestorLegajos';
import { Materia } from './Materia';

let a1 = new Alumno("Ezequiel", "Gonzalez", new Documento("DNI", "40912321"), "Alem 123", [new Materia("Matemática", 6.6, 7, 8),new Materia("Historia", 3, 9, 7), new Materia("Física", 3, 2, 5)]);
let a2 = new Alumno("Agustin", "Paredes", new Documento("DNI", "42123001"), "Magallanes 222", [new Materia("Matemática", 4, 6.5, 8),new Materia("Historia", 6, 5, 7), new Materia("Física", 4, 7, 8)]);
let a3 = new Alumno("Camila", "Uribe", new Documento("DNI", "41422524"), "Rosas 223", [new Materia("Matemática", 9, 8, 8),new Materia("Historia", 10, 9, 7), new Materia("Física", 9, 8, 9)]);
let a4 = new Alumno("Paola", "Echenique", new Documento("DNI", "42111912"), "20 Junio 111", [new Materia("Matemática", 3, 5, 8),new Materia("Historia", 7, 4, 8), new Materia("Física", 4, 7, 8)]);
let a5 = new Alumno("Vanesa", "Martinez", new Documento("DNI", "44012200"), "Bahia Blanca 321", [new Materia("Matemática", 6.6, 7.5, 6),new Materia("Historia", 9, 6, 8), new Materia("Física", 7.7, 8, 6)]);
let a6 = new Alumno("Maximiliano", "Perez", new Documento("DNI", "41000120"), "Belgrano 101", [new Materia("Matemática", 7.5, 8, 4),new Materia("Historia", 6, 5, 6), new Materia("Física", 5, 5, 7)]);
let a7 = new Alumno("Lucas", "Lopez", new Documento("DNI", "44234092"), "Los Andes 912", [new Materia("Matemática", 3, 5, 4),new Materia("Historia", 5, 6, 6), new Materia("Física", 6, 5, 5)]);
let a8 = new Alumno("Esteban", "Garay", new Documento("DNI", "39412911"), "Alem 478", [new Materia("Matemática", 9, 10, 9),new Materia("Historia", 10, 7, 8), new Materia("Física", 8, 10, 8)]);
let a9 = new Alumno("Ariel", "Fernandez", new Documento("DNI", "39222501"), "Urquiza 432", [new Materia("Matemática", 7, 7, 8),new Materia("Historia", 9, 8, 7), new Materia("Física", 8, 9, 7)]);
let a10 = new Alumno("Debora", "Arias", new Documento("DNI", "39412911"), "Perito Moreno 478", [new Materia("Matemática", 6, 7, 8),new Materia("Historia", 6.6, 7.6, 5), new Materia("Física", 8.5, 6, 7)]);
let a11 = new Alumno("Luciana", "Castro", new Documento("DNI", "39412911"), "Rivadavia 478", [new Materia("Matemática", 5, 4, 6),new Materia("Historia", 5, 5, 8), new Materia("Física", 6, 6, 7)]);

let alumnos: Alumno[] = [a1, a2, a3, a4];
let alumnos2: Alumno[] = [a5, a6, a7, a8, a9, a10, a11];

let gestor = new GestorLegajos(alumnos);

console.table(gestor);

alumnos2.forEach(alumno => {
    gestor.inscribir(alumno);
});

console.table(gestor);

console.log("Nota promedio alumno 1");
console.log(gestor.getNotaPromedioDeUnAlumno(a1));

console.log("promedio de todos los inscriptos");
console.log(gestor.getNotaPromedioDeLosAlumnos());
