import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../../services/Auth/auth-service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.scss'],
})
export class Auth {
  isRegister = true;

  constructor(public authService: AuthService) {}

  registerationForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
    ]),
  });

  logInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  handleRegister() {
    console.log('Register form submitted', this.registerationForm.value);
    this.authService.register(this.registerationForm.value).subscribe({
      next: (res) => {
        localStorage.setItem('jwt', res.jwt);
        this.authService.getUserProfile().subscribe();
        console.log('Registration successful', res);
      }
    });
  }

  handleLogin() {
    console.log('Login form submitted', this.logInForm.value);
    this.authService.login(this.logInForm.value).subscribe({
      next: (res) => {
        localStorage.setItem('jwt', res.jwt);
        this.authService.getUserProfile().subscribe();
        console.log('Login successful', res);
      }
    });
  }
}
