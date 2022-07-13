import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundImageSlidesComponent } from './components/background-image-slides/background-image-slides.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { UsercartComponent } from './pages/usercart/usercart.component';
import { CartItemsCheckoutComponent } from './components/cart-items-checkout/cart-items-checkout.component';
import { CheckoutTotalCartComponent } from './components/checkout-total-cart/checkout-total-cart.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundImageSlidesComponent,
    HomeComponent,
    ProductCardsComponent,
    UsercartComponent,
    CartItemsCheckoutComponent,
    CheckoutTotalCartComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
