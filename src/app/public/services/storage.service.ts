import { Injectable } from '@angular/core';
import { CartItemsModel } from '../models/cart-items-model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  existsCart(): boolean {
    return localStorage.getItem('cart') != null;
  }

  setCart(cart: CartItemsModel[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

// getCart(): CartItemsModel[] {

//   return  localStorage.getItem('cart');
// }  
  

  clear(): void {
    localStorage.removeItem('cart');
  }
}
