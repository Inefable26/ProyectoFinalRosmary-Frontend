export class JwtDto {
    token!:string;
    type!:string;
    nombreUsuario!:string;
    authorities!:string [];
}

//Pongo un ! para decirle que ignore el error//