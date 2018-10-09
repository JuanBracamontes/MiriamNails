
import { Injectable } from '@angular/core';
import {AlertController} from "ionic-angular";

@Injectable()
export class AlertServiceProvider {

  constructor(public alertCtrl:AlertController) {
  }


  sendAlert(titulo:any, mensaje:any){
    let alerta = this.alertCtrl.create({
      title:titulo,
      subTitle:mensaje,
      buttons:['OK']
    });
    alerta.present();
  }

}
