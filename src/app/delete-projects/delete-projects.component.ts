import { Component } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../service/project.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-delete-projects',
  templateUrl: './delete-projects.component.html',
  styleUrls: ['./delete-projects.component.css']
})
export class DeleteProjectsComponent {
  project: Project[] = [];  //nombre del model//
 
  constructor (private impProjectService: ProjectService, private tokenService:TokenService) {} //el del service//

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarProject();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;  //validando conexión//
    }

  }

  cargarProject(): void{
    this.impProjectService.list().subscribe(
      data => {this.project = data;}
    )
    
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

  onDelete (id:number){
    if(id !=undefined){
      this.impProjectService.delete(id).subscribe(
        data=>{this.cargarProject();
        },err=>{alert("No se eliminó")})
      
    }
  }

}
