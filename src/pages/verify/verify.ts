import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class VerifyPage {

  confirmationResult;
  code;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.confirmationResult =  this.navParams.get('confirmationResult');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyPage');
  }
 verifyCode(form){
   const credential = firebase.auth.PhoneAuthProvider.credential(this.confirmationResult.verificationId,form.value.code)
   firebase.auth().signInWithCredential(credential).then(user => {
     console.log(user);
     this.navCtrl.setRoot('StartpagePage');
   }).catch(err => {
     console.log(err);
   })
 }

}
