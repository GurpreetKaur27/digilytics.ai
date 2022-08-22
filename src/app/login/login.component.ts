import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
username : string = '';
password : string = '';
role : string ='';
roles :string[];
  constructor() { 
    this.roles=[
      'admin',
      'teacher',
      'student'
    ]
    
  }

  ngOnInit(): void {
  }
login()
{
  console.log(this.username+" "+this.password +" "+ this.role);
}
}
