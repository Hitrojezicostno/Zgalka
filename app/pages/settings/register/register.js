import {Page, NavController, NavParams, Storage, LocalStorage, Modal, ViewController} from 'ionic-angular';
import {SettingsPage} from '../settings';
import {HomePage} from '../../home/home';


@Page({
  templateUrl: 'build/pages/settings/register/register.html'
})
export class RegisterPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParam) {
  	this.nav = nav;
  	this.local = new Storage(LocalStorage);

  	this.local.remove('registrationDone');

  	this.local.get('registrationDone').then((result) => {
  		console.log('rEEs', result);
  		if(result == null) {
  			this.local.set('registrationDone', true);
  			this.nav.root = RegisterCertifyPage;
  		} else {
  			this.root = RegisterPage;
  		}
  	});

  }
}


@Page({
  templateUrl: 'build/pages/settings/register/registerSlider/certifikat.html'
})
export class RegisterCertifyPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav){
        this.nav = nav;
    }

    next() {
    	this.nav.push(RegisterCompanyPage);
    }

    back() {
    	this.nav.pop();
    }
 
    goToHome(){
        this.nav.setRoot(HomePage);
    }
}


@Page({
  templateUrl: 'build/pages/settings/register/registerSlider/podjetje.html'
})
export class RegisterCompanyPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav){
        this.nav = nav;
    }
 	
 	next() {
    	this.nav.push(RegisterStorePage);
    }

    back() {
    	this.nav.pop();
    }
    goToHome(){
        this.nav.setRoot(HomePage);
    }
}


@Page({
  templateUrl: 'build/pages/settings/register/registerSlider/prodajno-mesto.html'
})
export class RegisterStorePage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

    dodajMesto() {
	    let modal = Modal.create(ModalStorePage);
	    this.nav.present(modal);
	}

  	constructor(nav){
        this.nav = nav;
    }

    next() {
    	this.nav.push(RegisterUsersPage);
    }

    back() {
    	this.nav.pop();
    }
 
    goToHome(){
        this.nav.setRoot(HomePage);
    }
}

@Page({
  templateUrl: 'build/pages/settings/register/registerSlider/prodajno-mesto.modal.html'
})
export class ModalStorePage {
  static get parameters() {
    return [[NavController], [NavParams], [ViewController]];
  }

	constructor(nav, navParams, viewCtrl) {
		this.nav = nav;
		this.viewCtrl = viewCtrl;
	}
	close() {
		this.viewCtrl.dismiss();
	}
}


@Page({
  templateUrl: 'build/pages/settings/register/registerSlider/racuni.html'
})
export class RegisterRacuniPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav){
        this.nav = nav;
    }
 	
 	done() {
    	this.nav.setRoot(HomePage);
    }

    back() {
    	this.nav.pop();
    }
    goToHome(){
        this.nav.setRoot(HomePage);
    }
}


@Page({
  templateUrl: 'build/pages/settings/register/registerSlider/tiskalnik.html'
})
export class RegisterPrinterPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav){
        this.nav = nav;
    }

    next() {
    	this.nav.push(RegisterRacuniPage);
    }

    back() {
    	this.nav.pop();
    }
 
    goToHome(){
        this.nav.setRoot(HomePage);
    }
}


@Page({
  templateUrl: 'build/pages/settings/register/registerSlider/uporabniki.html'
})
export class RegisterUsersPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  	dodajUporabnik() {
	    let modal = Modal.create(ModalUsersPage);
	    this.nav.present(modal);
	}

 	 constructor(nav){
        this.nav = nav;
    }

    next() {
    	this.nav.push(RegisterPrinterPage);
    }

    back() {
    	this.nav.pop();
    }
 
    goToHome(){
        this.nav.setRoot(HomePage);
    }
}

@Page({
  templateUrl: 'build/pages/settings/register/registerSlider/uporabniki.modal.html'
})
export class ModalUsersPage {
  static get parameters() {
    return [[NavController], [NavParams], [ViewController]];
  }

	constructor(nav, navParams, viewCtrl) {
		this.nav = nav;
		this.viewCtrl = viewCtrl;
	}
	close() {
		this.viewCtrl.dismiss();
	}
}