import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserModel } from 'src/app/_model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public isAdmin = new Subject<boolean>();
  public user = new Subject<UserModel>();
  public loginData = [
    { username: 'admin', password: 'admin123' },
    { username: 'harit', password: '111111' },
  ]
  constructor() { }
  authentication(authData: UserModel): any {
    const user = this.loginData.find(i => i.username === authData.username && i.password === authData.password)!;
    this.user.next(user);
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
