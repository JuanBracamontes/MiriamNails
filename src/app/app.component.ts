import { Component, ViewChild } from '@angular/core';
import { Platform , MenuController, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  LoginP:any = LoginPage;
  rootPage:any = LoginPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl:MenuController
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  endSesion(Page:any){
    //his.rootPage = Page;
    this.nav.setRoot(Page);
    this.menuCtrl.close();
  }
}
