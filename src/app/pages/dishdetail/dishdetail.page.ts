import { FavoriteService } from './../../services/favorite.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, NavController, NavParams, ToastController, ModalController } from '@ionic/angular';
import { DishService } from 'src/app/services/dish.service';
import { BaseURL } from 'src/shared/baseurl';
import { Dish } from 'src/shared/dish';
import { Location } from "@angular/common";
import { CommentPage } from '../comment/comment.page';
import { Storage } from '@ionic/storage';

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
    private favoriteService: FavoriteService,
    private toastController: ToastController,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private storage: Storage,
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
    this.storage.get('favorites').then(favorites => {
      if (favorites) {
        let favoriteList: Dish[] = JSON.parse(favorites);
        if(favoriteList.find(el => el.id == this.dish.id)){
          this.favorite=true;
        }
      }
    });
  }

  addToFavorites() {
    this.storage.get('favorites').then(favorites => {
      if (favorites) {
        let favoriteList: Dish[] = JSON.parse(favorites);
        favoriteList.push(this.dish);
        this.storage.set('favorites', JSON.stringify(favoriteList));
      } else {
        let favoriteList: Dish[] = [];
        favoriteList.push(this.dish)
        this.storage.set('favorites', JSON.stringify(favoriteList));
      }
      this.favorite = true;
      this.presentToast("Dish " + this.dish.id + " added as a favorite successfuly");
    });
  }

  removeFromFavorites() {
    this.storage.get('favorites').then(favorites => {
      if (favorites) {
        let favoriteList: Dish[] = JSON.parse(favorites);
        favoriteList = favoriteList.filter(el => el.id != this.dish.id);
        this.storage.set('favorites', JSON.stringify(favoriteList));
      } 
      this.favorite = false;
      this.presentToast("Dish " + this.dish.id + " removed from favorite successfuly");
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'middle',
      duration: 1500
    });
    toast.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Actions',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Add to Favorites',
          handler: () => {
            this.addToFavorites();
          }
        }, {
          text: 'Add Comment',
          handler: () => {
            this.openCommentModals();
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  async openCommentModals() {
    const modal = await this.modalController.create({
      component: CommentPage,
    });
    modal.onWillDismiss().then(dataReturned => {
      this.dish.comments.push(dataReturned['comment']);
    });
    return await modal.present();
  }

}
