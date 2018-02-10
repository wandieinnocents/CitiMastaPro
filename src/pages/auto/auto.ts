import { Component,NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the AutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auto',
  templateUrl: 'auto.html',
})
export class AutoPage {
  autocompleteItems;
  autocomplete;
   address;
   service = new google.maps.places.AutocompleteService();
  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    private zone: NgZone,
    public navParams: NavParams) {

      this.autocompleteItems = [];
      this.autocomplete = {
        query: ''
      };


  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
  }

  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: {country: 'UG'} }, function (predictions, status) {


      me.autocompleteItems = [];
      me.zone.run(function () {
        predictions.forEach(function (prediction) {
          me.autocompleteItems.push(prediction.description);


        });
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutoPage');
  }

}
