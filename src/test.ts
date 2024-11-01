// src/test.ts
import { Portfolio } from './Portfolio';
import { Persona } from './Persona';
import { Estudio } from './Estudio';

// Crear una instancia de Portfolio
const portfolio = new Portfolio();

// Agregar un nuevo estudio
const estudio1 = new Estudio("Licenciatura en Informática", "Universidad Nacional", 2023);

// Crear una nueva persona con el estudio
const persona1 = new Persona("12345678", "Juan", "Pérez", 30);
persona1.estudios = [estudio1]; // Asumiendo que has agregado una propiedad 'estudios' en la clase Persona

// Agregar la persona al portfolio
portfolio.AgregarPersona(persona1);

// Listar personas para ver el resultado
console.log(portfolio.ListarPersonas());
