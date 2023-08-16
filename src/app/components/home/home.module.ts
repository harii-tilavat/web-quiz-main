import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProductComponent } from 'src/app/shared/add-product/add-product.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'product-list', component: ProductListComponent },
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
