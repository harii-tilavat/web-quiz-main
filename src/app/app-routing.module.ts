import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_services';
const routes: Routes = [
  { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
  { path: 'admin/login', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', canActivate:[AuthGuard], loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule), },
  { path: '**', redirectTo: 'admin/login', pathMatch:'full' },
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
