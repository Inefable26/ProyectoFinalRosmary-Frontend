import { Component } from '@angular/core';
import { Education } from '../model/education';
import { EducationService } from '../service/education.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-delete-education',
  templateUrl: './delete-education.component.html',
  styleUrls: ['./delete-education.component.css']
})
export class DeleteEducationComponent {
  education: Education[] = [];  //nombre del model//
 
  constructor (private impEducationService: EducationService, private tokenService:TokenService) {} //el del service//

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarEducation();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;  //validando conexión//
    }

  }

  cargarEducation(): void{
    this.impEducationService.list().subscribe(
      data => {this.education = data;}
    )
    
  }


  onDelete (id:number){
    if(id !=undefined){
      this.impEducationService.delete(id).subscribe(
        data=>{this.cargarEducation();
        },err=>{alert("No se eliminó")})
      
    }
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
}
