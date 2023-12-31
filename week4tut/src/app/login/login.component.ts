import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

import { Userpwd } from '../userpwd';
import { Userobj } from '../userobj';

const BACKEND_URL = "http://localhost:3000";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  username:string = '';
  password:string = '';
  email: string = '';
  userbirthdate: string = '';
  userage: number = 0;

  userpwd: Userpwd = {username : '', pwd : ''};
  userobj: Userobj = {userid : 1, username : '', email: '', userbirthdate: '', userage: 0};

  loginFail: Boolean;
  
  constructor(private router: Router, private httpClient: HttpClient, private authService: AuthService){
    this.loginFail = false;
  }

  ngOnInit(): void {}

  public loginFunc(){
    this.userpwd = {username : this.username, pwd : this.password};
    this.userobj = {userid : 1, username : this.userpwd.username, email: this.email, userbirthdate: this.userbirthdate, userage: this.userage};
    //console.log(this.userpwd);
    this.httpClient.post(BACKEND_URL + '/api/auth', this.userpwd, httpOptions)
    .subscribe((data: any) =>{
      //alert(JSON.stringify(this.userpwd));
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
        this.loginFail = true;
      }
    })
  }
}
