import { Component } from '@angular/core';

import { IonicPage, NavController } from 'ionic-angular';

import { TestNavigationPage } from '../test-navigation/test-navigation';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	testData: any = new Array(5);

	constructor(public navCtrl: NavController) {

	}

	// goTest() {
	// 	this.navCtrl.push(TestNavigationPage);
	// }

	goTest() {
		this.navCtrl.push('TestLazyPage');
	}

}
