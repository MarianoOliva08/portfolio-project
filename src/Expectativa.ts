// src/Expectativa.ts

export interface IExpectativa {
    puestoDeseado: string;
    salarioEsperado: number; // Salario esperado en la moneda que se considere
    tipoContrato: string;     // Ejemplo: "Tiempo completo", "Medio tiempo", etc.
}

export class Expectativa implements IExpectativa {
    constructor(
        public puestoDeseado: string,
        public salarioEsperado: number,
        public tipoContrato: string
    ) {}
}
