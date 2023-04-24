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

}
