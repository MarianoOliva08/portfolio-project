"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(dni, nombre, apellido, edad, 
    estudios = [] 
    ) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.estudios = estudios;
    }
    // Método para convertir la persona a JSON
    toJSON() {
        return JSON.stringify({
            dni: this.dni,
            nombre: this.nombre,
            apellido: this.apellido,
            edad: this.edad,
            estudios: this.estudios // Incluimos los estudios en el JSON
        });
    }
}

exports.Persona = Persona;
