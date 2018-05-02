import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';



@IonicPage()
@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html',
})
export class PublishPage {

  constructor(private camera: Camera,
    public navCtrl: NavController, public navParams: NavParams) {
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
  

}
