import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FirebaseProvider} from "../../providers/firebase/firebase";
import {AlertServiceProvider} from "../../providers/alert-service/alert-service";
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  usuario:string;
  contra:string;
  telefono:string;
  showPass:boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viwCtrl:ViewController,
              private dbService:FirebaseProvider,
              private alertService:AlertServiceProvider) {
  }

  closeModal(){
    this.viwCtrl.dismiss();
  }

  validateFields(){

    if(this.checkEmptyFields(this.usuario)){
      this.alertService.sendAlert('Campo Vacio','Llene el campo usuario');
    }else if(this.checkEmptyFields(this.contra)){
      this.alertService.sendAlert('Campo Vacio', 'Llene el campo contraseña');
    }else if(this.checkEmptyFields(this.telefono)){
      this.alertService.sendAlert('Campo Vacio', 'Llene el campo telefono');
    }else{
      this.registerUser(this.usuario,this.contra,this.telefono)
    }

  }

  registerUser(user:any,pwd:any,tel:any){

    let usr = {
      usuario:user,
      contra:pwd,
      tel:tel
    };
    this.dbService.goToRegisterUser(usr).then((response:any)=>{
      this.alertService.sendAlert('Usuario Registrado','Ya puede iniciar sesion');
      this.usuario = '';
      this.contra = '';
      this.telefono = null;
      this.closeModal();
    }).catch((error:any)=>{
      this.alertService.sendAlert('Error al registrar',error);
    })

  }

  checkEmptyFields(campo:any){
    if(campo == "" || campo==null || campo == undefined){
        return true;
    }
  }

}
