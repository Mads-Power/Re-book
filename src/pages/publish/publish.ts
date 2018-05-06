import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { Post } from '../../app/models/post.model';
import { PostListService } from '../../services/posts-list/posts-list.service';



Injectable()
@IonicPage()
@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html',
})
export class PublishPage {


  post: Post = {
    name:'',
    date:'',
    description:'',
    phoneNr:undefined

  }

  public postText: string = "";
  
  constructor(private camera: Camera,
    public navCtrl: NavController, public navParams: NavParams, private pubPost: PostListService, 
    public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishPage');
  }

  addPic(){

    const caOpt: CameraOptions ={
      quality:100,
      targetHeight:600,
      targetWidth:600,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(caOpt).then((ImageData)=>{
      let base64Image = 'data:image/jpeg;base64,' + ImageData;
    }, (err)=>{
      console.log(err);
    });

   }
  

  addNewPost(post: Post){
     try{
      this.pubPost.addPost(post).then(ref =>{
        this.navCtrl.push('HomePage');

      })
    } catch{
      let alert = this.alertCtrl.create({
        title: 'Fill out all details please!',
        buttons: ['OK']
       
      });
      alert.present();
      this.navCtrl.push('PublishPage');
    }
  }

  backBtn(){
    this.navCtrl.push('HomePage');
  }
  

}
