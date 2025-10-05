import { inject, Injectable } from '@angular/core';
import { Router} from '@angular/router';

export type User = {
  empId:string;
  scopes : ('canBook'|'canAdd')[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  private _user: User | undefined;
  public get user(): User| undefined {
    return this._user || undefined;
  }
  public set user(value: User) {
    this._user = value;
  }
  logout(){
    this._user = undefined;
    this.router.navigate(['/login']);
  }
}