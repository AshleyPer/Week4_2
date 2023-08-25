import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

import { Userpwd } from '../userpwd';
import { UserobjSignUp } from '../userobjSignUp';

const BACKEND_URL = "http://localhost:3000";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  username:string = '';
  password:string = '';
  email: string = '';
  userbirthdate: string = '';
  userage: number = 0;

  userpwd: Userpwd = {username : '', pwd : ''};
  userobj: UserobjSignUp = {userid : 1, username : '', password : '', email: '', userbirthdate: '', userage: 0};
  
  signupFail: Boolean;

  constructor(private router: Router, private httpClient: HttpClient, private authService: AuthService){
    this.signupFail = false;
  }

  public signUpFunc(){
    this.userpwd = {username : this.username, pwd : this.password};
    this.userobj = {userid : 1, username : this.userpwd.username, password : this.userpwd.pwd, email: this.email, userbirthdate: this.userbirthdate, userage: this.userage};
    console.log(this.userobj);
    this.httpClient.post(BACKEND_URL + '/api/signup', this.userobj, httpOptions)
    .subscribe((data: any) =>{
      if(data.ok){
        console.log('data=',data.age);
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('userbirthdate', data.birthdate);
        sessionStorage.setItem('userage', data.age);
        sessionStorage.setItem('valid', data.valid);
        this.authService.setLoggedIn(true);
        this.router.navigateByUrl('account');
      }else{
        this.signupFail = true;
      }
    })
  }
}
