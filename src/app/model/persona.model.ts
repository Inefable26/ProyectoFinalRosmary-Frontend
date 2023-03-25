export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    nombredescrip: String;
    descripcion: String;

    constructor(nombre: String,apellido: String,img: String,nombredescrip:String, descripcion: String) {
        this.nombre = nombre;
        this.apellido =apellido;
        this.img = img;
        this.nombredescrip =nombredescrip;
        this.descripcion = descripcion;
   
    }
}