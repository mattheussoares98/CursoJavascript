import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productServie: ProductService,
    private router: Router,
  ) {
    //quando cria no construtor, já fica disponível pra ser utilizado no componente
  }

  product: Product = {
    name: "",
    price: 0,
  }

  ngOnInit(): void {
  }

  convertToNumber(str: string) {
    // Substitui todas as vírgulas por pontos
    str = str.replace(/,/g, '.');

    // Converte a string para um número de ponto flutuante
    const numero = parseFloat(str);

    return numero;
  }

  createProduct(): void {
    this.product.price = this.convertToNumber(this.product.price!.toString())
    this.productServie.create(this.product)
      //.subscribe notifica quando terminar de criar o produto. É como se fosse um "then"
      .subscribe()
    this.productServie.showMessage("Produto criado!")
    this.router.navigate(["/products"]).then(x => {
      this.productServie.read()
    }
    )
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

}
