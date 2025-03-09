import { Component, output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Signup } from '../../../models/signup.model';
import { passwordMatchValidator } from '../../utils/passwordMatchValidator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  imports: [],
})
export class SignupFormComponent {
  formData = output<Signup>();
  fb = new FormBuilder();

  signupForm = this.fb.nonNullable.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordMatchValidator }
  );
}
