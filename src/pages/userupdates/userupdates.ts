import { Component } from '@angular/core';
import { IonicPage,Alert, NavController, ModalController,NavParams,Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Http} from '@angular/http';
import { StartpagePage } from '../startpage/startpage';
import { TrafficupdatePage } from '../trafficupdate/trafficupdate';

import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';




import 'rxjs/add/operator/map';

/**
 * Generated class for the UserupdatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userupdates',
  templateUrl: 'userupdates.html',
})
export class UserupdatesPage {

  public sendTo   : any;
   public subject  : string = 'Message from Social Sharing App';
   public message  : string = 'Take your app development skills to the next level with Mastering Ionic - the definitive guide';
   // public image    : string	= 'http://masteringionic2.com/perch/resources/mastering-ionic-2-cover-1-w320.png';
   public uri      : string	= 'https://www.slickstars.com';

	posts: any;
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    public navParams: NavParams,public http: Http,
    private socialSharing: SocialSharing,
    public platform  : Platform,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

  	this.http.get('http://slickstars.com/api/traffic_updates')
  	.map(res => res.json()).subscribe(data => {
        this.posts = data.data;
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

  //goHome
  goHome()
  {
    this.navCtrl.push(StartpagePage);
  }

  goTrafficUpdate()
  {
    this.navCtrl.push(TrafficupdatePage);
  }

  onViewTraffic()
  {
      const modal  = this.modalCtrl.create(TrafficupdatePage);
      modal.present();
  }


  //alert
  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Citi Masta Update',

    subTitle: 'let us save',
    buttons: ['Dismiss']
  });
  alert.present();
}








  ionViewDidLoad() {
    // let loader = this.loadingCtrl.create({
    //   content: "Please wait...",
    //   duration: 6000
    // });
    // loader.present();

    console.log('ionViewDidLoad UserupdatesPage');
  }



}
