import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Saumerio Frutilla', 'paquete 10 unidades', 100,'https://santeriacastroman.com/store/wp-content/uploads/2020/07/sahumerio-triple-empaste-x50-en-bolsa-bangladesh-432b.jpg'),
    new Product(2, 'Saumerio Mirra', 'paquete 10 unidades', 100, 'https://d26lpennugtm8s.cloudfront.net/stores/001/073/171/products/sahumerio-de-mirra-natural-sagrada-madre1-2fe4e7addf16448fc815932829452262-640-0.png'),
    new Product(3, 'Saumerio Incienso', 'paquete 10 unidades', 100,'https://santeriaoriente.com/wp-content/uploads/2020/04/sahumerio-sagrada-madre-incienso-blanco.jpg'),
    new Product(4, 'Saumerio Palo Santo', 'paquete 10 unidades', 100,'https://www.mimosalalma.com.ar/wp-content/uploads/2020/06/SAHUMERIO-SAGRADA-MADRE-SANDALO-COD-9100D-145.jpg'),
    new Product(5, 'Saumerio Lavanda', 'paquete 10 unidades', 100,'https://clubcannabico.com.ar/wp-content/uploads/2020/06/sahumerios-sagrada-madre-lavanda-y-olibano.jpg'),
    new Product(6, 'Porta Saumerio Zen', 'ceramica', 170,'https://d26lpennugtm8s.cloudfront.net/stores/728/594/products/portasahumerio1-1f95dc259bf3fb237815376490432114-240-0.jpg'),
    new Product(7, ' Caja Porta Saumerio', 'madera', 250,'https://2.bp.blogspot.com/_hfY4pNT-WNo/SqwzvDdfhdI/AAAAAAAAAMQ/ls6tHsch3hA/s320/DSC08343-1.JPG'),
  ]

  constructor() { }

  getProducts() : Product[] {
    return this.products;
  }
}
