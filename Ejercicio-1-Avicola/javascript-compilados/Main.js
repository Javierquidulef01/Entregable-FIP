"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComposicionAire_1 = require("./ComposicionAire");
const CongeladoPorAgua_1 = require("./CongeladoPorAgua");
const CongeladoPorAire_1 = require("./CongeladoPorAire");
const CongeladoPorNitrogeno_1 = require("./CongeladoPorNitrogeno");
const Fresco_1 = require("./Fresco");
const Refrigerado_1 = require("./Refrigerado");
const SalinidadAgua_1 = require("./SalinidadAgua");
console.log("******************** PRODUCTOS AVÍCOLAS ********************\n");
let HuevoCodorniz = new Fresco_1.Fresco("Huevo de codorniz", new Date("2022-04-14"), 1010, new Date("2021-11-20"), "La Granjera");
console.log(HuevoCodorniz.getEtiqueta());
console.log();
let milanesaTernera = new Refrigerado_1.Refrigerado("Milanesa de ternera", new Date("2022-02-11"), 2101, new Date("2023-10-20"), "La Granjera", "A101", 4);
console.log(milanesaTernera.getEtiqueta());
console.log();
let arvejas = new CongeladoPorAgua_1.CongeladoPorAgua("Arvejas", new Date("2023-01-17"), 31102, new Date("2022-03-28"), "La granjera", "C0103", 2, new SalinidadAgua_1.SalinidadAgua(5, 1));
console.log(arvejas.getEtiqueta());
console.log();
let hamburguesa = new CongeladoPorAire_1.CongeladoPorAire("Hamburguesa", new Date("2023-11-18"), 40012, new Date("2024-01-07"), "La Granjera", "CD0101", 4, new ComposicionAire_1.ComposicionAire(45, 25, 10, 20));
console.log(hamburguesa.getEtiqueta());
console.log();
let granosMaiz = new CongeladoPorNitrogeno_1.CongeladoPorNitrogeno("Granos de maíz", new Date("2023-05-09"), 8080, new Date("2022-02-22"), "La Granjera", "FH1912", 5, "Se congela por Nitrogeno....", 8);
console.log(granosMaiz.getEtiqueta());
console.log();
// https://es.stackoverflow.com/questions/481730/javascript-obtener-%c3%banicamente-la-fecha
// https://lenguajejs.com/javascript/fechas/date-fechas-nativas/#representaci%C3%B3n-de-fechas
//https://stackoverflow.com/questions/32877278/tolocaledatestring-is-subtracting-a-day
// https://es.stackoverflow.com/questions/219147/new-date-en-javascript-me-resta-un-dia
