import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {
  public host: String = "http://localhost:4000/api";

  constructor(private htppclient: HttpClient) {
  }

  public searchBooks(keyword: string): Observable<Book> {
    return this.htppclient.get<Book>(this.host + "/books/?genre=" + keyword);
  }

  getBooks() {
    return this.htppclient.get(this.host + "/books");
  }

  deleteResource(url: any) {
    return this.htppclient.delete(url);
  }

  saveRessources(url: any, data: any): Observable<Book> {
    return this.htppclient.post<Book>(this.host + "/books", data);
  }

  getRessources(url: any): Observable<Book> {
    return this.htppclient.get<Book>(url);
  }

  updateResource(url: string, value: any) {
    return this.htppclient.put(url, value);
  }
}
