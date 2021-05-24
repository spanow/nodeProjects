import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BooksServiceService} from "../service/books-service.service";
import {Book} from "../model/book.model";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  public currentBook!: Book;
  public url!: string;


  constructor(private router:Router,private activatedRoute:ActivatedRoute,private booksService:BooksServiceService) { }

  ngOnInit(): void {

   this.url=atob(this.activatedRoute.snapshot.params.id);
    console.log(this.url)
    this.booksService.getRessources(this.url)
      .subscribe(data=>{
        this.currentBook=data;
      },error => {
        console.log(error);
      });
  }

  onEditBook(value: any) {
  this.booksService.updateResource(this.url,value)
    .subscribe(data=>{
      alert('Miser a jour  effectué avec succés');
      this.router.navigateByUrl('/Books');
    },error => {
      console.log(error);
    });
  }
}
