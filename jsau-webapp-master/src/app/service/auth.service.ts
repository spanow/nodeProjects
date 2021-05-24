import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({providedIn: 'root'})

export class AuthService{
  connectedUser:any=null;
  constructor(private http: HttpClient) {}

  login(login: any, password: any):Observable<any> {
    return this.http.post("http://localhost:4000/api/login", {username: login, password: password}, {withCredentials: true});
  }

    logout():Observable<any>{
      return this.http.get("http://localhost:4000/api/logout",{withCredentials:true});
    }

    register(login:any, password:any, email:any): Observable<any>{
      return this.http.post("http://localhost:4000/api/register", {username:login, password:password,email: email}, {withCredentials:true});
    }

  }
