import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {User} from '../model/User';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  login: any ="";
  password:any="";

  constructor(private authService: AuthService,private router: Router) {
  }

  ngOnInit(): void {
  }

  submit():any{

    this.authService.login(this.login, this.password).subscribe(
      (userInfo:any)=>{
        this.authService.connectedUser = userInfo.user;
        this.router.navigate(['/Books']);
      },
      (error)=>{
        console.log("error",error)
      }
    )
  }

}
