import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewBooksComponent} from "./new-books/new-books.component";
import {BooksComponent} from "./books/books.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path : "newBooks", component: NewBooksComponent
  },
  {
    path: "Books", component: BooksComponent
  },
  {
    path:"edit-book/:id",component: EditBookComponent
  },
  {
    path:"register", component:RegisterComponent
  },
  {
    path:"", component:LoginComponent
  },
  {
    path:"login", component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
