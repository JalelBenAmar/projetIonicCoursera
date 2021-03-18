import { NavController, ModalController } from '@ionic/angular';
import { HomePage } from './pages/home/home.page';
import { MenuPage } from './pages/menu/menu.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';

import { Component, ViewChild } from '@angular/core';
import { ReservationPage } from './pages/reservation/reservation.page';
import { LoginPage } from './pages/login/login.page';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage: any = HomePage;
  public appPages = [
    { title: 'Home', icon:'home', url: '/home' },
    { title: 'About', icon:'information-circle', url: '/about' },
    { title: 'Menu', icon:'apps', url: '/menu' },
    { title: 'Contact Us', icon:'apps', url: '/contact' },
    { title: 'My Favorites', icon:'heart', url: '/favorites' },
  ];
  constructor(private navCntrll:NavController,
    private modalController: ModalController) {}

  openPage(page){
    this.navCntrll.navigateRoot(page.url);
  }

  async openReserve() {
    const modal = await this.modalController.create({
      component: ReservationPage,
    });
    return await modal.present();
  }

  async openLogin(){
    const modal = await this.modalController.create({
      component: LoginPage,
    });
    return await modal.present();
  }

}
