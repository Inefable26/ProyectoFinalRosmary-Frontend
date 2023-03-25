import { Component } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  personas: persona[] = [];  //nombre del model//

  constructor (private impPersonaService: PersonaService, private tokenService:TokenService) {} //el del service//

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarpersona();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;  //validando conexión//
    }

  }

  cargarpersona(): void {
    this.impPersonaService.getPersonas()
      .subscribe(personas => {
        console.log('Personas obtenidas:', personas);
        if (personas.length > 0) {
          this.personas = personas;
        }
      });
  }

  

}
