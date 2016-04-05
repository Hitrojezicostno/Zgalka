import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';
import {HomePage} from '../home/home';

@Page({
  templateUrl: 'build/pages/signin/signin.html'
})
export class SigninPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams, app, menu) {
    this.nav = nav;
    this.app = app;
    this.menu = menu;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

   doAlert() {
    let alert = Alert.create({
      title: 'Prijavni podatki',
      subTitle: '<p><b>Uporabniško ime:</b> demo</p><span><b>Geslo: </b>demo</span>',
      buttons: ['Ok']
    });
    this.nav.present(alert);
  }

  login() {
    this.nav.push(HomePage);
    this.nav.setRoot(HomePage);
  }
}