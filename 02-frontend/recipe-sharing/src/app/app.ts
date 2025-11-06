import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './pages/navbar/navbar';
import { Footer } from './pages/footer/footer';
import { HomePage } from './pages/home-page/home-page';
import { Auth } from './pages/auth/auth';
import { AuthService } from './services/Auth/auth-service';

@Component({
  selector: 'app-root',
  imports: [CommonModule,Navbar,Footer,HomePage,Auth],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('recipe-sharing');

  user:any = null;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.getUserProfile().subscribe();
    this.authService.authSubject.subscribe((data) => {
      this.user = data.user;
    });
  }
}
