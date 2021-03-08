import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { FavoriteService } from 'src/app/services/favorite.service';
import { BaseURL } from 'src/shared/baseurl';
import { Dish } from 'src/shared/dish';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage{
  favorites: Dish[];
  errMess: string;
  baseURL: string;

  constructor(private favoriteService: FavoriteService) {
    this.baseURL = BaseURL;
  }

  ionViewDidEnter() {
    this.favorites = this.favoriteService.getFavorites();
  }

  deleteFavorite(item: IonItemSliding, favoris: Dish){
    this.favorites = this.favorites.filter(el => el.id != favoris.id);
    this.favoriteService.removeFavorite(favoris);
    item.close();
  }

}
