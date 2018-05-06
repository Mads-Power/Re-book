import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostListService } from '../../services/posts-list/posts-list.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../app/models/post.model';
import { snapshotChanges } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  postList$:Observable<Post[]>;

  public posts: any = [
    {
      title: "BUY MEEEE",
    name: "steve",
    date: "October.18.10.2017",
    content: "the book of all knowledge",
    phoneNr: "99665544"
    },
    
    {
    title: "Best Book",
    name: "Erwin",
    date: "December.18.10.2017",
    content: "tech...book",
    phoneNr: "99665544"
    }
  ]
  publish(){
  this.navCtrl.push('PublishPage');
}
  constructor(public navCtrl: NavController,
     public navParams: NavParams, private pubPost: PostListService) {

      this.postList$ = this.pubPost.getPostList().
      snapshotChanges().map(changes =>{
        return changes.map(c =>({
          key: c.payload.key, ...c.payload.val()
        }))
      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  logOut(){
    this.navCtrl.push('LoginPage');
  }

}
