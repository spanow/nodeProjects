import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  logout():void{
    this.authService.logout().subscribe(
      ()=>{
        this.authService.connectedUser=null;
        this.router.navigate(['/']);

      },
      (error => {
        this.authService.connectedUser=null;
        this.router.navigate(['/']);

      })
    )
  }
}
