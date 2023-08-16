import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public authForm!: FormGroup;
  public submitted: boolean = false;
  isAdmin: boolean = false;
  constructor(private authService: AuthService, private snakeBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.authForm.valid) {
      this.isAdmin = this.authService.authentication(this.authForm.value);
      if (this.isAdmin) {
        this.snakeBar.open('Login Successfully! ', 'Ok', { duration: 3000 });
        this.router.navigate(['/home']);
      } else {
        this.snakeBar.open('Invalid Credentials', 'Ok', { duration: 3000 });
        this.resetForm();
      }
    }
    return;
  }
  resetForm(): void {
    this.authForm.reset();
    this.submitted = false;
  }
}
