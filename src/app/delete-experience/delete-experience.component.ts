import { Component } from '@angular/core';
import { Experience } from '../model/experience';
import { ExperienceService } from '../service/experience.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-delete-experience',
  templateUrl: './delete-experience.component.html',
  styleUrls: ['./delete-experience.component.css']
})
export class DeleteExperienceComponent {
  experience: Experience[] = [];  //nombre del model//

  //Abajo, en construc, service del back y lueg del front//
  constructor (private impExperienceService: ExperienceService, private tokenService:TokenService) {} //el del service//

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarExperience();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;  //validando conexión//
    }

  }

  cargarExperience(): void{
    this.impExperienceService.list().subscribe(
      data => {this.experience = data});
    
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

  onDelete (id:number){
    if(id !=undefined){
      this.impExperienceService.delete(id).subscribe(
        data=>{this.cargarExperience();
        },err=>{alert("No se eliminó")})
      
    }
  }

}
