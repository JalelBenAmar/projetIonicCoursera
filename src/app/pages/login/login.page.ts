import { RegisterPage } from './../register/register.page';
import { Dish } from './../../../shared/dish';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { User } from 'src/shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  user: User = { username: '', password: '' };
  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private storage: Storage,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });

    storage.get('user').then(user => {
      if (user) {
        this.user = user;
        this.loginForm
          .patchValue({
            'username': this.user.username,
            'password': this.user.password,
          });
      } else {
        console.log('user not defined');
      }
    });
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

  onSubmit(){
    if(this.loginForm.get('remember').value){
      this.storage.set('user',this.user);
    } else{
      this.storage.remove('user');
    }
    this.dismiss();
  }

  async openRegister(){
    const modal = await this.modalController.create({
      component: RegisterPage,
    });
    this.dismiss();
    return await modal.present();
  }

}
