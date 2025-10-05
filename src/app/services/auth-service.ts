import { inject, Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export type User = {
  empId: string;
  scopes: ('canBook' | 'canAdd')[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private _user: User | undefined;
  public get user(): User | undefined {
    return this._user || undefined;
  }
  getIsLoggedIn() {
    return this.isLoggedIn.asObservable();
  }
  
  login(value: User) {
    this._user = value;
    this.isLoggedIn.next(true);
  }
  logout() {
    this._user = undefined;
    this.isLoggedIn.next(false);

    this.router.navigate(['/login']);
  }
}

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    return this.auth.user 
      ? true 
      : this.router.parseUrl('/login');
  }
}