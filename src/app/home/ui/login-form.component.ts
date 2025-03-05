import { Component } from '@angular/core';
@Component({
  selector: `app-login-form`,
  template: `
    <div class="container">
      <div class="right-container">
        <h1>Tennis Ace</h1>
        <p>Find a tennis buddy within New York City!</p>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        height: 100vh;
        width: 40vw;
      }
      .right-container {
        background-color: #34495e;
        color: white;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .button-container {
        display: flex;
        margin-top: 1.5em;
        gap: 1em;
      }

      h1 {
        font-size: 3em;
      }
    `,
  ],
  imports: [],
})
export class LoginFormComponent {}
