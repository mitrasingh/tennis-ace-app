import { Component } from '@angular/core';
import { SignupFormComponent } from './ui/signup-form/signup-form.component';
import { HeroComponent } from '../shared/hero.component';

@Component({
  selector: 'app-signup',
  imports: [SignupFormComponent, HeroComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {}
