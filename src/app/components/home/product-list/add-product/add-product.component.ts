import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductModel } from 'src/app/_model';
import { ProductListService } from 'src/app/_services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public productForm!: FormGroup;
  public submitted!: boolean;
  public success!: boolean;
  public editMode: boolean = false;
  public editedProductId!: number;
  public editedItem!: ProductModel;
  constructor(private productListService : ProductListService, private snakeBar: MatSnackBar) { }
  ngOnInit(): void {
    this.initForm();
    this.productListService.startedEditing.subscribe({
      next: (id: number | null) => {
        if (id) {
          this.editedProductId = id;
          this.editMode = true;
          this.editedItem = this.productListService.getProduct(id);
          this.initForm();
          return;
        }
        this.editMode=false;
        this.initForm();
      }
    })
  }
  onSave(): void {
    this.submitted = true;
    if (this.productForm.valid) {
      if (this.editMode) {
        this.productListService.updateProduct(this.editedProductId, this.productForm.value);
        this.snakeBar.open('Product Updated Successfuly! ', 'Ok', { duration: 3000 });
      } else {
        this.productListService.addProduct(this.productForm.value);
        this.snakeBar.open('Product Added Successfuly! ', 'Ok', { duration: 3000 });
        this.success = true;
        this.onClose();
      }
    }
    return;
  }
  onClose(): void {
    this.productForm.reset();
    this.submitted = false;
    this.success = false;
    this.editMode = false;
  }
  private initForm(): void {
    let productTitle!: string;
    let productSubTitle!: string;
    let productImage!: string;
    let productDesc!: string;
    if (this.editMode) {
      productTitle = this.editedItem.productTitle;
      productSubTitle = this.editedItem.productSubTitle;
      productImage = this.editedItem.productImage;
      productDesc = this.editedItem.productDesc;
    }
    this.productForm= new FormGroup({
      productTitle: new FormControl(productTitle, [Validators.required]),
      productSubTitle: new FormControl(productSubTitle, [Validators.required]),
      productImage: new FormControl(productImage, [Validators.required]),
      productDesc: new FormControl(productDesc, [Validators.required]),
    })
  }
}
