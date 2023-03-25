import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';


@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})

export class EditAboutComponent implements OnInit{

  form: FormGroup;
  nombre: string = '';
  apellido: string = '';
  img: string = '';
  nombredescrip: string = '';
  descripcion: string = '';
  persona: persona | undefined;
  personas: persona[] = [];

     

  constructor(private formBuilder:FormBuilder, private iPersonaService: PersonaService) 
  { 

    //Esto es para el formulario!!!
    this.form= this.formBuilder.group({
    nombre: ['',[Validators.required]],
    apellido: ['',[Validators.required]],
    img: [''],
    nombredescrip: [''],
    desrip: [''],

    });
  }
  
  ngOnInit(): void {
    this.cargarpersonas();
  }

  get Nombre (){
    return this.form.get('nombre');
  }

  get Apellido (){
    return this.form.get('apellido');
  }

  get NombreValid (){
    return this.Nombre.touched && !this.Nombre.valid;
  }

  get ApellidoValid (){
    return this.Apellido.touched && !this.Apellido.valid;
  }



  onCreate(): void {
    this.iPersonaService.createPersona(this.persona)
      .subscribe(response => {
        console.log('Persona creada:', response);
        // Lógica adicional después de crear la persona
      });
  }

  onEdit(): void {
    const id = this.persona?.id;
    const nombre = this.form.get('nombre')?.value;
    const apellido = this.form.get('apellido')?.value;
    const img = this.form.get('img')?.value;
    const nombredescrip = this.form.get('nombredescrip')?.value;
    const descripcion = this.form.get('desrip')?.value;
    
    if (id && nombre && apellido && img && nombredescrip && descripcion) {
      this.iPersonaService.editPersona(id, nombre, apellido, img, nombredescrip, descripcion)
        .subscribe(persona => {
          this.persona = persona;
          console.log('Persona editada:', this.persona);
        });
    }
  }

  
cargarpersonas(): void {
  this.iPersonaService.getPersonas()
    .subscribe(personas => {
      console.log('Personas obtenidas:', personas);
      this.personas= personas;
    });
}

onDelete(id: number): void {
  if (confirm('¿Estás seguro que deseas eliminar esta persona?')) {
    this.iPersonaService.deletePersona(id)
      .subscribe(() => {
        console.log('Persona eliminada:', id);
        this.cargarpersonas();
      });
  }
}

limpiar(): void{
  this.form.reset();
}

onEnviar (event:Event){  //Valida si está todo bien y marca lo que falte o esté mal//
  event.preventDefault();
  if (this.form.valid){
   this.onCreate();
  }else{
  alert("No cargó");
  this.form.markAllAsTouched();
}
}

onSelect(event: any) {
  this.iPersonaService.getPersonas().subscribe(persona => {
    this.persona = persona[0];
  });

}}
