import {Page, NavController, NavParams, Alert, MenuController, IonicApp} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/settings/certify/certify.html'
})
export class CertifyPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }
}