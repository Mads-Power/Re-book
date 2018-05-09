import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AngularFireAuth} from "angularfire2/auth";
import { User } from '../../app/models/user';

 



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  

  user ={} as User;

  constructor(private afAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user:User){
    try{
     const result = await this.afAuth.auth.
     createUserWithEmailAndPassword(this.user.email, this.user.password);
     console.log(result);
     this.navCtrl.push('LoginPage');
    }catch(e){
        console.error(e);
    }

  }
  backBtn(){
    this.navCtrl.push('LoginPage');
  }

}
