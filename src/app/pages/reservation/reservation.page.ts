import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  reservation: FormGroup;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {
    this.reservation = this.formBuilder.group({
      guests: 3,
      smoking: false,
      dateTime: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

  onSubmit(){
    console.log(this.reservation.value);
    this.dismiss();
  }

}
