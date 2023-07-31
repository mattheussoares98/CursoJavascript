import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  product!: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.productService.readById(id!).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(id: number | undefined): void {
    let idString = id!.toString()
    this.productService.delete(idString).subscribe(() => {
      this.productService.showMessage("Produto excluído com sucesso")
      this.router.navigate(["/products"])
    })
  }

  cancel(): void {
    this.router.navigate(["/products"])
  }
}
