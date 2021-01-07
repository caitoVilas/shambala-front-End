import { Component, Input, OnInit } from '@angular/core';
import { CartItemsModel } from '../../models/cart-items-model';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()  cartItem: CartItemsModel;

  constructor() {
    this.cartItem = new CartItemsModel(new Product(0,'','',0,''));
   }

  ngOnInit(): void {
  }

}
