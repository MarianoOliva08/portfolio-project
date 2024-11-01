export interface IEstudio {
    titulo: string;
    institucion: string;
    añoFinalizacion: number; 
}

export class Estudio implements IEstudio {
    constructor(
        public titulo: string,
        public institucion: string,
        public añoFinalizacion: number
    ) {}
}

