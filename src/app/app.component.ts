import { HomePage } from './pages/home/home.page';
import { MenuPage } from './pages/menu/menu.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', icon:'home', url: "/home" },
    { title: 'About', icon:'information-circle', url: "about" },
    { title: 'Menu', icon:'apps', url: "menu" },
    { title: 'Contact', icon:'contacts', url: "contact" },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}


}
