import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, ModalController, Nav, MenuController, App} from 'ionic-angular';
import {RegistroPage} from "../registro/registro";
import {GlobalProvider} from "../../providers/global/global";
import {AlertServiceProvider} from "../../providers/alert-service/alert-service";
import {FirebaseProvider} from "../../providers/firebase/firebase";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Nav) nav: Nav;
  usuario:string ='';
  pwd:string='';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl:ModalController,
              private _GS:GlobalProvider,
              private _alertService:AlertServiceProvider,
              private _dbService:FirebaseProvider,
              private menuCtrl:MenuController,
              private app:App) {
    //this.disableMenu();

  }

  goToRegister(){
      let modal = this.modalCtrl.create(RegistroPage);
      modal.present();
      modal.onDidDismiss(info =>{
        if(info){
            debugger;
            this.app.getRootNav().setRoot(HomePage);
            console.log(this.app.getRootNav());
        }
      })
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
        let Hp:any = HomePage;
        this.navCtrl.setRoot(Hp);
        this.usuario = '';
        this.pwd = '';
      }).catch((rejected:any)=>{
        this._alertService.sendAlert('Error al iniciar sesion', rejected);
      })
    }
  }

  disableMenu(){
    this.menuCtrl.enable(false,'sideMenu')
  }

}
