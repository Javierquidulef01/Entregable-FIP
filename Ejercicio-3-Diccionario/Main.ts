import { Diccionario } from "./Diccionario";
import { Palabra } from "./Palabra";

let arte = new Palabra("arte", "sustantivo", ["Manifestación de la actividad humana mediante la cual se interpreta lo real o se plasma lo imaginado con recursos plásticos, lingüísticos o sonoros.","Capacidad, habilidad para hacer algo."],["talento", "genio", "facultad", "aptitud", "condición"], ["incapacidad"]);
let miseria = new Palabra("miseria","sustantivo",["Estrechez o pobreza extrema., Desgracia o infortunio. Usado o usada más en plural"],["pobreza", "indigencia", "penuria"],["riqueza","opulencia"]);
let caminar = new Palabra("caminar","verbo",["Dirigirse a un lugar o meta, avanzar hacia él.","Dicho de una persona o de un animal: Ir andando de un lugar a otro"],["andar", "pasear", "trotar", "vagar"],["descansar", "detenerse"]);
let descansar = new Palabra("descansar","verbo",["Tener algún alivio en las preocupaciones.","Dicho de una persona: Estar tranquila y sin cuidado por tener la confianza puesta en algo o alguien."],["Reposar", "dormir"], ["trabajar", "cansarse"]);
let trabajar = new Palabra("trabajar","verbo",["Tener una ocupación remunerada en una empresa, una institución,", "Tener una ocupación remunerada en una empresa, una institución,"], ["producir", "laborar", "esforzarse"], ["vaguear", "holgar", "holgazanear"]);
let jardin = new Palabra("jardin", "sustantivo",["Terreno donde se cultivan plantas con fines ornamentales.", "Escuela para niños de cuatro a seis años."], ["parque", "huerto", "rosaleda", "floresta"],[])
let mar = new Palabra("mar","sustantivo",["Gran Masa de agua salada que cubre la mayor parte de la superficie terrestre."], ["agua", "océano"], []);
let calor = new Palabra("calor", "sustantivo",["Temperatura alta"],["fuego", "ardor","calidez"], ["frio"]);
let blanco = new Palabra("blanco","adjetivo",["Dicho de un color: Semejante al de la nieve o la leche, y que corresponde al de la luz solar, no descompuesta en los varios colores del espectro"], ["nevado", "albar", "albino", "palido"], ["negro", "oscuro"]);
let flaco = new Palabra("flaco", "adjetivo",["De pocas carnes","Flojo, sin fuerzas, sin vigor para resistir."], ["delgado", "esquelético"], ["gordo", "obeso"]);
let bien = new Palabra("bien", "adverbio",["Aquello que en sí mismo tiene el complemento de la perfección en su propio género, o lo que es objeto de la voluntad, la cual ni se mueve ni puede moverse sino por el bien, sea verdadero o aprehendido falsamente como tal.", "Utilidad, beneficio", "Patrimonio, hacienda, caudal"], ["riqueza", "capital", "fortuna", "perfectamente:", "aceptablemente", "admisiblemente", "correctamente"], ["mal", "incorrectamente"]);
let palabras: Palabra[] = [arte, miseria, caminar, descansar, trabajar, jardin, mar, calor, blanco, flaco, bien];
let diccionario = new Diccionario(palabras);

console.log(diccionario);

console.log("**palabras entre flaco y caminar**");
console.log(diccionario.getPalabrasEntre(flaco, caminar));
console.log("**definiciones de palabra Caminar**");
console.log(diccionario.getDefiniciones(caminar));
console.log("**sinonimos palabra miseria**");
console.log(diccionario.getSinonimos(miseria));
console.log("**antonimos palabra blanco**");
console.log(diccionario.getAntonimos(blanco));

console.log("se intenta agregar la palabra mar");
console.log(diccionario.agregar(mar));
console.log("se eliminar la palabra mar");
console.log(diccionario.eliminar(mar));

let honesto = new Palabra("honesto","adjetivo", ["Que es incapaz de engañar, defraudar o apropiarse de lo que no es suyo"], ["decente","honrado", "justo", "razonable", "digno"], ["deshonesto", "desvergonzado", "vicioso", "impuro"]);
console.log("se intenta agregar la palabra honesto");
console.log(diccionario.agregar(honesto));

console.log("********************");
console.log(diccionario);
