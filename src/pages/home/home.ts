import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public posts: any = [
    {
      title: "BUY MEEEE",
    name: "steve",
    date: "October.18.10.2017",
    content: "the book of all knowledge",
    contactInf: "trylleveien 5B, Oslo"
    },
    {
    title: "Best Book",
    name: "Erwin",
    date: "December.18.10.2017",
    content: "tech...book",
    contactInf: "trylleveien 5C, Oslo"
    }
  ]
  publish(){
  this.navCtrl.push('PublishPage');
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
