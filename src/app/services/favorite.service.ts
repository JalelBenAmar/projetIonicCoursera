import { DishService } from './dish.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from 'src/shared/dish';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favorites: Array<any>;
  dishErrMess: any;

  constructor(
    private dishService: DishService
  ) {
    this.favorites = [];
  }

  addFavorite(dish: Dish): boolean {
    if (!this.isFavorite(dish)) {
      this.favorites.push(dish);
      return true;
    }
  }
  removeFavorite(dish: Dish): boolean {
    this.favorites = this.favorites.filter(el => el != dish);
    return false;
  }

  isFavorite(dish: Dish): boolean {
    return this.favorites.some(el => el.id === dish.id);
  }

  getFavorites(){
    return this.favorites;
  }

  // deleteFavorite(id: number){
  //   let index = this.favorites.indexOf(id);
  //   if(index >= 0){
  //     this.favorites.splice(index,1);
  //     return this.getFavorites();
  //   }else{
  //     console.log("Deleting non existant favorite", id);
  //   }
  // }
}
