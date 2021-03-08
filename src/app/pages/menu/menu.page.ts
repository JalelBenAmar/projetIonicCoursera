import { DishdetailPage } from './../dishdetail/dishdetail.page';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { DishService } from 'src/app/services/dish.service';
import { BaseURL } from 'src/shared/baseurl';
import { Dish } from 'src/shared/dish';
import { NavigationExtras } from '@angular/router';
import { FavoriteService } from './../../services/favorite.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  dishes: Dish[];
  dishErrMess: any;
  baseURL: any;

  constructor(
    private navCtrl: NavController,
    private navParam: NavParams,
    private dishService: DishService,
    private favoriteService: FavoriteService
  ) { 
    this.baseURL = BaseURL;
  }

  ngOnInit() {
    this.getAllDishes();
  }

  getAllDishes(){
    this.dishService.getDishes().subscribe(
      (data) =>{
        this.dishes = data;
      }, error => {
        this.dishErrMess = error;
      }
    );
  }

  dishSelected(event, dish){
    this.navCtrl.navigateForward(['/dishdetail'],{ state: { dish: dish } });
  }

  addToFavorites(dish: Dish){
    this.favoriteService.addFavorite(dish);
  }

}
