// src/Portfolio.ts
import { Persona } from './Persona';
import { Habilidad } from './Habilidad';
import { Estudio } from './Estudio';
import { Experiencia } from './Experiencia';
import { Expectativa } from './Expectativa';
import * as fs from 'fs';

export class Portfolio {
    private personas: Persona[] = [];

    AgregarPersona(persona: Persona): void {
        this.personas.push(persona);
        this.GuardarEnArchivo();
    }

    EliminarPersona(dni: string): void {
        this.personas = this.personas.filter(persona => persona.dni !== dni);
        this.GuardarEnArchivo();
    }

    ListarPersonas(): Persona[] {
        return this.personas;
    }

    CargarDesdeArchivo(): void {
        try {
            const data = fs.readFileSync('portfolio.json', 'utf-8');
            this.personas = JSON.parse(data);
        } catch (error) {
            console.error('Error al cargar el archivo:', error);
        }
    }

    GuardarEnArchivo(): void {
        fs.writeFileSync('portfolio.json', JSON.stringify(this.personas, null, 2));
    }
}
