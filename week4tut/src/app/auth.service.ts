import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    // Initialize the login state based on sessionStorage
    this.loggedInSubject.next(sessionStorage.getItem("username") !== null);
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  setLoggedIn(value: boolean) {
    this.loggedInSubject.next(value);
  }
}
