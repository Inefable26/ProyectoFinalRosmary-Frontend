import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Experience } from '../model/experience';
import { ExperienceService } from '../service/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  form: FormGroup;
  puesto: string= '';
  organizacion: string= '';
  ano: string= '';
  url_logo: string= '';

  experience: Experience[] = [] ;

  constructor(private formBuilder:FormBuilder, private impExperienceService: ExperienceService) 
  { 

    //Esto es para el formulario!!!
    this.form= this.formBuilder.group({
    puesto: ['',[Validators.required]],
    organizacion: ['',[Validators.required]],
    ano: ['',[Validators.required]],
    url_logo: [''],

    })
  }
  
  ngOnInit(): void {
  
  }

  get Puesto (){
    return this.form.get("puesto");
  }

  get PuestoValid (){
    return this.Puesto.touched && !this.Puesto.valid;
  }

 

  onCreate(): void {
    const experience = new Experience(this.puesto, this.organizacion, this.ano, this.url_logo);
    this.impExperienceService.save(experience).subscribe({
      next:(data) => {
        alert ('Nueva Experiencia añadida');
      }});
}


  //onUpdate(): void {
  //  const id = this.experience.id;
  //  this.impExperienceService.update (id,this.experience).subscribe ({
  //    next:(data) => {
  //      alert ('Experiencia editada');
  //    },error:(err) => {
  //      alert ('Falló');
  //}});
  //}

cargarExperience(): void{
  this.impExperienceService.list().subscribe(
    data => {this.experience = data});
  
}


delete (id:number){
  if(id !=undefined){
    this.impExperienceService.delete(id).subscribe(
      data=>{this.cargarExperience();
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