import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ToastController } from 'ionic-angular';



/**
 * Generated class for the PeopleupdatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-peopleupdates',
  templateUrl: 'peopleupdates.html',
})
export class PeopleupdatesPage {

  data = {}

  road :string = '';

  status      :string = '';
  starting_at    :string = '';
  ending_at   :string = '';
  description:string = '';




  constructor(public navCtrl: NavController,

    public toastCtrl: ToastController,
    public http: Http,
     public navParams: NavParams) {
  }

  //toast here
  presentToast() {
      let toast = this.toastCtrl.create({
        message: 'Feedback sent,Thank You!',
        duration: 3000
      });

      toast.present();
    }


//post user update

postUserUpdate()

{

    var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });

     let data = {




                road :this.road,
                
                status      :this.status,
                starting_at    :this.starting_at,
                ending_at   :this.ending_at,
                description:this.description




            };

             this.http.post("http://slickstars.com/api/user_updates", data,options)
          .subscribe(data => {
            console.log(data['_body']);
            // console.log(data);
            // this.data = data._body;

         }, error => {
          console.log(error);// Error getting the data
        });
            console.log(data);

            this.http.post("http://slickstars.com/api/user_updates", data,options);

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PeopleupdatesPage');
  }

}
