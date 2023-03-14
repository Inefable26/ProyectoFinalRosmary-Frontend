import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.css']
})
export class SocialNetworksComponent implements OnInit {
  isLogged =false;

constructor(private tokenService:TokenService) {}

ngOnInit(): void {
  if(this.tokenService.getToken()){
    this.isLogged=true;
  }else {
    this.isLogged = false;
  }
}


}
