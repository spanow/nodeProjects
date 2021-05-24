import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book.model";
import {BooksServiceService} from "../service/books-service.service";
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.css']
})
export class NewBooksComponent implements OnInit {
  public book:any;
  public mode:number=0;
  constructor(private booksService:BooksServiceService, private  router: Router, private authService: AuthService) {
}

ngOnInit(): void {
  if(this.authService.connectedUser == null){
  this.router.navigate(['/']);
}
   this.onNewBook()
  }

  private initBook() {
    this.book={title:"",author:"",price:0,genre:"",quantity:0,available:false};
  }

  onSaveBook(data:Book){
    this.booksService.saveRessources(this.booksService.host+"/books",data)
      .subscribe(res=>{
        this.book=res;
        this.mode=1;
      },error => console.log(error));
  }

  onNewBook(){
    this.initBook();
    this.mode=0;
  }

}
