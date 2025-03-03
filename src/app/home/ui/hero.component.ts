import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <div class="container">
      <img src="tennis-ace-banner.jpg" alt="Tennis Image" />
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        height: 100vh;
        width: 50vw;
      }
      .container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `,
  ],
})
export class HeroComponent {}
