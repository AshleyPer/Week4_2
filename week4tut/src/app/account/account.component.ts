import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  username = sessionStorage.getItem("username");
  birthdate = sessionStorage.getItem("userbirthdate");
  userage = sessionStorage.getItem("userage");

  constructor(private router:Router){}
  
  ngOnInit(): void {
    if(this.username == null){
      this.router.navigateByUrl('login');
    }
  }
}
