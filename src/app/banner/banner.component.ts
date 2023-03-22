import { Component, OnInit } from '@angular/core';
import { Banner } from '../model/banner';
import { BannerService } from '../service/banner.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent  implements OnInit {
  banner: Banner[] = [];  //nombre del model//

  constructor (private impBannerService: BannerService, private tokenService:TokenService) {} //el del service//

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarBanner();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;  //validando conexión//
    }

  }

  cargarBanner(): void{
    this.impBannerService.list().subscribe(
      data => {this.banner = data;}
    )
    
  }

}