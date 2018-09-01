import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ExpandableHeader } from '../../components/expandable-header/expandable-header';

@NgModule({
  declarations: [
    HomePage,
    ExpandableHeader
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
