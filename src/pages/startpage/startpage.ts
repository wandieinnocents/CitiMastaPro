import { Component,ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,Platform,LoadingController } from 'ionic-angular';
import { AutoPage } from '../auto/auto';
import { TabsPage } from '../tabs/tabs';
import { ModalPage } from '../modal/modal';
// import { VerifyPage } from '../../pages/verify/verify';
import { LoginverfyPage } from '../../pages/loginverfy/loginverfy';


import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { AngularFireAuth } from  'angularfire2/auth';
import { GoogleMaps,GoogleMap } from '@ionic-native/google-maps';

declare var google;


  import * as firebase from 'firebase';

/**
 * Generated class for the StartpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-startpage',
  templateUrl: 'startpage.html',
})
export class StartpagePage {
  location: any;
  //gmLocation: {lat: number, lng: number} = {lat: 0, lng: 0};

  phoneNumber: any = '';

  latLng: string;
  marker: any;

   address:any;
	Start: any ;
	End: any = '';
  MyLocation: any = '';
  data = {}


  //adding current location declarations
  @ViewChild('map') mapElement: ElementRef;

//  map: any;
  map: GoogleMap;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
   private  platform: Platform,
    private geolocation: Geolocation,
      public afAuth: AngularFireAuth,
      //private _googleMaps: GoogleMaps,
    private modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,

    public http: Http) {


    //  this.onLocateUser();

      // this.platform.ready().then(() => {
      //
      //   this.geolocation.getCurrentPosition().then(resp => {
      //     console.log(resp.coords.latitude);
      //     console.log(resp.coords.latitude);
      //   }).catch(() => {
      //     console.log("Error to get location ");
      //   });
      // });
      //




    //autocomplete
    this.address = {
      place: ''
    };

  }

  ionViewDidLoad(){

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 7000
    });
    loader.present();

    this.loadMap();

   }


   loadMap(){

       this.geolocation.getCurrentPosition().then((position) => {



       var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);




       let mapOptions = {
         center: latLng,
         zoom: 16,

         mapTypeId: google.maps.MapTypeId.ROADMAP
         //mapTypeId: google.maps.MapTypeId.ROADMAP

       }



       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

       this.marker = new google.maps.Marker({
       map: this.map,
       position: latLng ,  //here in marker set the center position
       //label:"Your Here ",
       animation: google.maps.Animation.DROP,
       icon: ''
     });

       //console.log(position.coords.latitude);
       console.log('position gotten now: long:',position.coords.latitude,' lat:',position.coords.longitude);

     }, (err) => {
       console.log(err);
     });

   }


     //calculate route function
      calculateAndDisplayRoute(directionsService, directionsDisplay) {

      		//initialise map
         //street view variable panaroma


         let that = this;
      		var directionsService = new google.maps.DirectionsService;
           var directionsDisplay = new google.maps.DirectionsRenderer({
             draggable: true,
             map: map,
             panel: document.getElementById('right-panel')

           });


           var map = new google.maps.Map(document.getElementById('map'), {
             zoom: 16,
             // center: {lat: 41.85, lng: -87.65}
             center: {lat: 0.347596, lng: 32.582520}
           });

           directionsDisplay.setMap(map);
           directionsDisplay.addListener('directions_changed', function() {
             // computeTotalDistance(directionsDisplay.getDirections());
           });



            //pick the current location from here

            this.geolocation.getCurrentPosition().then((position) => {

            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);



            let mapOptions = {
              center: latLng,
              zoom: 16,

              mapTypeId: google.maps.MapTypeId.ROADMAP
              //mapTypeId: google.maps.MapTypeId.ROADMAP

            }


            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            //picking start origin
            // this.MyLocation = new google.maps.LatLng(latLng);
            this.MyLocation = latLng;

            //console.log(position.coords.latitude);
            console.log('position gotten distance now: long:',position.coords.latitude,' lat:',position.coords.longitude);

           });

          //end of current location code here


           //show street view


           //end of init map function
           directionsService.route({
             origin: this.MyLocation,
             destination: this.End,
             travelMode: 'DRIVING',
             avoidTolls: true,
           }, function(response, status) {
             if (status === 'OK') {
               directionsDisplay.setDirections(response);
             } else {
               window.alert('Directions request failed due to ' + status);
             }
           });


         }

  // onLocateUser() {
  //     this.geolocation.getCurrentPosition()
  //       .then(
  //         (location) => {
  //          // console.log('position gotten: long:',location.coords.longitude,' lat:',location.coords.latitude);
  //           this.location = location;
  //           this.gmLocation.lat = location.coords.latitude;
  //           this.gmLocation.lng = location.coords.longitude;
  //         }
  //       )
  //       .catch(
  //         (error) => {
  //           console.log('Error getting location', error);
  //         }
  //       )
  //
  //   }

  //modal  page

  openModal(){
    var data = { message : 'hello world' };
    var modalPage = this.modalCtrl.create('ModalPage',data);
    var modalPage = this.modalCtrl.create('ModalPage');
    modalPage.present();

   }
   //new autocomplete

//geolocation on lauch


//map re-generation
 // calculateAndDisplayRoute(directionsService, directionsDisplay) {
 //
 //         var directionsService = new google.maps.DirectionsService;
 //          var directionsDisplay = new google.maps.DirectionsRenderer;
 //          var map = new google.maps.Map(document.getElementById('map'), {
 //           zoom: 7,
 //           center: {lat: 41.85, lng: -87.65}
 //          });
 //        directionsDisplay.setMap(map);
 //        //geo location here
 //
 //        if (navigator.geolocation) {
 //          navigator.geolocation.getCurrentPosition(function(position) {
 //            var pos = {
 //              lat: position.coords.latitude,
 //              lng: position.coords.longitude
 //            };
 //
 //            // infoWindow.setPosition(pos);
 //            // infoWindow.setContent('Location found.');
 //            // infoWindow.open(map);
 //            map.setCenter(pos);
 //            //declare current location
 //            this.MyLocation = new google.maps.latLng(pos);
 //          }, function() {
 //          //  handleLocationError(true, infoWindow, map.getCenter());
 //          console.log("locatin found");
 //          });
 //        } else {
 //          // Browser doesn't support Geolocation
 //        //  handleLocationError(false, infoWindow, map.getCenter());
 //        }
 //
 //
 //        directionsService.route({
 //          origin:this.MyLocation,
 //          destination: this.End,
 //          travelMode: 'DRIVING'
 //        }, function(response, status) {
 //          if (status === 'OK') {
 //            directionsDisplay.setDirections(response);
 //          } else {
 //            window.alert('Directions request failed due to ' + status);
 //          }
 //        });
 //      }
 //
 //
 //






sendCode(form)
{
  this.afAuth.auth.signInWithPhoneNumber(form.value.phoneNumber,new firebase.auth.RecaptchaVerifier
    ('re-container ',{
      'size':'invisible'
    })).then(data => {
      this.navCtrl.push('LoginverfyPage',{ confirmationResult: data })
    }).catch(err =>  {
      console.log(err);
    })


}






  //modal autocomplete
  showAddressModal () {
    let modal = this.modalCtrl.create(AutoPage);
    let me = this;
    modal.onDidDismiss(data => {
      this.address.place = data;
    });
    modal.present();
  }



//toast
presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Trip Saved,Thank You!',
      duration: 3000
    });

    toast.present();
  }
  saveTrip(){

    var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });

    let data = {




                // title: this.title,
                // destination  :this.destination

                title: '',
                destination  :''





            };

             this.http.post("http://127.0.0.1:8000/api/trips", data,options)
          .subscribe(data => {
            console.log(data['_body']);
            // console.log(data);
            // this.data = data._body;

         }, error => {
          console.log(error);// Error getting the data
        });
            console.log(data);

            this.http.post("http://127.0.0.1:8000/api/trips", data,options);

}

//load map current location



//adding markers
// addMarker(){
//
//   let marker = new google.maps.Marker({
//     map: this.map,
//     animation: google.maps.Animation.DROP,
//     position: this.map.getCenter()
//   });
//
//   let content = "<h4>Welcome to Citi Master, This is where you are,!</h4>";
//
//   this.addInfoWindow(marker, content);
//
// }
//adding informaiton winoow when a user taps on the marker
// addInfoWindow(marker, content){
//
//   let infoWindow = new google.maps.InfoWindow({
//     content: content
//   });
//
//   google.maps.event.addListener(marker, 'click', () => {
//     infoWindow.open(this.map, marker);
//   });
//
// }








}
