import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productServie: ProductService,
    private router: Router,
  ) { }
  //quando cria no construtor, já fica disponível pra ser utilizado no componente

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productServie.showOnConsole("teste")
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

}
