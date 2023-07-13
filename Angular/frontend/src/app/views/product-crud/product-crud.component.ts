import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit{

  constructor(private router: Router){
    //uma vez colocado no construtor, o router já fica disponível através do this

  }

  ngOnInit(): void {
      
  }

  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}
