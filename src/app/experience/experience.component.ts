import { Component, OnInit } from '@angular/core';
import { Experience } from '../model/experience';
import { ExperienceService } from '../service/experience.service';
import { TokenService } from '../service/token.service';

@Component({ 
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent  implements OnInit {
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

}

