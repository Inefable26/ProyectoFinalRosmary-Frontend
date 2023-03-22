import { Component, OnInit } from '@angular/core';
import { Skills } from '../model/skills';
import { SkillsService } from '../service/skills.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']

})
export class SkillsComponent  implements OnInit {
  Hardskills: Skills[] = [];  //nombre del model//
  Softskills: Skills[] = [];
  skills: any;
 
  constructor (private impSkillsService: SkillsService, private tokenService:TokenService) {} //el del service//

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;  //validando conexión//
    }

  }

  cargarSkills(): void{
    this.impSkillsService.list().subscribe(
      data => {
        this.skills = data;
        this.Hardskills = this.skills.filter((skill: { tipo: string; }) => skill.tipo === 'Hard');
        this.Softskills = this.skills.filter ((skill: { tipo: string; })=> skill.tipo === 'Soft');
      }
    )
    
  }

}