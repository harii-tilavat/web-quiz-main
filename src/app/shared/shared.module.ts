import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    AddProductComponent
  ]
})
export class SharedModule { }
