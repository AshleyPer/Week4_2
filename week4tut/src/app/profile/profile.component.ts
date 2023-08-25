import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

import { Userpwd } from '../userpwd';
import { UserobjEdit } from '../userobjEdit';

const BACKEND_URL = "http://localhost:3000";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit{
  password = '';

  userid = sessionStorage.getItem("userid");
  username = sessionStorage.getItem("username");
  actualUsername = sessionStorage.getItem("username");
  email = sessionStorage.getItem("email");
  birthdate = sessionStorage.getItem("userbirthdate");
  userage = sessionStorage.getItem("userage");
  
  userpwd: Userpwd = {username : '', pwd : ''};
  userobj: UserobjEdit = {userid : 1, actualUserName: '', username : '', password : '', email: '', userbirthdate: '', userage: 0};

  constructor(private router: Router, private httpClient: HttpClient, private authService: AuthService){}
  ngOnInit(): void {
    if(this.username == null){
      this.router.navigateByUrl('login');
    }
  }
  
  editFunc(){
    this.userpwd = {username : this.username!, pwd : this.password};
    this.userobj = {userid : 1, actualUserName: this.actualUsername!, username : this.userpwd.username, password : this.userpwd.pwd, email: this.email!, userbirthdate: this.birthdate!, userage: parseInt(this.userage!)};
    //console.log(this.userobj);
    this.httpClient.post(BACKEND_URL + '/api/editdetails', this.userobj, httpOptions)
    .subscribe((data: any) =>{
      if(data.ok){
        //console.log('data=',data.age);
        sessionStorage.setItem('userid', this.userid!);
        sessionStorage.setItem('username', this.username!);
        sessionStorage.setItem('email', this.email!);
        sessionStorage.setItem('userbirthdate', this.birthdate!);
        sessionStorage.setItem('userage', this.userage!);
        sessionStorage.setItem('valid', 'true');
        this.authService.setLoggedIn(true);
        this.router.navigateByUrl('account');
      }else{
        alert("Sorry, there was an error processing your request.");
      }
    })
  }

}
