import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.authService.logout().subscribe(response => {
      console.log('Logout successful', response);
      this.router.navigateByUrl('/');
    }, error => {
      console.error('Logout failed', error);
    });
  }

}
