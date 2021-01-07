import { Component, OnInit } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { environment } from 'src/environments/environment';
import { CartItemsModel } from '../../models/cart-items-model';
import { Product } from '../../models/product';
import { MessageService } from '../../services/message.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItemsModel[]= [];
  total = 0;

  public payPalConfig ? : IPayPalConfig;

  constructor(
    private messageService: MessageService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {

    // if(this.storageService.existsCart()) {
    //   this.cartItems = this.storageService.getCart();
    // }
    this.initConfig();
    this.getItem();
    this.total = this.getTotal();
  }

  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: environment.clientId,
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: '9.99',
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: '9.99'
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: '9.99',
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details: any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);

        },
        onError: err => {
            console.log('OnError', err);
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        },
    };
}

  getItem(): void {
    this.messageService.getMessage().subscribe((product: Product) => {

      let exists = false;
      this.cartItems.forEach(item => {
        if(item.productId === product.id){
          exists = true;
          item.qty++;
        }
      });
      if(!exists){
      const cartItem =  new CartItemsModel(product);
      this.cartItems.push( cartItem)
    }
    this.total = this.getTotal();
    this.storageService.setCart(this.cartItems);
    });
  }

  getTotal(): number{
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.qty * item.productPrice;
    });
    return  +total.toFixed(2);
  }

  emptyCart(): void {
    this.cartItems = [];
    this.total = 0;
    this.storageService.clear();
  }

  deleteItem(i: number): void {
    if(this.cartItems[i].qty > 1){
      this.cartItems[i].qty --;
    }else{
    this.cartItems.splice(i,1);
  }
  this.total = this.getTotal();
  this.storageService.setCart(this.cartItems);
  }

}
