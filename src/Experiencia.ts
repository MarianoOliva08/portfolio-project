
// src/Experiencia.ts
export interface Experiencia {
    puesto: string;
    empresa: string;
    inicio: Date;
    fin?: Date; // Fin puede ser opcional
}


export class Experiencia implements Experiencia {
    constructor(
        public empresa: string,
        public puesto: string,
        public anioInicio: number,
        public anioFin: number
    ) {}
}
