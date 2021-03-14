import { Comment } from './../../../shared/comment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  comment: FormGroup;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.comment = this.formBuilder.group({
      name: ['', Validators.required],
      rating: 0,
      comment: ['', Validators.required],
      date:new Date(),
    })
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

  onSubmit(){
    this.modalController.dismiss(this.comment);
  }


}
