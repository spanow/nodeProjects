import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  login: any ="";
  email:any="";
  password:any="";

  constructor(private authService: AuthService,private router: Router) {
  }

  ngOnInit(): void {
  }
  submit():any{

    this.authService.register(this.login, this.password, this.email).subscribe(
      (userInfo:any)=>{
        this.authService.connectedUser = userInfo.createdUser;
        this.router.navigate(['/Books']);
      },
      (error)=>{
        console.log("error",error)
      }
    )
  }
}
