
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'

@Injectable()
export class FirebaseProvider {

  constructor(private db:AngularFireDatabase) {
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


}
