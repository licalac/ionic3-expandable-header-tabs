import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpandableHeader } from './expandable-header';

@NgModule({
  declarations: [
    ExpandableHeader,
  ],
  imports: [
    IonicPageModule.forChild(ExpandableHeader),
  ],
  exports: [
    ExpandableHeader
  ]
})
export class ExpandableHeaderComponentModule {}