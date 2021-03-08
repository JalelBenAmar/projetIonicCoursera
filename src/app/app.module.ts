import { PromotionService } from './services/promotion.service';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { LeaderService } from './services/leader.service';
import { DishService } from './services/dish.service';
import { BaseURL } from './../shared/baseurl';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePage } from './pages/home/home.page';
import { MenuPage } from './pages/menu/menu.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DishdetailPage } from './pages/dishdetail/dishdetail.page';
  

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AboutPage,
    ContactPage,
    MenuPage,
    DishdetailPage,
  ],
  entryComponents: [
    HomePage,
    AboutPage,
    ContactPage,
    MenuPage,
    DishdetailPage,
  ],
  imports: [
    BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
  ],
  providers: [
    DishService,
    LeaderService,
    ProcessHttpmsgService,
    PromotionService,
    NavParams,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
