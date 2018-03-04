import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from  'angularfire2/auth';
import { EnterPage } from '../../pages/enter/enter';
import { TabsPage } from '../../pages/tabs/tabs';

// import { AngularFireAuthModule } from 'angularfire2/auth';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,
    private fire: AngularFireAuth,
    private alertCtrl:  AlertController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  openLoginPage()
  {
    this.navCtrl.push(EnterPage);
  }
//register alert

alert(message: string)
{
  this.alertCtrl.create({
    title: 'Citi Masta',
    subTitle: message,
    buttons: ['OK']
  }).present();
}
//register method
  registerUser()
  {
    this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.password.value)
    .then(data => {
      this.navCtrl.push('TabsPage');
      console.log('got data', data);
      this.alert('Registering!.....')
    })
    .catch(err => {
       console.log('got an error',err);
       this.alert(err.message);
    });
    console.log('registration taking place',this.user.value,this.password.value);
  }

}
