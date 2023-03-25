import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Education } from '../model/education';
import { EducationService } from '../service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit{
  form: FormGroup;
  titulo: string= '';
  institucion: string= '';
  ano: string= '';
  url_logo: string= '';

  education: Education [] = [] ;

  constructor(private formBuilder:FormBuilder, private impEducationService: EducationService) 
  { 

    //Esto es para el formulario!!!
    this.form= this.formBuilder.group({
    titulo: ['',[Validators.required]],
    institucion: ['',[Validators.required]],
    ano: ['',[Validators.required]],
    url_logo: [''],

    })
  }
  
  ngOnInit(): void {
  
  }

  get Titulo (){
    return this.form.get("titulo");
  }

  get TituloValid (){
    return this.Titulo.touched && !this.Titulo.valid;
  }



onCreate(): void {
  const education = new Education(this.titulo, this.institucion, this.ano, this.url_logo);
  this.impEducationService.save(education).subscribe({
    next:(data) => {
      alert ('Nueva Educación añadida');
    }});
}

  //onUpdate(): void {
  //  const id = this.education.id;
  //  this.impEducationService.update (id,this.education).subscribe ({
  //    next:(data) => {
  //      alert ('Education editada');
  //    },error:(err) => {
  //      alert ('Falló');
  //}});
  //}

  
  cargarEducation(): void{
    this.impEducationService.list().subscribe(
      data => {this.education = data});
    
  }

  delete (id:number){
    if(id !=undefined){
      this.impEducationService.delete(id).subscribe(
        data=>{this.cargarEducation();
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

