import { Component } from '@angular/core';
import { HeroComponent } from './ui/hero.component';
import { LoginFormComponent } from './ui/login-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HeroComponent, LoginFormComponent],
})
export class HomeComponent {}
