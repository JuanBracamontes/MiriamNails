import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LevantarCitaPage } from './levantar-cita';

@NgModule({
  declarations: [
    LevantarCitaPage,
  ],
  imports: [
    IonicPageModule.forChild(LevantarCitaPage),
  ],
})
export class LevantarCitaPageModule {}
