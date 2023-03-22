export class Education {
    id?: number;
    titulo: string;
    institucion: string;
    ano: string;
    url_logo: string;

    constructor(titulo: string,institucion: string,ano: string, url_logo: string) {
        this.titulo = titulo;
        this.institucion =institucion;
        this.ano = ano;
        this.url_logo = url_logo;
    }
}

