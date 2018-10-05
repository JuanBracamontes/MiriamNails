import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {RegistroPage} from "../registro/registro";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController) {

  }

  goToRegister(){
      let modal = this.modalCtrl.create(RegistroPage);

      modal.present();
  }

}
