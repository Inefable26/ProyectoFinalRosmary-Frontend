import { Component, OnInit } from '@angular/core';
import { Education } from '../model/education';
import { EducationService } from '../service/education.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent  implements OnInit {
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
