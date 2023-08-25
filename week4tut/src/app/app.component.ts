import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'week4tut';
  loggedOut: boolean;

  constructor(private router: Router, private authService: AuthService){
    this.loggedOut = true;
  }
  ngOnInit(): void {
    console.log("Testing if DOM is ready");
    this.authService.isLoggedIn.subscribe((isLoggedIn) => {
      this.loggedOut = !isLoggedIn;
    });

    console.log(this.loggedOut)

  }

  logoutFunc(){
    sessionStorage.removeItem("userid");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userbirthdate");
    sessionStorage.removeItem("userage");
    sessionStorage.removeItem("valid");

    this.authService.setLoggedIn(false);

    this.router.navigateByUrl('login');
  }
}
