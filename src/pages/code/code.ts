import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


import 'rxjs/add/operator/map';



/**
 * Generated class for the CodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {
incidents: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private socialSharing: SocialSharing,
    public loadingCtrl: LoadingController) {

  	//fetching nearby incidents
  	this.http.get('http://slickstars.com/api/incidents')
  	.map(res => res.json()).subscribe(data => {
        this.incidents = data.data;
    });

  }

  shareInfo()
  {
  this.socialSharing.share("Download citi masta to save the citi", "Citi Masta App", "", "https://www.slickstars.com").
  then(() => {
  alert("Sharing success");
  // Success!
  }).catch(() => {
  // Error!
  alert("Share failed");
  });
  }




  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 6000
    });
    loader.present();

    console.log('ionViewDidLoad CodePage');
  }

}
