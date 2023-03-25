import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Network } from '../model/network';
import { NetworkService } from '../service/network.service';

@Component({
  selector: 'app-edit-social',
  templateUrl: './edit-social.component.html',
  styleUrls: ['./edit-social.component.css']
})
export class EditSocialComponent implements OnInit{

  form: FormGroup;
  cuenta: string= '';
  url_icono_red: string= '';

  social: Network [] = [] ;

  constructor(private formBuilder:FormBuilder, private impNetworkService: NetworkService) 
  { 

    //Esto es para el formulario!!!
    this.form= this.formBuilder.group({
    cuenta: ['',[Validators.required]],
    url_icono_red: ['',[Validators.required]],
    

    })
  }
  
  ngOnInit(): void {
  
  }

  get Cuenta (){
    return this.form.get("cuenta");
  }

  get CuentaValid (){
    return this.Cuenta.touched && !this.Cuenta.valid;
  }



onCreate(): void {
  const social = new Network(this.cuenta,this.url_icono_red);
  this.impNetworkService.save(social).subscribe({
    next:(data) => {
      alert ('Nueva Red añadida');
    }});
}

  //onUpdate(): void {
  //  const id = this.social.id;
  //  this.impNetworkService.update (id,this.social).subscribe ({
  //    next:(data) => {
  //      alert ('Red editada');
  //    },error:(err) => {
  //      alert ('Falló');
  //}});
  //}

  
  cargarSocial(): void{
    this.impNetworkService.list().subscribe(
      data => {this.social = data});
    
  }

  delete (id:number){
    if(id !=undefined){
      this.impNetworkService.delete(id).subscribe(
        data=>{this.cargarSocial();
        },err=>{alert("No se eliminó")})
      
    }
  }


limpiar(): void{
  this.form.reset();
}

onEnviar (event:Event){  //Valida si está todo bien y marca lo que falte o esté mal//
  event.preventDefault;
  if (this.form.valid){
   this.onCreate();
  }else{
  alert("No cargó");
  this.form.markAllAsTouched();
}
}
}


