import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-produt-list',
  templateUrl: './produt-list.component.html',
  styleUrls: ['./produt-list.component.css']
})
export class ProdutListComponent implements OnInit {

  products: Product [] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productService.getProducts()
  }

}
