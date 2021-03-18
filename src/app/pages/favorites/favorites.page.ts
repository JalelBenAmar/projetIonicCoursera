import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { AlertController, IonItemSliding, LoadingController, ToastController } from '@ionic/angular';
import { FavoriteService } from 'src/app/services/favorite.service';
import { BaseURL } from 'src/shared/baseurl';
import { Dish } from 'src/shared/dish';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage {
  favorites: Dish[];
  errMess: string;
  baseURL: string;

  constructor(private favoriteService: FavoriteService,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private storage: Storage,
    ) {
    this.baseURL = BaseURL;
  }

  ionViewDidEnter() {
    this.storage.get('favorites').then(favorites => {
      this.favorites = JSON.parse(favorites);
    });
  }

  // deleteFavoriteConfirmed(item: IonItemSliding, favoris: Dish) {
  //   this.presentLoading();
  //   this.favorites = this.favorites.filter(el => el.id != favoris.id);
  //   this.favoriteService.removeFavorite(favoris);
  //   this.loadingController.dismiss();
  //   this.presentToast("Dish " + favoris.id + ' deleted successfully');
  //   item.close();
  // }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Deleting...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async deleteFavorite(item: IonItemSliding, favoris: Dish) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Title!',
      message: 'Do you want to delete Favorite',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Accept',
          handler: () => {
            this.presentLoading();
            this.favorites = this.favorites.filter(el => el.id != favoris.id);
            this.storage.set('favorites',JSON.stringify(this.favorites));
            this.loadingController.dismiss();
            this.presentToast("Dish " + favoris.id + ' deleted successfully');
            item.close();
          }
        }
      ]
    });

    await alert.present();
  }

}
