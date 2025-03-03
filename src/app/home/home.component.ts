import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeroComponent } from './ui/hero.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [MatButtonModule, HeroComponent],
})
export class HomeComponent {}
