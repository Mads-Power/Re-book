import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{AngularFireModule}from "angularfire2";

import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './app.firebase.config';
import{ AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireAuth } from 'angularfire2/auth';



@NgModule({
  declarations: [
    MyApp,
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth
  ]
})
export class AppModule {}
