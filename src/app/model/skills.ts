export class Skills {
    id?: number;
    habilidad: string;
    porcentaje: number;
    subtitle: string;
    tipo: string;

    constructor(habilidad: string,porcentaje: number,subtitle: string, tipo: string) {
        this.habilidad = habilidad;
        this.porcentaje =porcentaje;
        this.subtitle = subtitle;
        this.tipo = tipo;
    }
}