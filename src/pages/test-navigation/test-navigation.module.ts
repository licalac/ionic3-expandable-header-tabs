import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestNavigationPage } from './test-navigation';

@NgModule({
  declarations: [
    TestNavigationPage,
  ],
  imports: [
    IonicPageModule.forChild(TestNavigationPage),
  ],
  exports: [
    TestNavigationPage
  ]
})
export class TestNavigationPageModule {}
