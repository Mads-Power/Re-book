import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../app/models/user';
import{ AngularFireAuth } from "angularfire2/auth";




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;


  constructor(private afAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  async login(user:User){
    //Henter bruker info fra firebae for å autentisere at brukeren er reistrert
    try{
    const result =  this.afAuth.auth
    .signInWithEmailAndPassword(this.user.email, this.user.password);
      console.log(result);
     if(result){
      this.navCtrl.push('HomePage');
     }
   }catch(e){
        console.error(e);
        let alert = this.alertCtrl.create({
          title: 'Register or sign in!',
          buttons: ['OK']
         
        });
        alert.present();
        
      }
    
  }
  register(){
    this.navCtrl.push('RegisterPage');
  }
  

}
