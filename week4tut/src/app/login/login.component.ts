import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
users = [{username: "ash@hotmail.com", password: "1234"},{username: "test@ha.com", password: "123"},{username: "frame@work.com", password: "soft"}]
  username = '';
  password = '';
  failed = false;

  constructor(private router: Router){}

  logIn(){
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].username == this.username && this.users[i].password == this.password){
        this.router.navigateByUrl('/account');
      }
    }
    this.failed = true;
  }
}
