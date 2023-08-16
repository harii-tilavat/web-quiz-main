import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: '', component: AuthComponent,
  }
]

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AuthModule { }
