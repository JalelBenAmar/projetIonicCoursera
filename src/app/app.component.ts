import { NavController } from '@ionic/angular';
import { HomePage } from './pages/home/home.page';
import { MenuPage } from './pages/menu/menu.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';

import { Component, ViewChild } from '@angular/core';



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
    { title: 'Menu', icon:'apps', url: 'menu' },
    { title: 'Contact', icon:'apps', url: 'contact' },
  ];
  constructor(private navCntrll:NavController) {}

  openPage(page){
    this.navCntrll.navigateRoot(page.url);
  }

}
