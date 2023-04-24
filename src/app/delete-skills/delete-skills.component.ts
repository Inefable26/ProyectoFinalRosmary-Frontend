import { Component } from '@angular/core';
import { Skills } from '../model/skills';
import { SkillsService } from '../service/skills.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-delete-skills',
  templateUrl: './delete-skills.component.html',
  styleUrls: ['./delete-skills.component.css']
})
export class DeleteSkillsComponent {
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
