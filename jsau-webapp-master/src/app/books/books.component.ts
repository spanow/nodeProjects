import {Component, OnInit} from '@angular/core';
import {BooksServiceService} from "../service/books-service.service";
import {Router} from "@angular/router";
import {AuthService} from '../service/auth.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public books: any;
  public keyword!: string ;
  public url: any;

  constructor(private booksService: BooksServiceService, private  router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    if(this.authService.connectedUser == null){
      this.router.navigate(['/']);
    }
  }


  onGetBooks() {
    this.booksService.getBooks()
      .subscribe(data => {
        this.books = data;
      }, error => console.log(error));
  }


  onDeleteBook(p: any) {
    let conf = confirm("Etes vous sur de vouloir supprimer ce produit ?");
    if (conf) {
      this.booksService.deleteResource(p.links.self).subscribe(data => {
        this.onGetBooks();
      }, error => console.log(error));
    }

  }

  onEditeBook(p: any) {
    this.url =p.links.self;
    this.router.navigateByUrl("/edit-book/"+btoa(this.url));
    console.log(this.url);
  }

  onChercher(form: any) {
    this.keyword = form.keyword;
    this.chercheBooks();
  }

  chercheBooks() {
    this.booksService.searchBooks(this.keyword)
      .subscribe(data => {
        console.log(this.keyword)
        this.books = data;
      }, error => console.log(error));
  }
}
