import { FavoriteService } from './../../services/favorite.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { DishService } from 'src/app/services/dish.service';
import { BaseURL } from 'src/shared/baseurl';
import { Dish } from 'src/shared/dish';
import { Location } from "@angular/common";



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.page.html',
  styleUrls: ['./dishdetail.page.scss'],
})
export class DishdetailPage implements OnInit {
  dish: Dish;
  dishErrMess: any;
  baseURL: any;
  avgstars: string;
  numcomments: number;
  favorite: boolean = false;

  constructor(
    private navCtrl: NavController,
    private navParam: NavParams,
    private dishService: DishService,
    private router: Router,
    private location: Location,
    private favoriteService: FavoriteService
  ) { 
    this.baseURL = BaseURL;
    if (this.router.getCurrentNavigation().extras.state) {
      this.dish = this.router.getCurrentNavigation().extras.state.dish;
      this.favorite = this.favoriteService.isFavorite(this.dish);
    }
    this.numcomments = this.dish.comments.length;

    let total = 0;
    this.dish.comments.forEach(comment => total += comment.rating);
    this.avgstars = (total / this.numcomments).toFixed(2);
  }

  ngOnInit() {
  }

  addToFavorites(){
    this.favorite = this.favoriteService.addFavorite(this.dish);
  }
  removeFromFavorites(){
    this.favorite = this.favoriteService.removeFavorite(this.dish);
  }

}
