import { NavController, ModalController, Platform, LoadingController } from '@ionic/angular';
import { HomePage } from './pages/home/home.page';
import { MenuPage } from './pages/menu/menu.page';
import { ContactPage } from './pages/contact/contact.page';
import { AboutPage } from './pages/about/about.page';

import { Component, ViewChild } from '@angular/core';
import { ReservationPage } from './pages/reservation/reservation.page';
import { LoginPage } from './pages/login/login.page';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage: any = HomePage;
  loading: any=null;
  public appPages = [
    { title: 'Home', icon: 'home', url: '/home' },
    { title: 'About', icon: 'information-circle', url: '/about' },
    { title: 'Menu', icon: 'apps', url: '/menu' },
    { title: 'Contact Us', icon: 'apps', url: '/contact' },
    { title: 'My Favorites', icon: 'heart', url: '/favorites' },
  ];
  constructor(private navCntrll: NavController,
    private modalController: ModalController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private platform: Platform,
    private loadingControll: LoadingController,
    private network: Network) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.network.onDisconnect()
      .subscribe(() => {
        if(!this.loading){
          this.loading = this.loadingControll.create({
            message:'Network Disconnected'
          });
          this.loading.present();
        }
      });
      
      this.network.onConnect()
      .subscribe(()=>{
        setTimeout(() => {
          if(this.network.type === 'wifi'){
            console.log("We got a wifi connection");
          }
        }, 3000);
        if(this.loading){
          this.loading.dismiss();
          this.loading =null;
        }
      });
    });
  }

  openPage(page) {
    this.navCntrll.navigateRoot(page.url);
  }

  async openReserve() {
    const modal = await this.modalController.create({
      component: ReservationPage,
    });
    return await modal.present();
  }

  async openLogin() {
    const modal = await this.modalController.create({
      component: LoginPage,
    });
    return await modal.present();
  }

}
