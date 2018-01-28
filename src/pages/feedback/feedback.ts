import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { StartpagePage } from '../startpage/startpage';
import { TabsPage } from '../tabs/tabs';


import { Http, Headers, RequestOptions } from '@angular/http';





/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {

  data = {}
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  contact: string = '';
  location: string = '';
  description: string = '';

  constructor(public navCtrl: NavController,
    private socialSharing: SocialSharing,
    public navParams: NavParams,
    public toastCtrl: ToastController,public http: Http) {



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
//home
goHome()
{
  this.navCtrl.push(StartpagePage);
}

//postFeedback

postFeedback()

{

    var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });

     let data = {




                first_name :this.first_name,
                last_name  :this.last_name,
                email      :this.email,
                contact    :this.contact,
                location   :this.location,
                description:this.description




            };

             this.http.post("http://slickstars.com/api/feedback", data,options)
          .subscribe(data => {
            console.log(data['_body']);
            // console.log(data);
            // this.data = data._body;

         }, error => {
          console.log(error);// Error getting the data
        });
            console.log(data);

            this.http.post("http://slickstars.com/api/feedback", data,options);

}


//other demo

  //postRequestFunction
  // postFeedback() {
  //   var headers = new Headers();
  //   headers.append("Accept", 'application/json');
  //   headers.append('Content-Type', 'application/json' );
  //   let options = new RequestOptions({ headers: headers });
  //
  //   let postParams = {
  //
  //               first_name: "wandie",
  //               last_name: "adlkada",
  //               email    : "adad",
  //               contact: "adad",
  //               location: "adad",
  //               description: "ada"
  //   }
  //
  //   this.http.post("http://slickstars.com/api/feedback", postParams, options)
  //     .subscribe(data => {
  //       console.log(data['_body']);
  //       console.log(postParams);
  //       this.data = data._body;
  //
  //
  //      }, error => {
  //       console.log(error);// Error getting the data
  //     });
  // }







//toast
presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Feedback sent,Thank You!',
      duration: 3000
    });

    toast.present();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

}
