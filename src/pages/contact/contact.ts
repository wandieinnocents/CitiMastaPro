import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController,
    private socialSharing: SocialSharing,
     public navParams: NavParams) {
  }

  //share app
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
    console.log('ionViewDidLoad ContactPage');
  }

}
