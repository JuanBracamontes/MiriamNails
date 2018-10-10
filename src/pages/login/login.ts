import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {RegistroPage} from "../registro/registro";
import {GlobalProvider} from "../../providers/global/global";
import {AlertServiceProvider} from "../../providers/alert-service/alert-service";
import {FirebaseProvider} from "../../providers/firebase/firebase";
import {HomePage} from "../home/home";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:string;
  pwd:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController,
              private _GS:GlobalProvider,
              private _alertService:AlertServiceProvider,
              private _dbService:FirebaseProvider) {

  }

  goToRegister(){
      let modal = this.modalCtrl.create(RegistroPage);

      modal.present();
  }

  validateFields(){
    if(this._GS.checkEmptyFields(this.usuario)){
        this._alertService.sendAlert('Campo vacio','Llene el campo Usuario');
    }else if(this._GS.checkEmptyFields(this.pwd)){
        this._alertService.sendAlert('Campo vacio','Llene el campo contraseña');
    }else{
      let usr = {
        usuario:this.usuario,
        contraseña:this.pwd
      };
      this._dbService.loginUser(usr).then((resolve:any)=>{
        this.navCtrl.setRoot(HomePage);
      }).catch((rejected:any)=>{
        this._alertService.sendAlert('Error al iniciar sesion', rejected);
      })
    }
  }

}
