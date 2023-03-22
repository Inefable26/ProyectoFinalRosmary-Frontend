export class Project {
    id?: number;
    titulo: string;
    descripcion: string;
    ano: string;
    url_img_project: string;

    constructor(titulo: string,descripcion: string,ano: string, url_img_project: string) {
        this.titulo = titulo;
        this.descripcion =descripcion;
        this.ano = ano;
        this.url_img_project = url_img_project;
    }
}

