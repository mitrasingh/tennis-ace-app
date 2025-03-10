import { Component, output } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Signup } from '../../../models/signup.model';
import { passwordMatchValidator } from '../../utils/passwordMatchValidator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  imports: [ReactiveFormsModule],
})
export class SignupFormComponent {
  formData = output<Signup>();
  fb = new FormBuilder();
  isSubmitted = false;

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

  // Getter to access form control easier and more readable in the template
  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  emitData(): void {
    this.isSubmitted = true;
    if (this.signupForm.valid) {
      this.formData.emit(this.signupForm.getRawValue());
    } else {
      return console.log('error');
    }
  }
}
