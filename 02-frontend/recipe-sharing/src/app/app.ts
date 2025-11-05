import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './pages/navbar/navbar';
import { Footer } from './pages/footer/footer';
import { HomePage } from './pages/home-page/home-page';
import { Auth } from './pages/auth/auth';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,Navbar,Footer,HomePage,Auth],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('recipe-sharing');
}
