import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnterPage } from '../pages/enter/enter';
import { LoggedinPage } from '../pages/loggedin/loggedin';
//import { TabsPage } from '../pages/tabs/tabs';
import { ModalPage } from '../pages/modal/modal';


// import { PeopleupdatesPage } from '../pages/peopleupdates/peopleupdates';
import { RegisterPage } from '../pages/register/register';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';
import { StartpagePage } from '../pages/startpage/startpage';
import { ContactPage } from '../pages/contact/contact';
import { FeedbackPage } from '../pages/feedback/feedback';
import { TripsPage } from '../pages/trips/trips';
import { Push} from '@ionic-native/push';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { BackgroundMode } from '@ionic-native/background-mode';
import { TrafficupdatePage } from '../pages/trafficupdate/trafficupdate';
import { AutoPage } from '../pages/auto/auto';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { GoogleMaps } from '@ionic-native/google-maps';

// import { LoginverfyPage } from '../pages/loginverfy/loginverfy';

  import * as firebase from 'firebase';



//firebse config
export const firebaseAuth = {
  apiKey: "AIzaSyD0gjFq99Cb5CXzhOxDoc2WZpM29ZxTBag",
  authDomain: "trafficapp-3cee2.firebaseapp.com",
  databaseURL: "https://trafficapp-3cee2.firebaseio.com",
  projectId: "trafficapp-3cee2",
  storageBucket: "trafficapp-3cee2.appspot.com",
  messagingSenderId: "69157020230"
};

firebase.initializeApp(firebaseAuth);






// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    TrafficupdatePage,
    AutoPage,
    EnterPage,
    LoggedinPage,
    // LoginverfyPage
    //ModalPage,
    // PeopleupdatesPage,
  //TabsPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrafficupdatePage,
    AutoPage,
    EnterPage,
    LoggedinPage,
  //  LoginverfyPage
    //ModalPage,
    // PeopleupdatesPage,

   //TabsPage

  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StartpagePage,
    ContactPage,
    FeedbackPage,
    BackgroundMode,
    TripsPage,
    StatusBar,
    GoogleMaps,
    Push,
    SocialSharing,
    Geolocation,
    HttpModule,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConnectivityServiceProvider,
    GoogleMapsProvider
  ]
})
export class AppModule { }
