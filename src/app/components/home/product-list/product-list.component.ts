import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel, UserModel } from 'src/app/_model';
import { ProductListService } from 'src/app/_services';
import { faEdit, faDeleteLeft } from 'node_modules/@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  public editButton!: any;
  public deleteButton!: any;
  public avtarUrl: string = 'https://angular.pixelstrap.com/multikart-admin/assets/images/dashboard/boy-2.png';
  public productList: ProductModel[] = [];
  public isLoading: boolean = false;
  public errorMessage!: string;
  public editedItemIndex!: string;
  constructor(private productListService: ProductListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editButton = faEdit;
    this.deleteButton = faDeleteLeft;
    this.productList = this.productListService.getProductList();
    this.productListService.productChange.subscribe({
      next: (res) => {
        console.log("Response: ", res);
        this.productList=res;
      }
    })
    // this.isLoading = true;
  }
  onAddProduct(): void {
    this.productListService.startedEditing.next(null);
  }
  onEditProduct(id:number):void{
    this.productListService.startEdit(id);
  }
  onDeleteProduct(id:number):void{
    if(confirm('Are you sure to delete this product?')){
      this.productListService.deleteProduct(id);
    }
    return;
  }
  ngOnDestroy(): void {
    this.errorMessage = '';
  }
}
