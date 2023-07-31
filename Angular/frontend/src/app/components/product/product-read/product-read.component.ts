import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ["id", "name", "price", "actions"]

  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products => {
      //consulta os produtos no banco de dados e quando termina a consulta, atribui à variável "products"
      this.products = products
      console.log(this.products)
    })
  }

  deleteProduct(id: string): void {
    this.ProductService.delete(id).subscribe(() => {
      this.ProductService.showMessage("Produto excluído com sucesso")
      this.router.navigate(["/products"])
    })
  }
}
