import { Component, ViewChild } from '@angular/core';
import { Platform , MenuController, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";
import {FirebaseProvider} from "../providers/firebase/firebase";
import {HomePage} from "../pages/home/home";
import {Storage} from "@ionic/storage";
import {LevantarCitaPage} from "../pages/levantar-cita/levantar-cita";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  LevantarCita:any = LevantarCitaPage;
  LoginP:any = LoginPage;
  HomeP:any = HomePage;
  rootPage:any;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl:MenuController,
    private firebaseService:FirebaseProvider,
    private storage:Storage
  ) {
    platform.ready().then(() => {
      this.firebaseService.cargarStorage().then((usuarioLogeado:any)=>{
          statusBar.styleDefault();
          splashScreen.hide();
          if(usuarioLogeado){
            this.rootPage = HomePage;
            this.menuCtrl.enable(true,'sideMenu');
          }else{
            this.rootPage = LoginPage;
            this.menuCtrl.enable(false,'sideMenu');
          }
      })

    });
  }

  endSesion(Page:any){
    this.nav.setRoot(Page);
    this.storage.remove('clave');
    localStorage.clear();
    this.menuCtrl.close();
  }

  goToPage(Page:any){
    this.nav.setRoot(Page);
    this.menuCtrl.close();
  }


}
