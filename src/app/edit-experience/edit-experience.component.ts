import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experience } from '../model/experience';
import { ExperienceService } from '../service/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
  puesto: string= '';
  organizacion: string= '';
  ano: string= '';
  url_logo: string= '';
  experience : Experience = null;

  constructor(private impExperienceService: ExperienceService, private activatedRouter: ActivatedRoute) {}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    
    this.impExperienceService.detail(id).subscribe ({
      next:(data) => {
        this.experience =data;
      },error:(err) => {
        alert ("Falló");
      }});
  }

  onCreate(): void {
    const experience = new Experience(this.puesto, this.organizacion, this.ano, this.url_logo);
    this.impExperienceService.save(experience).subscribe({
      next:(data) => {
        alert ('Nueva Experiencia añadida');
      },error:(err) => {
        alert('Falló');
  }});
}


  onUpdate(): void {
    const id = this.experience.id;
    this.impExperienceService.update (id,this.experience).subscribe ({
      next:(data) => {
        alert ('Experiencia editada');
      },error:(err) => {
        alert ('Falló');
  }});
  }
}
