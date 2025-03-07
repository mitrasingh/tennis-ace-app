import { Component, output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Signup } from '../../../models/signup.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  imports: [],
})
export class SignupFormComponent {
  formData = output<Signup>();
  fb = new FormBuilder();
}
