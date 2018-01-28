import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrafficupdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trafficupdate',
  templateUrl: 'trafficupdate.html',
})
export class TrafficupdatePage {

  constructor(public navCtrl: NavController,
    private viewCtrl: ViewController,
     public navParams: NavParams) {
  }

  onClose()
  {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrafficupdatePage');
  }

}
