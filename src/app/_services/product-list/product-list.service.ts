import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/app/_model';
@Injectable({ providedIn: 'root' })
export class ProductListService {
  public startedEditing = new Subject<number>();
  public productChange = new Subject<ProductModel[]>();
  public productlist: ProductModel[] = [
    {
      productId: 1,
      productTitle: 'Unmoderated testing',
      productSubTitle: 'Conduct qualitative research at speed of survey',
      productDesc: 'In depth user research wtith maximum scalability and minimum time',
      productImage: '/assets/images/p1.svg'
    }
  ];
  // public usersList: UsersModel[] = [
  //   {
  //     id: 123,
  //     avtarUrl: "avatar1.jpg",
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "johndoe@example.com",
  //     lastLogin: "2023-07-14 10:30:00",
  //     role: "Admin"
  //   },
  //   {
  //     id: 456,
  //     avtarUrl: "avatar2.jpg",
  //     firstName: "Jane",
  //     lastName: "Smith",
  //     email: "janesmith@example.com",
  //     lastLogin: "2023-07-13 15:45:00",
  //     role: "User"
  //   },
  //   {
  //     id: 789,
  //     avtarUrl: "avatar3.jpg",
  //     firstName: "Michael",
  //     lastName: "Johnson",
  //     email: "michaeljohnson@example.com",
  //     lastLogin: "2023-07-12 09:15:00",
  //     role: "User"
  //   },
  //   {
  //     id: 101,
  //     avtarUrl: "avatar4.jpg",
  //     firstName: "Emily",
  //     lastName: "Brown",
  //     email: "emilybrown@example.com",
  //     lastLogin: "2023-07-11 17:20:00",
  //     role: "User"
  //   },
  //   {
  //     id: 121,
  //     avtarUrl: "avatar5.jpg",
  //     firstName: "David",
  //     lastName: "Wilson",
  //     email: "davidwilson@example.com",
  //     lastLogin: "2023-07-10 11:00:00",
  //     role: "User"
  //   },
  //   {
  //     id: 123,
  //     avtarUrl: "avatar1.jpg",
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "johndoe@example.com",
  //     lastLogin: "2023-07-14 10:30:00",
  //     role: "Admin"
  //   },
  //   {
  //     id: 456,
  //     avtarUrl: "avatar2.jpg",
  //     firstName: "Jane",
  //     lastName: "Smith",
  //     email: "janesmith@example.com",
  //     lastLogin: "2023-07-13 15:45:00",
  //     role: "User"
  //   },
  //   {
  //     id: 789,
  //     avtarUrl: "avatar3.jpg",
  //     firstName: "Michael",
  //     lastName: "Johnson",
  //     email: "michaeljohnson@example.com",
  //     lastLogin: "2023-07-12 09:15:00",
  //     role: "User"
  //   },
  //   {
  //     id: 101,
  //     avtarUrl: "avatar4.jpg",
  //     firstName: "Emily",
  //     lastName: "Brown",
  //     email: "emilybrown@example.com",
  //     lastLogin: "2023-07-11 17:20:00",
  //     role: "User"
  //   },
  //   {
  //     id: 121,
  //     avtarUrl: "avatar5.jpg",
  //     firstName: "David",
  //     lastName: "Wilson",
  //     email: "davidwilson@example.com",
  //     lastLogin: "2023-07-10 11:00:00",
  //     role: "User"
  //   }
  // ];
  constructor(private http: HttpClient) {
  }
  getProductList(): ProductModel[] {
    this.productChange.next(this.productlist.slice());
    return this.productlist.slice();
  }
  addProduct(product: ProductModel): void {
    let maxId = Math.max(...this.productlist.map(i => i.productId));
    maxId++;
    this.productlist.push({ ...product, productId: maxId });
    this.productChange.next(this.productlist.slice());
  }
  startEdit(id: number): void {
    this.startedEditing.next(id);
  }
  updateProduct(id: number, newProduct: ProductModel) {
    let updatedProduct = this.productlist.map((product) => {
      if (product.productId === id) {
        return { ...product, ...newProduct }
      } else{
        return product;
      }
    });
    this.productChange.next(updatedProduct);
  }
}
// Access to XMLHttpRequest at 'http://localhost:7268/User/CreateUser' from origin 'http://localhost:4200' has been blocked by CORS policy: Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.
