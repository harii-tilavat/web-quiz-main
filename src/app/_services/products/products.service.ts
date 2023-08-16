import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ProductModel } from 'src/app/_model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  // public productIdChange = new Subject<number>();
  public productChange = new Subject<ProductModel[]>();
  public cartProductChange = new Subject<ProductModel[]>();
  public cartProductlist:ProductModel[]=[];
  public searchQuery = new Subject<string>();
  public productList: ProductModel[] = [
    {
      productId: 1,
      productTitle: "Yellow Gadget",
      productSubTitle:'hello world',
      productDesc: "This is a cool yellow gadget. It is designed to simplify your life and make everyday tasks easier. With its innovative features and sleek design, the Yellow Gadget is a must-have for every tech enthusiast.",
      productImage: "/assets/products/p1.jpg",
    },
  ];


  // public productList: ProductModel[] = [
  //   {
  //     productId: 1,
  //     productTitle: "Yellow Gadget",
  //     productImage: "/assets/products/p1.jpg",
  //     productRating: 2,
  //     productNewPrice: 19.99,
  //     isNewItem: true
  //   },
  //   {
  //     productId: 2,
  //     productTitle: "IPhone 14",
  //     productImage: "/assets/products/p1.jpg",
  //     productRating: 3,
  //     productNewPrice: 140.99,
  //     productOldPrice: 240.99,
  //     isNewItem: false
  //   },
  //   {
  //     productId: 3,
  //     productTitle: "Green Doodad",
  //     productImage: "/assets/products/p2.jpg",
  //     productRating: 5,
  //     productNewPrice: 34.99,
  //     isNewItem: true
  //   },
  //   {
  //     productId: 4,
  //     productTitle: "Yellow Gadget",
  //     productImage: "/assets/products/p1.jpg",
  //     productRating: 2,
  //     productNewPrice: 9.99,
  //     productOldPrice: 19.99,
  //     isNewItem: false
  //   },
  //   {
  //     productId: 5,
  //     productTitle: "Purple Gizmo",
  //     productImage: "/assets/products/p2.jpg",
  //     productRating: 3,
  //     productNewPrice: 39.99,
  //     isNewItem: true
  //   },
  //   {
  //     productId: 6,
  //     productTitle: "Orange Widget",
  //     productImage: "/assets/products/p1.jpg",
  //     productRating: 1,
  //     productNewPrice: 8.99,
  //     productOldPrice: 18.99,
  //     isNewItem: false
  //   },
  //   {
  //     productId: 7,
  //     productTitle: "Pink Gadget",
  //     productImage: "/assets/products/p1.jpg",
  //     productRating: 3,
  //     productNewPrice: 19.99,
  //     productOldPrice: 29.99,
  //     isNewItem: false
  //   },
  //   {
  //     productId: 8,
  //     productTitle: "Brown Doodad",
  //     productImage: "/assets/products/p2.jpg",
  //     productRating: 5,
  //     productNewPrice: 59.99,
  //     productOldPrice: 69.99,
  //     isNewItem: false
  //   }
  // ]

  constructor() { }

  getProducts(): ProductModel[] {
    return this.productList.slice();
  }
  getProduct(id: number): ProductModel {
    return this.productList.find(i => i.productId == id)!;
  }
  addProduct(product: ProductModel): void {
    let maxId = Math.max(...this.productList.map(i => i.productId));
    maxId++;
    this.productList.push({ ...product, productId: maxId });
    this.productChange.next(this.productList.slice());
  }
  updateProduct(id: number, newProduct: ProductModel): void {
    let updateProduct = this.productList.map((product: ProductModel) => {
      if (product.productId == id) {
        return { ...product, ...newProduct };
      }
      return product;
    });
    this.productList = updateProduct;
    this.productChange.next(this.productList.slice());
  }
  deleteProduct(id: number): any {
    this.productList = this.productList.filter(i => i.productId !== id);
    this.productChange.next(this.productList.slice());
    return this.productList.slice();
  }
  addCartProduct(product:ProductModel){
    this.cartProductlist.push(product);
    this.cartProductChange.next(this.cartProductlist.slice());
  }
  getCartProducts():ProductModel[]{
    return this.cartProductlist.slice();
  }
  public initForm(editMode:boolean,editedItem:any): FormGroup {
    let productTitle!: string;
    let productImage!: string;
    let productNewPrice!: number;
    let productOldPrice!: number;
    let productRating!: number;
    let quantity: number = 1;
    let isNewItem: boolean = true;
    let productDesc!: string;
    // let productDesc!: string;
    if (editMode) {
      productTitle = editedItem.productTitle;
      productImage = editedItem.productImage;
      productNewPrice = editedItem.productNewPrice;
      productOldPrice = editedItem.productOldPrice!;
      productRating = editedItem.productRating;
      quantity = editedItem.quantity;
      isNewItem = !!editedItem.isNewItem;
      productDesc = editedItem.productDesc;
    }
    return new FormGroup({
      productTitle: new FormControl(productTitle, [Validators.required]),
      productImage: new FormControl(productImage, [Validators.required]),
      productNewPrice: new FormControl(productNewPrice, [Validators.required, Validators.pattern(/^(?:[1-9]\d*|0)?(?:\.\d+)?$/)]),
      productOldPrice: new FormControl(productOldPrice),
      productRating: new FormControl(productRating, [Validators.required]),
      quantity: new FormControl(quantity, [Validators.required, Validators.pattern(/^0*?[0-9]\d*$/)]),
      isNewItem: new FormControl(isNewItem),
      productDesc: new FormControl(productDesc, [Validators.required]),
    })
  }
}
