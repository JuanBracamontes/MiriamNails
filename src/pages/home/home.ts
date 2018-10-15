import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {FirebaseProvider} from "../../providers/firebase/firebase";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private menuCtrl:MenuController,
              private firebaseService:FirebaseProvider,
              private navCtrl:NavController) {
    this.validateUserLogged();

  }

  validateUserLogged(){
    this.firebaseService.cargarStorage().then((usuarioLogeado:any)=>{

      if(usuarioLogeado){
        this.menuCtrl.enable(true,'sideMenu');
      }else{
        this.navCtrl.setRoot(LoginPage);
        this.menuCtrl.enable(false,'sideMenu');
      }
    })
  }
}
