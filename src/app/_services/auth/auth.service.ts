import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserModel } from 'src/app/_model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public user = new BehaviorSubject<UserModel | null>(null);
  public loginData = [
    { username: 'admin', password: 'admin123' },
    { username: 'harit', password: '111111' },
  ]
  constructor() { }
  authentication(authData: UserModel): any {
    const user = this.loginData.find(i => i.username === authData.username && i.password === authData.password)!;
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
