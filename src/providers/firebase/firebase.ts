
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'
import {Platform} from "ionic-angular";
import {Storage} from "@ionic/storage";

@Injectable()
export class FirebaseProvider {
  clave:any;
  constructor(private db:AngularFireDatabase,
              private platfrom:Platform,
              private storage:Storage) {
  }

  goToRegisterUser(usr:any){
    return new Promise((resolve,reject)=>{
      this.db.object(`usuarios/${usr.usuario}`).valueChanges().subscribe((response:any)=>{
        if(response!=null){
          reject('Usuario ya existente');
        }else{
          this.db.list('usuarios/').set(
            usr.usuario,
            {
              usuario:usr.usuario,
              contraseña:usr.contra,
              telefono:usr.tel
            }
          );
          resolve();
        }
      });
    })
  }

  loginUser(usr:any){
    return new Promise((resolve,reject)=>{
      debugger;
      this.db.object(`usuarios/${usr.usuario}`).valueChanges().subscribe((response:any)=>{
        if(response!=null){
          if(response.contraseña != usr.contraseña){
              reject('Contraseña incorrecta');
          }else{
            this.clave = response.contraseña;
            this.guardarStorage();
            resolve();
          }
        }else{
          reject('Usuario no encontrado');
        }
      })
    })
  }

  //Metodo para guardar la sesion en Storage SQLite
  guardarStorage(){
    if(this.platfrom.is('cordova')){
      this.storage.set('clave',this.clave);
    }else{
      //web
      localStorage.setItem('clave',this.clave);
    }
  }

  cargarStorage(){
    return new Promise((resolve)=>{
      if(this.platfrom.is('cordova')){
        this.storage.get('clave').then( val =>{
          if(val){
              this.clave = val;
              resolve(true);
          }else{
            resolve(false);
          }
        })
      }else{
        //web
        if(localStorage.getItem('clave')){
          this.clave = localStorage.getItem('clave');
          resolve(true);
        }else{
          resolve(false);
        }
      }
    })
  }

}
