// src/habilidad.ts

export interface IHabilidad {
    nombre: string;
    nivel: string; // Ej: "básico", "intermedio", "avanzado"
}

export class Habilidad implements IHabilidad {
    constructor(public nombre: string, public nivel: string) {}
}
