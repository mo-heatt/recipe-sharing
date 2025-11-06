import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../services/Auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule,MatIconModule,MatButtonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  user: any = null;

  constructor(public authService: AuthService,private router: Router){}

  ngOnInit(){
    this.authService.authSubject.subscribe((auth) => {
      this.user = auth.user;
    });
  }

  handleLogout = () => {
    this.authService.logout();
  }

}
