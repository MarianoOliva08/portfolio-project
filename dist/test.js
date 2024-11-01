"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/test.ts
const Portfolio_1 = require("./Portfolio");
const Persona_1 = require("./Persona");
const Estudio_1 = require("./Estudio");
// Crear una instancia de Portfolio
const portfolio = new Portfolio_1.Portfolio();
// Agregar un nuevo estudio
const estudio1 = new Estudio_1.Estudio("Licenciatura en Informática", "Universidad Nacional", 2023);
// Crear una nueva persona con el estudio
const persona1 = new Persona_1.Persona("12345678", "Juan", "Pérez", 30);
persona1.estudios = [estudio1]; // Asumiendo que has agregado una propiedad 'estudios' en la clase Persona
// Agregar la persona al portfolio
portfolio.agregarPersona(persona1);
// Listar personas para ver el resultado
console.log(portfolio.listarPersonas());
