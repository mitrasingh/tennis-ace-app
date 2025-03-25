import { Component } from '@angular/core';
import { HeroComponent } from '../shared/hero.component';
import { LoginFormComponent } from './ui/login-form/login-form.component';

@Component({
  selector: 'app-login',
  imports: [HeroComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
