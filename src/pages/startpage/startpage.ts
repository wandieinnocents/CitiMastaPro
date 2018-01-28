import { Component,ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
declare var google;

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
	Start: any;
	End: any;
  data = {}

  //adding current location declarations
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation,public toastCtrl: ToastController,public http: Http) {


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
 ionViewDidLoad(){

    this.loadMap();


  }

// ngAfterViewInit() {
//     console.log("afterinit");
//     setTimeout(() => {
//       console.log(this.abc.nativeElement.innerText);
//     }, 1000);
//   }






  //
  loadMap(){

      this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });

  }
//adding markers
addMarker(){

  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });

  let content = "<h4>Welcome to Citi Master, This is where you are,!</h4>";

  this.addInfoWindow(marker, content);

}
//adding informaiton winoow when a user taps on the marker
addInfoWindow(marker, content){

  let infoWindow = new google.maps.InfoWindow({
    content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });

}


  //calculate route function
   calculateAndDisplayRoute(directionsService, directionsDisplay) {

   		//initialise map
      //street view variable panaroma
    
   		var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer({
          draggable: true,
          map: map,
          panel: document.getElementById('right-panel')
        });


        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });
        directionsDisplay.setMap(map);
        directionsDisplay.addListener('directions_changed', function() {
          computeTotalDistance(directionsDisplay.getDirections());
        });

        //show street view


        //end of init map function
        directionsService.route({
          origin: this.Start,
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



  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad StartpagePage');
  // }





}
