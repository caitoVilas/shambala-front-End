import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-produt-item',
  templateUrl: './produt-item.component.html',
  styleUrls: ['./produt-item.component.css']
})
export class ProdutItemComponent implements OnInit {

 @Input() product: Product

  constructor(
    private messageService: MessageService
  ) {
    this.product = new Product(0,'','',0,'');
   }

  ngOnInit(): void {
  }

  addToCart(): void {

    this.messageService.sendMessage(this.product);
  }

}
