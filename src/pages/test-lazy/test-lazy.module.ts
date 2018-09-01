import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestLazyPage } from './test-lazy';

@NgModule({
  declarations: [
    TestLazyPage,
  ],
  imports: [
    IonicPageModule.forChild(TestLazyPage),
  ],
  exports: [
    TestLazyPage
  ]
})
export class TestLazyPageModule {}
