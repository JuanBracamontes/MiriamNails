import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

import {AngularFireDatabase} from '@angular/fire/database'

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viwCtrl:ViewController,
              private db:AngularFireDatabase) {
  }

  closeModal(){
    this.viwCtrl.dismiss();
  }

  registerUser(){
    debugger;
    let user = 'admin';
    let pwd = 'admin';
    let usr = {
      usuario:user,
      contra:pwd
    };
    this.db.list('usuarios/').set(
      usr.usuario,
      {
        usuario:usr.usuario,
        contraseña:usr.contra
      }
    );
  }

}
