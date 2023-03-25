import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Banner } from '../model/banner';
import { BannerService } from '../service/banner.service';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent {

  form: FormGroup;
  img: string = '';

banner: Banner[] = [] ;

constructor(private formBuilder:FormBuilder, private impBannerService: BannerService) 
{ 

  //Esto es para el formulario!!!
  this.form= this.formBuilder.group({
  img: ['',[Validators.required]],
  
  })
}

ngOnInit(): void {

}

get Img (){
  return this.form.get("img");
}

get ImgValid (){
  return this.Img.touched && !this.Img.valid;
}


onCreate(): void {
  const banner = new Banner(this.img );
  this.impBannerService.save(banner).subscribe({
    next:(data) => {
      alert ('Nuevo Banner añadido');
    }});
}

//onUpdate(): void {
//  const id = this.project.id;
//  this.impProjectService.update (id,this.project).subscribe ({
//    next:(data) => {
//      alert ('Proyecto editado');
//    },error:(err) => {
//      alert ('Falló');
//}});
//}

cargarBanner(): void{
  this.impBannerService.list().subscribe(
    data => {this.banner = data});
  
}

delete (id:number){
  if(id !=undefined){
    this.impBannerService.delete(id).subscribe(
      data=>{this.cargarBanner();
      },err=>{alert("No se eliminó")})
    
  }
}


limpiar(): void{
this.form.reset();
}

onEnviar (event:Event){  //Valida si está todo bien y marca lo que falte o esté mal//
event.preventDefault;
if (this.form.valid){
 this.onCreate();
}else{
alert("No cargó");
this.form.markAllAsTouched();
}
}
}
