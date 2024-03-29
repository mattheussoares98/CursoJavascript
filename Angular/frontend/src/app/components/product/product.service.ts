import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "Fechar", {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
    },)
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
  
  delete(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  }
}
