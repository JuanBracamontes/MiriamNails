
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

  constructor() {
    console.log('Hello GlobalProvider Provider');
  }


  checkEmptyFields(campo: any) {
    if (campo == "" || campo == null || campo == undefined) {
      return true;
    }
  }

}
