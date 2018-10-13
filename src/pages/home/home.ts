import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private menuCtrl:MenuController) {
    this.menuCtrl.enable(true,'sideMenu');
  }

}
