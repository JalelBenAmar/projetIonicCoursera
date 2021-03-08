import { BaseURL } from './../../../shared/baseurl';
import { LeaderService } from './../../services/leader.service';
import { DishService } from './../../services/dish.service';
import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PromotionService } from 'src/app/services/promotion.service';
import { Dish } from 'src/shared/dish';
import { Leader } from 'src/shared/leader';
import { Promotion } from 'src/shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;
  baseURL: string;
  
  constructor(
    public navCtrl: NavController,
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
  ) {
    this.baseURL = BaseURL;
  }

  ngOnInit(){
    this.getAllFeaturedDish();
    this.getAllFeaturedPromotion();
    this.getAllFeaturedLeader();
  }

  getAllFeaturedDish() {
    this.dishService.getFeaturedDish().subscribe(
      (data) =>{
        this.dish = data['0'];
      }, error => {
        this.dishErrMess = error;
      }
    );
  }
  getAllFeaturedPromotion() {
    this.promotionService.getFeaturedPromotion().subscribe(
      (data) =>{
        this.promotion = data['0'];
      }, error => {
        this.promoErrMess = error;
      }
    );
  }
  getAllFeaturedLeader() {
    this.leaderService.getFeaturedLeader().subscribe(
      (data) =>{
        this.leader = data['0'];
      }, error => {
        this.leaderErrMess = error;
      }
    );
  }

}
