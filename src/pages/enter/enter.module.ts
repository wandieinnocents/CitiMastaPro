import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnterPage } from './enter';
//import { TabsPage } from '../../pages/tabs/tabs';

@NgModule({
  declarations: [
    EnterPage
    //TabsPage
  ],
  imports: [
    IonicPageModule.forChild(EnterPage),
  ],
})
export class EnterPageModule {}
