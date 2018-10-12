import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//pages
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {RegistroPage} from "../pages/registro/registro";

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AlertServiceProvider } from '../providers/alert-service/alert-service';
import { GlobalProvider } from '../providers/global/global';

//storage
import{IonicStorageModule} from "@ionic/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAi91qoj-nafPxLO0BrVjzZUl4n7o2nZFo",
  authDomain: "miriamnails-b5eb7.firebaseapp.com",
  databaseURL: "https://miriamnails-b5eb7.firebaseio.com",
  projectId: "miriamnails-b5eb7",
  storageBucket: "miriamnails-b5eb7.appspot.com",
  messagingSenderId: "839669283351"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AlertServiceProvider,
    GlobalProvider
  ]
})
export class AppModule {}
