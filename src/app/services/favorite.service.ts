import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favorites: Array<any>;

  constructor() {
    this.favorites = [];
  }

  addFavorite(id: number): boolean{
    this.favorites.push(id);
    return true;
  }
  removeFavorite(id: number): boolean{
    this.favorites.filter(el => el != id);
    return false;
  }

  isFavorite(id: number): boolean{
    return this.favorites.some(el => el === id);
  }
}
