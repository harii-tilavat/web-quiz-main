import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
  { path: 'admin/login', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: '**', redirectTo: 'admin/login' },
  // { path: '**', redirectTo: 'dashboard' }

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
