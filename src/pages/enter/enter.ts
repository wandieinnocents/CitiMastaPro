import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from  'angularfire2/auth';
//import { LoggedinPage } from '../../pages/loggedin/loggedin';
//import { StartpagePage } from '../../pages/startpage/startpage';
import { TabsPage } from '../../pages/tabs/tabs';
import { PeopleupdatesPage } from '../../pages/peopleupdates/peopleupdates';


/**
 * Generated class for the EnterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enter',
  templateUrl: 'enter.html',
})
export class EnterPage {
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,
      private fire: AngularFireAuth,
      private alertCtrl:  AlertController,
       public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnterPage');
  }

alert(message: string)
{
  this.alertCtrl.create({
    title: 'Citi Masta',
    subTitle: message,
    buttons: ['OK']
  }).present();
}
  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value,this.password.value)
    .then(data => {
      //user is logged in
      this.alert('Welcome to citi masta');
      this.navCtrl.setRoot('TabsPage');
        console.log('got some data',this.fire.auth.currentUser);
      })
      .catch(err => {
        this.alert(err.message);
        console.log('got an error',err);
      });


    console.log('signing in with ',this.user.value,this.password.value);
  }

}
