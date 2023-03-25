import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Project } from '../model/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.css']
})
export class EditProjectsComponent {

  form: FormGroup;
    titulo: string = '';
    descripcion: string = '';
    ano: string = '';
    url_img_project: string = '';

  project: Project[] = [] ;

  constructor(private formBuilder:FormBuilder, private impProjectService: ProjectService) 
  { 

    //Esto es para el formulario!!!
    this.form= this.formBuilder.group({
    titulo: ['',[Validators.required]],
    descripcion: ['',[Validators.required]],
    ano: ['',[Validators.required]],
    url_img_project: [''],

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
    const project = new Project(this.titulo, this.descripcion, this.ano, this.url_img_project);
    this.impProjectService.save(project).subscribe({
      next:(data) => {
        alert ('Nuevo Proyecto añadida');
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

  cargarProject(): void{
    this.impProjectService.list().subscribe(
      data => {this.project = data});
    
  }

  delete (id:number){
    if(id !=undefined){
      this.impProjectService.delete(id).subscribe(
        data=>{this.cargarProject();
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
