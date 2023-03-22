export class Network {
    id?: number;
    cuenta: string;
    url_icono_red: string;
    
   

    constructor(cuenta: string, url_icono_red: string) {
            this.cuenta =cuenta;
            this.url_icono_red = url_icono_red;
      
    }
}

