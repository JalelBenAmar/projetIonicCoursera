import { RegisterPage } from './pages/register/register.page';
import { FavoriteService } from './services/favorite.service';
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
import { ReservationPage } from './pages/reservation/reservation.page';
import { CommentPage } from './pages/comment/comment.page';
import { LoginPage } from './pages/login/login.page';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Network } from '@ionic-native/network/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AboutPage,
    ContactPage,
    MenuPage,
    DishdetailPage,
    ReservationPage,
    CommentPage,
    LoginPage,
    RegisterPage,
  ],
  entryComponents: [
    HomePage,
    AboutPage,
    ContactPage,
    MenuPage,
    DishdetailPage,
    ReservationPage,
    CommentPage,
    LoginPage,
    RegisterPage,
  ],
  imports: [
    BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    DishService,
    LeaderService,
    ProcessHttpmsgService,
    PromotionService,
    FavoriteService,
    NavParams,
    SplashScreen,
    StatusBar,
    Camera,
    Network,
    EmailComposer,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
