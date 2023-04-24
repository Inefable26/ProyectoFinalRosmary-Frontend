import { Component } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-delete-about',
  templateUrl: './delete-about.component.html',
  styleUrls: ['./delete-about.component.css']
})
export class DeleteAboutComponent {
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

  onDelete(id: number): void {
    if (confirm('¿Estás seguro que deseas eliminar esta persona?')) {
      this.impPersonaService.deletePersona(id)
        .subscribe(() => {
          console.log('Persona eliminada:', id);
          this.cargarpersona();
        });
    }
  }  


}
