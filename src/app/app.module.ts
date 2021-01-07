import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/components/header/header.component';
import { FooterComponent } from './public/components/footer/footer.component';
import { HomeComponent } from './public/components/home/home.component';
import { ProdutItemComponent } from './public/components/produt-item/produt-item.component';
import { ProdutListComponent } from './public/components/produt-list/produt-list.component';
import { CartComponent } from './public/components/cart/cart.component';
import { CartItemComponent } from './public/components/cart-item/cart-item.component';
import { ModalComponent } from './public/components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//  External
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProdutItemComponent,
    ProdutListComponent,
    CartComponent,
    CartItemComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPayPalModule,
    NgxSpinnerModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
