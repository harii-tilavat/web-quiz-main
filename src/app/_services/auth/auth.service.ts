import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserModel } from '../../_model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public user = new BehaviorSubject<UserModel | null>(null);
  public loginData = [
    { email: 'admin@gmail.com', password: 'admin123' },
    { email: 'harit@gmail.com', password: '111111' },
  ]
  constructor() { }
  authentication(authData: UserModel): any {
    const user = this.loginData.find(i => i.email === authData.email && i.password === authData.password)!;
    if (user) {
      this.user.next(user);
      localStorage.setItem('admin',JSON.stringify(user));
      return true;
    } else {
      this.user.next(null);
      return false;
    }
  }
}
