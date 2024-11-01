"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const Persona_1 = require("./Persona");
const persona = new Persona_1.Persona('12345678', 'Juan', 'Pérez', 30);
console.log(persona.toJSON());
