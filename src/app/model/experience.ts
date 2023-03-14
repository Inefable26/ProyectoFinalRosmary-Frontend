export class Experience {
    id?: number;
    puesto: string;
    organizacion: string;
    ano: string;
    url_logo: string;

    constructor(puesto: string,organizacion: string,ano: string, url_logo: string) {
        this.puesto = puesto;
        this.organizacion =organizacion;
        this.ano = ano;
        this.url_logo = url_logo;
    }
}
