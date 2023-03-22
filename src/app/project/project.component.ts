import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../service/project.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent  implements OnInit {
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

}
