import { Component } from '@angular/core';
import { HeroComponent } from './ui/hero.component';
import { CallToActionComponent } from './ui/calltoaction.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HeroComponent, CallToActionComponent],
})
export class HomeComponent {}
