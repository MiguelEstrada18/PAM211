export class Usuario {
    constructor(id, nombre, fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.fecha_creacion = this.fecha_creacion || new Date().toISOString();
    }

    static validar(nombre) {
        if(!nombre || nombre.trim().length === 0) {
            throw new Error('El nombre no puede estar vacío');
        }
        if (nombre.trim().length > 50) {
            throw new Error('El nombre no puede tener más de 50 caracteres');
        }
        return true;
    }
}

