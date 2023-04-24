import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-delete-header',
  templateUrl: './delete-header.component.html',
  styleUrls: ['./delete-header.component.css']
})
export class DeleteHeaderComponent {

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
