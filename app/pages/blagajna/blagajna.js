import {Page, NavController, NavParams, Alert} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/blagajna/blagajna.html'
})
export class BlagajnaPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
  	constructor(nav) {
  		this.nav = nav;
  	}

	goBack() {
		console.log('BACK');
		this.nav.pop();
	}  
}